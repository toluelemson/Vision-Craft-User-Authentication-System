import express from 'express'
import controller from './user.controller'
import { loginValidation, registerationValidation } from '../../middleware/userValidator.middleware'

const router = express.Router()

router.get('/', controller.getUsers)
router.post('/register', registerationValidation, controller.register)
router.post('/login', loginValidation, controller.login)
router.route('/profile/:id').get(protect, controller.getUserProfileByID)

export default router
