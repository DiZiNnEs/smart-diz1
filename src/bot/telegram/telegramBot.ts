import * as tg from 'telegraf'

export const telegramBot = new tg.Telegraf('5316086155:AAEvkRpuLaLF-WDYRtmAdhyXOrMssJO_P8Y')
telegramBot.start((ctx: { reply: (arg0: string) => any }) => ctx.reply('Добро пожаловать, я бот'))
telegramBot.help((ctx: { reply: (arg0: string) => any }) => ctx.reply('Просто поговори со мной'))
telegramBot.on('text', async (ctx: any) => ctx.reply(ctx.update.message.text))

// Enable graceful stop
process.once('SIGINT', () => telegramBot.stop('SIGINT'))
process.once('SIGTERM', () => telegramBot.stop('SIGTERM'))
