import type { RequestHandler, HandlerInput } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'
import type { PlaybackSettings } from '../../types/types'
import { v4 as uuidv4 } from 'uuid'

const scienceNewsIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request
        return request.type === 'IntentRequest'
            && request.intent.name === 'ScienceNewsIntent'
    },
    async handle(handlerInput: HandlerInput): Promise<Response> {
        const { audioUrl, audioToken } = await handlePlayerAttrs(handlerInput)
        return handlerInput.responseBuilder
            .speak('Iniciando resumo de notícias do dia sobre ciência!')
            .addAudioPlayerPlayDirective('REPLACE_ALL', audioUrl , audioToken, 0)
            .withShouldEndSession(false)
            .getResponse()
    },
}

const handlePlayerAttrs = async (handler: HandlerInput): Promise<PlaybackSettings> => {
    const url = 'https://storage.googleapis.com/knautiluz-storage/daily-science-summary.mp3'
    const token = uuidv4()
    const attrs = await handler.attributesManager.getPersistentAttributes()
    attrs.audioUrl = url
    attrs.audioToken = token
    handler.attributesManager.setPersistentAttributes(attrs)
    handler.attributesManager.savePersistentAttributes()
    return { audioUrl: url, audioToken: token }
}

export default scienceNewsIntentHandler