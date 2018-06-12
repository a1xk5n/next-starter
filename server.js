const express = require('express');
const next = require('next');
const proxy = require('http-proxy-middleware');

const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
    express()
        .use('/api', proxy({ target: 'http://stage-api.assembleup.com:8080', changeOrigin: true, secure: false }))
        .get('/', (req, res) => res.redirect('/dashboard'))
        .use(handle)
        .listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
});
