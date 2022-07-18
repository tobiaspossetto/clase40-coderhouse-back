import app from './app'
import sockets from './socket/sockets'

const { createServer } = require('http')
const socketIo = require('socket.io')
const server = createServer(app)
const io = socketIo(server, { cors: { origin: '*' } }) // you can change the cors to your own domain

app.use((req, res, next) => {
  // @ts-ignore
  req.io = io
  return next()
})

sockets(io)
app.use('/api', require('./routes/routes'))
server.listen(4000, () => console.log('Server started!'))
