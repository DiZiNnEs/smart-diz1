import { dockStart } from '@nlpjs/basic'

export const getAnswer = async (text: string): Promise<string> => {
    const dock = await dockStart({ use: ['Basic'] })
    const nlp = dock.get('nlp')
    const response = await nlp.process('en', text)
    return response.answer
}
