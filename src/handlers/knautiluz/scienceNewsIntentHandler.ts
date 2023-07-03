import type { RequestHandler, HandlerInput } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'
import { v4 as uuidv4 } from 'uuid'

const scienceNewsIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request
        return request.type === 'IntentRequest'
            && request.intent.name === 'ScienceNewsIntent'
    },
    handle(handlerInput: HandlerInput): Response {
        return handlerInput.responseBuilder
            .speak('Iniciando resumo de notícias do dia sobre ciência!')
            .addAudioPlayerPlayDirective('REPLACE_ALL', 'https://storage.googleapis.com/knautiluz-storage/daily-science-summary.mp3', uuidv4(), 0, undefined, { title: 'Resumo de noticias sobre ciência' })
            .getResponse()
    },
}

export default scienceNewsIntentHandler