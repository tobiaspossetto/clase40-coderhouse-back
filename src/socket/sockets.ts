import MsgController from '../controllers/Msg.controller'
import ProductsController from '../controllers/Products.controller'
const ProductController = new ProductsController()
const MyMsgController = new MsgController()
export default (io: any) => {
  io.on('connection', async (io: any) => {
    console.log('new user connected')
    // io.on('NEW_PRODUCT', async (data: any) => {
    //   ProductController.createProduct({
    //     title: 'productoC40',
    //     price: 40,

    //     thumbnail: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    //   })
    // })
    // io.on('GET_PRODUCTS', async () => {
    //   const res = await ProductController.getProducts()
    //   io.emit('GET_PRODUCTS', res)
    // })

    io.on('NEW_MSG', async (data: any) => {
      MyMsgController.createMsg({
        author: 'autorx',
        message: 'masdasfdarfewfsadfaretgseagdsag'

      })
    })
    io.on('GET_MSGS', async () => {
      const res = await MyMsgController.getMsgs()
      io.emit('GET_MSGS', res)
    }
    )
  })
}
