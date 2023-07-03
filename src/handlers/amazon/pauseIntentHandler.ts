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
            .speak('Volte quando quiser terminar de ouvir!')
            .addAudioPlayerStopDirective()
            .getResponse()
    },
}

export default pauseIntentHandler