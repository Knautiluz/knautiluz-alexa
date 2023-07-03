import type { RequestHandler, HandlerInput } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'

const g1Ssml = `
<speak>
  Iniciando modo assistente personalizado!
  <audio src="https://storage.googleapis.com/knautiluz-storage/g1.mp3"/>
  O que você deseja agora?
</speak>
`

const launchRequestHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request
        return request.type === 'LaunchRequest'
    },
    handle(handlerInput: HandlerInput): Response {
        return handlerInput.responseBuilder
            .speak(g1Ssml)
            .reprompt('Olá, esse é um aplicativo de assistente personalizado, você poder pedir as notícias da semana, notícias sobre ciências e muito mais!')
            .getResponse()
    },
}

export default launchRequestHandler