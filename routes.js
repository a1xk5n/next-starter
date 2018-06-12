const RouteFactory = require('next-routes');

const routes = RouteFactory();

routes.add('dashboard', '/dashboard').add('settings', '/settings/:page(account|team)');

module.exports = routes;
