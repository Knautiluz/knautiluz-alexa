import type { HandlerInput, ResponseInterceptor } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'

const responseInterceptor: ResponseInterceptor = {
    process(handlerInput: HandlerInput, response: Response) {
        console.log('==== RESPONSE ======')
        console.log(JSON.stringify(response, null, 2))
    },
}

export default responseInterceptor