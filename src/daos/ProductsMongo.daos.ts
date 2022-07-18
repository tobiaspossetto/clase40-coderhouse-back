import { Product } from '../db/product'

let instance:any = null
export default class ProductsMongoDaos {
  static getInstance () {
    if (instance === null) {
      instance = new ProductsMongoDaos()
    }

    return instance
  }

  async createProduct (data: any) {
    try {
      const prod = new Product(data)
      const res = await prod.save()
      console.log(res)
      return {
        error: false,
        data: res
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        data: 'error de la base de datos'
      }
    }
  }

  async getProducts () {
    try {
      const res = await Product.find()
      return {
        error: false,
        data: res
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        data: 'error de la base de datos'
      }
    }
  }
}
