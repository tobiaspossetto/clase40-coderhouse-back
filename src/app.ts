import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

import minimist from 'minimist'
import cookieParser from 'cookie-parser'
import { getConnectionMongo } from './db/mongoDbConnection'

export const args = minimist(process.argv.slice(2))

export const app = express()
export const persistence = args._[0]

console.log(args._[0])
dotenv.config()

app.use(morgan('dev'))
app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser())
getConnectionMongo()
app.use('/api/', require('./routes/routes'))
app.set('views', './src/views')
app.set('view engine', 'pug')

export default app
