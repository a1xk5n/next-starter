import React from 'react';
import { connect } from 'react-redux';

import { loadData } from '../src/js/main/actions/actions';
import Page from '../src/js/main/components/page';
import Header from '../src/js/main/components/header';

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
                <Page title={`${process.env.TEST}1111`} linkTo="/other" NavigateTo="Other Page" />
            </React.Fragment>
        );
    }
}

export default connect()(Index);
