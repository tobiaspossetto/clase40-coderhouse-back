import express from 'express'
import ProductsController from '../controllers/Products.controller'
import { graphqlHTTP } from 'express-graphql'
import { schema } from '../graphql/models/Products'
import ProductsServices from '../services/Products.services'
const service = new ProductsServices()
const productController = new ProductsController()
const Router = express.Router()
Router.get('/products', productController.getProducts)
Router.post('/products', productController.createProduct)
Router.get('/graphql', graphqlHTTP({
  schema,
  rootValue: {
    getProducts: service.getProducts()
  },
  graphiql: true
}))
module.exports = Router
