import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from '../../../../routes';

import Counter from './counter';

import './page.scss';

const Page = ({ placeholderData, title }) => (
    <div className="page">
        <h1>{title}</h1>
        <Counter />
        <nav>
            <ul>
                <li>
                    <Link route="settings" params={{ page: 'account' }}>
                        <a>account defaults</a>
                    </Link>
                </li>
                <li>
                    <Link route="settings" params={{ page: 'team' }}>
                        <a>team managments</a>
                    </Link>
                </li>
            </ul>
        </nav>
        {placeholderData && (
            <pre>
                <code>{JSON.stringify(placeholderData, null, 2)}</code>
            </pre>
        )}
    </div>
);

Page.propTypes = {
    placeholderData: PropTypes.shape({}),
    title: PropTypes.string.isRequired,
};

Page.defaultProps = {
    placeholderData: null,
};

export default connect(state => state.main)(Page);
