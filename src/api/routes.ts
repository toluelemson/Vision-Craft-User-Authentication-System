import express from 'express'
import Login from '@src/api/components/user/routes'

const router = express.Router()

router.use('/', Login)

export default router
