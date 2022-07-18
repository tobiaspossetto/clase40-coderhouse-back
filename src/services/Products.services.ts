import ProductsRepository from '../repository/Products.repository'
const repository = new ProductsRepository()
export default class ProductsServices {
  async createProduct (data:any) {
    const res = await repository.createProduct(data)
    return res
  }

  async getProducts () {
    const res = await repository.getProducts()
    return res
  }
}
