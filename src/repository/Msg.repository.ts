import { persistence } from '../app'
import MsgFactory from '../factory/MsgFactory'

export default class MsgRepository {
  daos: any
  constructor () {
    this.daos = MsgFactory.create(persistence)
  }

  async createMsg (data: any) {
    try {
      const res = await this.daos.createMsg(data)
      return res
    } catch (error) {
      console.log(error)
      return {
        error: true,
        data: 'error al contactar con daos'
      }
    }
  }

  async getMsgs () {
    try {
      const res = await this.daos.getMsgs()
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
