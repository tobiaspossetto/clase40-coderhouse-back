import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import minimist from 'minimist'
import cookieParser from 'cookie-parser'
import { getConnectionMongo } from './db/mongoDbConnection'
import { schema } from './graphql/models/Products'
import ProductsServices from './services/Products.services'
export const args = minimist(process.argv.slice(2))

export const app = express()
export const persistence = args._[0]

const service = new ProductsServices()
console.log(args._[0])
dotenv.config()

app.use(morgan('dev'))
app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser())
getConnectionMongo()
app.use('/api/', require('./routes/routes'))
app.set('views', './src/views')
app.set('view engine', 'pug')
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: {
    getProducts: service.getProducts,
    createProduct: service.createProduct
  },
  graphiql: true
}))
export default app
