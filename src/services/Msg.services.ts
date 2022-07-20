import MsgRepository from '../repository/Msg.repository'
const repository = new MsgRepository()
export default class MsgServices {
  async createMsg (data:any) {
    const res = await repository.createMsg(data)
    return res
  }

  async getMsgs () {
    const res = await repository.getMsgs()
    return res
  }
}
