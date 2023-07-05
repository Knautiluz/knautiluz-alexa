import type { RequestHandler, HandlerInput } from 'ask-sdk-core'
import type { Response } from 'ask-sdk-model'
import type { PlaybackSettings } from '../../types/types'

const resumeIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.ResumeIntent'
    },
    async handle(handlerInput: HandlerInput): Promise<Response> {
        const attrs: PlaybackSettings = await handlerInput.attributesManager.getPersistentAttributes() as PlaybackSettings
        const offset = handlerInput.requestEnvelope.context.AudioPlayer?.offsetInMilliseconds || 0
        return handlerInput.responseBuilder
            .speak('Retomando de onde você parou...')
            .addAudioPlayerPlayDirective('REPLACE_ALL', attrs.audioUrl, attrs.audioToken, offset, undefined)
            .withShouldEndSession(false)
            .getResponse()
    },
}

export default resumeIntentHandler