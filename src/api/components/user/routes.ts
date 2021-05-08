import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  return {
    message: res.status(200).json({ message: 'It works' }),
  }
})

export default router
