import express from 'express'
import Users from '@src/api/components/auth/user.routes'

const router = express.Router()

router.use('/', Users)

export default router
