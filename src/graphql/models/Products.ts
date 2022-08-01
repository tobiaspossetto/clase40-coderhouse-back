const { buildSchema } = require('graphql')

class Product {
  title: any
  id: any
  price: any
  thumbnail: any

  constructor (id: any, { title, price, thumbnail }: any) {
    this.id = id
    this.title = title
    this.price = price
    this.thumbnail = thumbnail
  }
}

const schema = buildSchema(`
  type Product {
    id: ID!
    title: String,
    price: Int,
    thumbnail: String
  }
  input ProductInput {
    title: String,
    price: Int,
    thumbnail: String
  }
  type Query {
    getProduct(id: ID!): Product,
    getProducts(campo: String, valor: String): [Product],
  }
  type Mutation {
    createProduct(datos: ProductInput): Product
    
  }
`)

export { Product, schema }
