import express from 'express'
import controller from './user.controller'

const router = express.Router()

router.get('/', controller.getUsers)
router.post('/register', controller.register)
router.post('/login', controller.login)

export default router
