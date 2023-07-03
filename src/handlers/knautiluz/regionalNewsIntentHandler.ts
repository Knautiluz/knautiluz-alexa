import type { RequestHandler, HandlerInput } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'
import { v4 as uuidv4 } from 'uuid'

const regionalNewsIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request
        return request.type === 'IntentRequest'
            && request.intent.name === 'RegionalNewsIntent'
    },
    handle(handlerInput: HandlerInput): Response {
        return handlerInput.responseBuilder
            .speak('Iniciando resumo de notícias do dia para Campinas e Região!')
            .addAudioPlayerPlayDirective('REPLACE_ALL', 'https://storage.googleapis.com/knautiluz-storage/daily-articles-summary.mp3', uuidv4(), 0, undefined, { title: 'Resumo de noticias' })
            .getResponse()
    },
}

export default regionalNewsIntentHandler