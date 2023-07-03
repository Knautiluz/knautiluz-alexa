import type { HandlerInput, RequestInterceptor } from 'ask-sdk-core'

const requestInterceptor: RequestInterceptor = {
    process(handlerInput: HandlerInput) {
        console.log('==== REQUEST ======')
        console.log(JSON.stringify(handlerInput.requestEnvelope, null, 2))
    },
}

export default requestInterceptor