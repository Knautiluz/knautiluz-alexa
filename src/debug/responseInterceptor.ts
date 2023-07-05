import type { HandlerInput, ResponseInterceptor } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'
import { Logger } from '../logger/logger'

const logger = new Logger()

const responseInterceptor: ResponseInterceptor = {
    process(handlerInput: HandlerInput, response: Response) {
        logger.info('==== RESPONSE ======')
        logger.info(JSON.stringify(response, null, 2))
    },
}

export default responseInterceptor