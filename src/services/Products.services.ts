import ProductsRepository from '../repository/Products.repository'
const repository = new ProductsRepository()
export default class ProductsServices {
  async createProduct (datos: {
    datos(datos: any): unknown; title: any; price: any; thumbnail: any
}) {
  // @ts-ignore
    console.log(datos.datos)
    const res = await repository.createProduct({ ...datos.datos })
    return res.data
  }

  async getProducts () {
    const res = await repository.getProducts()
    return res.data
  }
}
