import ProductsLocalDaos from '../daos/ProductsLocal.daos'
import ProductsMongoDaos from '../daos/ProductsMongo.daos'

export default class ProductsFactory {
  static create (type:string) {
    switch (type) {
      case 'local':
        return ProductsLocalDaos.getInstance()
      case 'mongo':
        return ProductsMongoDaos.getInstance()
      default:
        return ProductsMongoDaos.getInstance()
    }
  }
}
