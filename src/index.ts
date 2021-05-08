import app from '@src/api/server'
import { config } from '@src/config/config'

// Start the application by listening to specific port
const port = Number(process.env.PORT || config.PORT || 8080)
app.listen(port, () => {
  console.info(`App started on port: ${port}`)
})
