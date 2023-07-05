import type { RequestHandler, HandlerInput } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'

const pauseIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.PauseIntent'
    },
    handle(handlerInput: HandlerInput): Response {
        return handlerInput.responseBuilder
            .speak('Quando quiser terminar de ouvir diga: Alexa, continue!')
            .addAudioPlayerStopDirective()
            .withShouldEndSession(false)
            .getResponse()
    },
}

export default pauseIntentHandler