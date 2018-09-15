const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5,
  /*
  * Aberto para todos
  */
  origins: ['*'], // De qualquer lugar
  allowHeaders: ['*'], // De qualquer header
  exposeHeaders: ['*'] // Vai expor todos os headers
})

module.exports = cors
