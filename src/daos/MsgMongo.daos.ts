let instance:any = null

export default class MsgMongoDaos {
  static getInstance () {
    if (instance === null) {
      instance = new MsgMongoDaos()
    }

    return instance
  }
}
