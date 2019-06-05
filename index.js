const fastify = require('fastify')({ logger: true });
const routes = require('./routes');
const swagger = require('./config/swagger');
const mongoose = require('mongoose');
routes.forEach((route, index) => {
    fastify.route(route)
});

fastify.register(require('fastify-formbody'));
fastify.register(require('fastify-swagger'), swagger.options);
fastify.register(require('morgan')('dev'));
mongoose.promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/condoapp', { useNewUrlParser: true })
        .then(() => console.log('MongoDB connected!'))
        .catch(err => console.log(err));


        fastify.get('/', async (request, reply) => {
    return { message: "OnWave Solutions DR"}
});
const start = async () => {
    try {
        await fastify.listen(1337)
        fastify.swagger()
        fastify.log.info(`Server listening @ localhost:${fastify.server.address().port}`)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}


start();