import express from 'express'
import controller from './controller'

const router = express.Router()

router.get('/', controller.validateToken)
router.get('/register', controller.register)
router.get('/login', controller.login)
router.get('/users', controller.getAllUsers)

export default router
