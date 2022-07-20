import mongoose from 'mongoose'
const msgCollection = 'msgs'

const MsgSchema = new mongoose.Schema({
  author: {
    type: Object,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})
export const Msg = mongoose.model(msgCollection, MsgSchema)
