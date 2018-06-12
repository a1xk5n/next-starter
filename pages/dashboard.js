import React from 'react';
import { connect } from 'react-redux';

import { loadData } from 'main/actions/actions';
import Page from 'main/components/page';
import Header from 'main/components/header';

class Index extends React.PureComponent {
    static async getInitialProps(props) {
        const { store, isServer } = props.ctx;
        store.dispatch(loadData());

        return { isServer };
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Page title={`${process.env.TEST}1111`} />
            </React.Fragment>
        );
    }
}

export default connect()(Index);
