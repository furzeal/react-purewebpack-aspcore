const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = 4000

server.use((req, res, next) => {
  setTimeout(next, 1000)
})
server.use(middlewares)
server.use('/rest', router)

server.listen(4000, () => {
  console.log(`JSON server is running on prop ${port}`)
})
