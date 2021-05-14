import express, { Express } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import config from '@src/config/config'
import routes from '@src/api/components/auth/user.routes'
import {
  notFoundErrorHandler,
  internalErrorHandler,
  joiErrorHandler,
} from '@src/api/middleware/errorHandler.middleware'

const app: Express = express()

/** **********************************************************************************
 *                              Basic Express Middlewares
 ********************************************************************************** */

app.set('json spaces', 4)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle logs in console during development
if (process.env.NODE_ENV === 'development' || config.NODE_ENV === 'development') {
  app.use(morgan('dev'))
  app.use(cors())
}

// Handle security and origin in production
if (process.env.NODE_ENV === 'production' || config.NODE_ENV === 'production') {
  app.use(helmet())
}

/** **********************************************************************************
 *                               Register all routes
 ********************************************************************************** */

app.use('/', routes)

/** **********************************************************************************
 *                               Express Error Handling
 ********************************************************************************** */

// Joi Error Handler
app.use(joiErrorHandler)

app.use(notFoundErrorHandler)

app.use(internalErrorHandler)

export default app
