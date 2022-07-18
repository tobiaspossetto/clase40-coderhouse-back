import ProductsServices from '../services/Products.services'
const service = new ProductsServices()
export default class ProductsController {
  async createProduct (data: any) {
    const res = await service.createProduct(data)
    if (res.error) {
      return {
        error: true,
        data: 'ocurrio un error creando el producto'
      }
    } else {
      return {
        error: false,
        data: res.data
      }
    }
  }

  async getProducts () {
    const res = await service.getProducts()
    if (res.error) {
      return {
        error: true,
        data: 'ocurrio un error obteniendo los productos'
      }
    } else {
      return {
        error: false,
        data: res.data
      }
    }
  }
}
