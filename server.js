/**
 * Created by Rok on 2016-07-26.
 */
'use strict';

const Hapi = require('hapi');
const routes = require('./routes');

const server = new Hapi.Server();
server.connection({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
});

server.route(routes);
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('server running at: ' + server.info.uri);
});