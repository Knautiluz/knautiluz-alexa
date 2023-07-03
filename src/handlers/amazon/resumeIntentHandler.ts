import type { RequestHandler, HandlerInput } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'

const resumeIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.ResumeIntent'
    },
    handle(handlerInput: HandlerInput): Response {
        return handlerInput.responseBuilder
            .speak('Continuando...')
            .addAudioPlayerClearQueueDirective('CLEAR_ALL')
            .getResponse()
    },
}

export default resumeIntentHandler