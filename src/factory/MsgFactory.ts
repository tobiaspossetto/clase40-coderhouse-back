import MsgLocalDaos from '../daos/MsgLocal.daos'
import MsgMongoDaos from '../daos/MsgMongo.daos'

export default class MsgFactory {
  static create (type:string) {
    switch (type) {
      case 'local':
        return MsgLocalDaos.getInstance()
      case 'mongo':
        return MsgMongoDaos.getInstance()
      default:
        return MsgMongoDaos.getInstance()
    }
  }
}
