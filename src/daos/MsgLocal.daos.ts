const db: any[] = []
let instance:any = null
export default class MsgLocalDaos {
  static getInstance () {
    if (instance === null) {
      instance = new MsgLocalDaos()
    }

    return instance
  }

  createMsg (data: any) {
    try {
      db.push(data)
      return {
        error: false,
        data
      }
    } catch (error) {
      console.error(error)
      return {
        error: true,
        data: 'error de la base de datos'
      }
    }
  }

  getMsgs () {
    try {
      return {
        error: false,
        data: db
      }
    } catch (error) {
      console.error(error)
      return {
        error: true,
        data: 'error de la base de datos'
      }
    }
  }
}
