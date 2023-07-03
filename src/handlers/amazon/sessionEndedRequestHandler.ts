import type { RequestHandler, HandlerInput } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'

const sessionEndedRequestHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request
        return request.type === 'SessionEndedRequest'
    },
    handle(handlerInput: HandlerInput): Response {
        return handlerInput.responseBuilder
            .speak('Até logo!')
            .getResponse()
    },
}

export default sessionEndedRequestHandler