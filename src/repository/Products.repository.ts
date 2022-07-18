import ProductsFactory from '../factory/ProductsFactory'
import { persistence } from '../app'
export default class ProductsRepository {
  daos: any
  constructor () {
    this.daos = ProductsFactory.create(persistence)
  }

  async createProduct (data: any) {
    try {
      const res = await this.daos.createProduct(data)
      return res
    } catch (error) {
      console.log(error)
      return {
        error: true,
        data: 'error al contactar con daos'
      }
    }
  }

  async getProducts () {
    try {
      const res = await this.daos.getProducts()
      return res
    } catch (error) {
      console.log(error)
      return {
        error: true,
        data: 'error al contactar con daos'
      }
    }
  }
}
