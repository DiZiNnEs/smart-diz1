import express from 'express'
import bodyParser from 'body-parser'


import { router } from './api-routes/routes'
import { telegramBot } from './bot/telegram/telegramBot'

const PORT = 3000
const app = express()

app.use(bodyParser.json())

app.use(router)

app.listen(PORT, () => {
    console.log('Started')
})

telegramBot.launch()

