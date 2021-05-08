import express, { Express } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { config } from '@src/config/config'
import routes from '@src/api/routes'

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: express.Request, res: express.Response) => {
  return res.status(500).json({
    errorName: err.name,
    message: err.message,
    stack: err.stack || 'no stack defined',
  })
})

export default app
