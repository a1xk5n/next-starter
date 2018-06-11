import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Counter from './counter';

import './page.scss';

const Page = ({
    linkTo, NavigateTo, placeholderData, title,
}) => (
    <div className="page">
        <h1>{title}</h1>
        <Counter />
        <nav>
            <Link href={linkTo}>
                <a>Navigate: {NavigateTo}</a>
            </Link>
        </nav>
        {placeholderData && (
            <pre>
                <code>{JSON.stringify(placeholderData, null, 2)}</code>
            </pre>
        )}
    </div>
);

Page.propTypes = {
    linkTo: PropTypes.string.isRequired,
    NavigateTo: PropTypes.string.isRequired,
    placeholderData: PropTypes.shape({}),
    title: PropTypes.string.isRequired,
};

Page.defaultProps = {
    placeholderData: null,
};

export default connect(state => state)(Page);
