const Hapi = require('@hapi/hapi');

const routes = require('./routes');
const port = 9000;

const init = async () => {
    const server = Hapi.server({
        port,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    server.route(routes);

    await server.start();

    console.log(`Server running on ${server.info.uri} 🚀`);
};

init();