import { dockStart } from '@nlpjs/basic'

export const getAnswer = async (text: string): Promise<string> => {
    // const confJsFileDir = __dirname.split('/src')[0] + 'conf.js'
    const confJsFileDir = __dirname + '/conf.json'
    const dock = await dockStart()
    const nlp = dock.get('nlp')

    const response = await nlp.process('ru', text)
    return response.answer
}

export const startTraining = async (): Promise<void> => {
    const dock = await dockStart()
    const nlp = dock.get('nlp')
    await nlp.train()
}
