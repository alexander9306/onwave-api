exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'Condominio API',
        description: 'API',
        version: '1.0.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Condo management'
      },
      host: 'localhost:1337/admin',
      schemes: ['admin'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  }