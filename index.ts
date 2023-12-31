import { SkillBuilders } from 'ask-sdk-core'
import { config } from 'dotenv'
import launchRequestHandler from './src/handlers/knautiluz/launchRequestHandler'
import regionNewsIntentHandler from './src/handlers/knautiluz/regionalNewsIntentHandler'
import scienceNewsIntentHandler from './src/handlers/knautiluz/scienceNewsIntentHandler'
import pauseIntentHandler from './src/handlers/amazon/pauseIntentHandler'
import resumeIntentHandler from './src/handlers/amazon/resumeIntentHandler'
import helpIntentHandler from './src/handlers/amazon/helpIntentHandler'
import cancelIntentHandler from './src/handlers/amazon/cancelIntentHandler'
import sessionEndedRequestHandler from './src/handlers/amazon/sessionEndedRequestHandler'
import errorHandler from './src/handlers/amazon/errorHandler'
import requestInterceptor from './src/debug/requestInterceptor'
import responseInterceptor from './src/debug/responseInterceptor'

import type { PersistenceAdapter } from 'ask-sdk-core'
import { DynamoDbPersistenceAdapter } from 'ask-sdk-dynamodb-persistence-adapter'

config()

const adapter: PersistenceAdapter = new DynamoDbPersistenceAdapter({ tableName : '3e01946a-2a6b-4663-af17-609bd38c47f9' })

exports.handler = SkillBuilders.custom()
  .withPersistenceAdapter(adapter)
  .addRequestHandlers(
    launchRequestHandler,
    regionNewsIntentHandler,
    scienceNewsIntentHandler,
    pauseIntentHandler,
    resumeIntentHandler,
    helpIntentHandler,
    cancelIntentHandler,
    sessionEndedRequestHandler,
  )
  .addErrorHandlers(errorHandler)
  .addRequestInterceptors(requestInterceptor)
  .addResponseInterceptors(responseInterceptor)
  .lambda()