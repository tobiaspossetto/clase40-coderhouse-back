import MsgServices from '../services/Msg.services'
const service = new MsgServices()
export default class MsgController {
  async createMsg (data: any) {
    const res = await service.createMsg(data)
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

  async getMsgs () {
    const res = await service.getMsgs()
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
}
