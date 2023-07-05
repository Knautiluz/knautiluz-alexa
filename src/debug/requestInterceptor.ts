import type { HandlerInput, RequestInterceptor } from 'ask-sdk-core'
import { Logger } from '../logger/logger'

const logger = new Logger()

const requestInterceptor: RequestInterceptor = {
    process(handlerInput: HandlerInput) {
        logger.info('==== REQUEST ======')
        logger.info(JSON.stringify(handlerInput.requestEnvelope, null, 2))
    },
}

export default requestInterceptor