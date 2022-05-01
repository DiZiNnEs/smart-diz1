import Telegraf from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx: { reply: (arg0: string) => any }) => ctx.reply('Welcome'))
bot.help((ctx: { reply: (arg0: string) => any }) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx: { reply: (arg0: string) => any }) => ctx.reply('👍'))
bot.hears('hi', (ctx: { reply: (arg0: string) => any }) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
