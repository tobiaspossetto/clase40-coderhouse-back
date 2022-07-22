import express from 'express'
import ProductsController from '../controllers/Products.controller'
const productController = new ProductsController()
const Router = express.Router()
Router.get('/products', productController.getProducts)
Router.post('/products', productController.createProduct)
module.exports = Router
