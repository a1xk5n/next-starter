const RouteFactory = require('next-routes');

const routes = RouteFactory();

routes.add('/dashboard', 'app-pages/dashboard').add('/other', 'app-pages/other');

module.exports = routes;
