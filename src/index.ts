import express from 'express'
import bodyParser from 'body-parser'

import { router } from './api-routes/routes'

const PORT = 3000
const app = express()

app.use(bodyParser.json())

app.use(router)

app.listen(PORT, () => {
    console.log('Started')
})
