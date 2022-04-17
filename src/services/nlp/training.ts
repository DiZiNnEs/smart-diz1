import { dockStart } from '@nlpjs/basic'

export const training = async () => {
    const dock = await dockStart({ use: ['Basic'] })
    const nlp = dock.get('nlp')
    await nlp.addCorpus('./corpus-en.json')
    await nlp.train()
}
