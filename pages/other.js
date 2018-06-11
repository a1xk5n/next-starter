import React from 'react';
import { connect } from 'react-redux';

import Page from '../src/js/main/components/page';
import Header from '../src/js/main/components/Header';

class Other extends React.PureComponent {
    static async getInitialProps(props) {
        const { isServer } = props.ctx;
        return { isServer };
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />
            </React.Fragment>
        );
    }
}

export default connect()(Other);
