import { describe, it } from 'mocha'

const request = require('supertest')('http://localhost:4000')
const expect = require('chai').expect
describe('TEST DE PRODUCTOS', () => {
  describe('Crear productos', () => {
    it('Devolver un error porque los campos son incorrectos', async () => {
      const product = {
        title: 'Producto 1',
        price: 100,
        description: 'Descripcion del producto 1'
      }
      const response = await request.post('/api/products').send(product)
      expect(response.status).to.equal(400)
      expect(response.body.error).to.equal(true)
      expect(response.body.data).to.be.an('string')
    }).timeout(10000)
    it('Crear un productos exitosamente', async () => {
      const product = {
        title: 'Producto 1',
        thumbnail: '2fdssd',
        price: 3244
      }
      const response = await request.post('/api/products').send(product)
      expect(response.status).to.equal(201)
      expect(response.body.error).to.equal(false)
      expect(response.body.data).to.be.an('object')
    }).timeout(10000)
  })
  describe('listado de productos', () => {
    it('Devolver un arreglo de productos', async () => {
      const response = await request.get('/api/products')
      expect(response.status).to.equal(201)
      expect(response.body.error).to.equal(false)
      expect(response.body.data).to.be.an('array')
    }).timeout(10000)
  })
})
