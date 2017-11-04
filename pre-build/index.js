import { Server } from 'organiser'
import { Hello } from './controllers/hello/'
import { User } from './controllers/users/'

const server = new Server({
  port: process.env.PORT,
  host: process.env.HOST,
  name: process.env.NAME
})
server.routes(Hello, User) // register controllers
server.boot().catch(err => {
  console.error(err)
  process.exit(1)
})
