import express from 'express'
import bodyParser from 'body-parser'
import * as tg from 'telegraf'

import { router } from './api-routes/routes'

const PORT = 3000
const app = express()

app.use(bodyParser.json())

app.use(router)

app.listen(PORT, () => {
    console.log('Started')
})

const bot = new tg.Telegraf('5316086155:AAEvkRpuLaLF-WDYRtmAdhyXOrMssJO_P8Y')
bot.start((ctx: { reply: (arg0: string) => any }) => ctx.reply('Welcome'))
bot.help((ctx: { reply: (arg0: string) => any }) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx: { reply: (arg0: string) => any }) => ctx.reply('👍'))
bot.hears('hi', (ctx: { reply: (arg0: string) => any }) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
