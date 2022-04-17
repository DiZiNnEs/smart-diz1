import express from 'express'
import bodyParser from 'body-parser'

import { getAnswer } from './services/nlp/nlp'


const app = express()
app.use(bodyParser.json())
const PORT = 3000

app.get('/api/getAnswer/', async (req: express.Request, res: express.Response) => {
    const question = req.body.question
    const answer = await getAnswer(question)
    return res.status(200).json({ message: answer })
})

app.listen(PORT, () => {
    console.log('Started')
})
