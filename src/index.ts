import fastifyPassport from '@fastify/passport';

fastifyPassport.initialize()
fastifyPassport.secureSession()

fastifyPassport.use(undefined as any, undefined as any);
