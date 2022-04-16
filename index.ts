// const { dockStart } = require('@nlpjs/basic')
import { dockStart } from '@nlpjs/basic'
import express from 'express'

(async () => {
    const dock = await dockStart({ use: ['Basic'] })
    const nlp = dock.get('nlp')
    await nlp.addCorpus('./corpus-en.json')
    await nlp.train()
    const response = await nlp.process('en', 'Who are you')
    console.log(response.answer)
})()

const app = express()
const PORT = 3000

app.get('/', (req: express.Request, res: express.Response) => {
    return res.send('Hello')
})

app.listen(PORT, () => {
    console.log('Started')
})
