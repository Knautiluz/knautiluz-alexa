import type { HandlerInput, ErrorHandler } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'
import { Logger } from '../../logger/logger'

const logger = new Logger()

const errorHandler: ErrorHandler = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    canHandle(_handlerInput: HandlerInput, _error: Error): boolean {
        return true
    },
    handle(handlerInput: HandlerInput, error: Error): Response {
        logger.error(error.message)
        return handlerInput.responseBuilder
            .speak('Opa, parece que não consegui fazer isso!')
            .getResponse()
    }
}

export default errorHandler