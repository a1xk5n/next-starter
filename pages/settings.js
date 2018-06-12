import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from 'main/components/header';

import { Link } from '../routes';

class Settings extends React.PureComponent {
    static propTypes = {
        page: PropTypes.string.isRequired,
    };

    static async getInitialProps(props) {
        const { isServer, query } = props.ctx;
        return {
            isServer,
            page: query.page,
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Link route="dashboard">
                    <a>dashboard</a>
                </Link>
                <div>{this.props.page}</div>
            </React.Fragment>
        );
    }
}

export default connect()(Settings);
