import { Msg } from '../db/msg'

let instance:any = null

export default class MsgMongoDaos {
  static getInstance () {
    if (instance === null) {
      instance = new MsgMongoDaos()
    }

    return instance
  }

  async createMsg (data: any) {
    try {
      const message = new Msg(data)
      const res = await message.save()
      console.log(res)
      return {
        error: false,
        data: res
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        data: 'error de la base de datos'
      }
    }
  }

  async getMsgs () {
    try {
      const res = await Msg.find()
      return {
        error: false,
        data: res
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        data: 'error de la base de datos'
      }
    }
  }
}
