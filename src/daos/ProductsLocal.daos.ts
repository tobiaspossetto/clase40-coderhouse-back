const db: any[] = []
let instance:any = null
export default class ProductsLocalDaos {
  static getInstance () {
    if (instance === null) {
      instance = new ProductsLocalDaos()
    }

    return instance
  }

  async createProduct (data: any) {
    db.push(data)
    return {
      error: false,
      data
    }
  }

  async getProducts () {
    return {
      error: false,
      data: db
    }
  }
}
