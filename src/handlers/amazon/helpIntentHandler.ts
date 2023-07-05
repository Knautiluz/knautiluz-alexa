import type { RequestHandler, HandlerInput } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'

const helpIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.HelpIntent'
    },
    handle(handlerInput: HandlerInput): Response {
        return handlerInput.responseBuilder
            .speak('Pergunte sobre as notícias do dia, notícias sobre ciência e muito mais!')
            .withShouldEndSession(false)
            .getResponse()
    },
}

export default helpIntentHandler