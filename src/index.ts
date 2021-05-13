import 'reflect-metadata'
import { createConnection } from 'typeorm'
import app from '@src/api/server'
import config from '@src/config/config'

// Start the application by listening to specific port
const port = Number(process.env.PORT || config.SERVER.PORT || 8080)

createConnection()
  .then(() => {
    app.listen(port, () => {
      console.info(`App started on port: ${port}`)
    })
  })
  .catch((error: Error) => console.log(error))
