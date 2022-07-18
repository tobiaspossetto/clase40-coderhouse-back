const db = []
let instance:any = null
export default class MsgLocalDaos {
  static getInstance () {
    if (instance === null) {
      instance = new MsgLocalDaos()
    }

    return instance
  }
}
