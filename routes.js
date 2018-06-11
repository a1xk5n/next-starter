const RouteFactory = require('next-routes');

const routes = RouteFactory();

routes.add('/dashboard', 'dashboard').add('/other', 'other');

module.exports = routes;
