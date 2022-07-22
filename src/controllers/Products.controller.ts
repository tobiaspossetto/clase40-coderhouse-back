import { Request, Response } from 'express'
import ProductsServices from '../services/Products.services'
const service = new ProductsServices()
export default class ProductsController {
  async createProduct (req: Request, res: Response) {
    try {
      if (!req.body.title || !req.body.price || !req.body.thumbnail) {
        return res.status(400).json({
          error: true,
          data: 'Faltan campos o estan incorrectos'
        })
      }
      const result = await service.createProduct({ title: req.body.title, price: req.body.price, thumbnail: req.body.thumbnail })
      if (result.error) {
        console.log(result.data)
        return res.status(400).json({
          error: true,
          data: 'ocurrio un error creando el producto'
        })
      } else {
        return res.status(201).json({
          error: false,
          data: result.data
        })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: true, data: 'ocurrio un error interno' })
    }
  }

  async getProducts (req: Request, res: Response) {
    try {
      const result = await service.getProducts()
      if (result.error) {
        return res.status(400).json({
          error: true,
          data: 'ocurrio un error obteniendo los productos'
        })
      } else {
        return res.status(201).json({
          error: false,
          data: result.data
        })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: true, data: 'ocurrio un error interno' })
    }
  }
}
