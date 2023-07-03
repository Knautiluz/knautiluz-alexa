import type { HandlerInput, ErrorHandler } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'

const errorHandler: ErrorHandler = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    canHandle(_handlerInput: HandlerInput, _error: Error): boolean {
        return true
    },
    handle(handlerInput: HandlerInput, error: Error): Response {
        console.error(error)
        return handlerInput.responseBuilder
            .speak('Opa, parece que não consegui fazer isso!')
            .getResponse()
    }
}

export default errorHandler