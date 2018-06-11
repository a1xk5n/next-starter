import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
    <div style={{ marginBottom: 20 }}>
        <Head>
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>
    </div>
);
