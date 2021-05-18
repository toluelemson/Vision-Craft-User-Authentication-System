/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import request, { CallbackHandler } from 'supertest'
import routes from '@src/api/components/auth/user.routes'
import app from '@src/api/server'
import userService from './user.service'

describe('Test User Auth routes', () => {
  beforeEach(() => {})
  it('User register with valid body', (done: CallbackHandler) => {
    userService.createUser = jest.fn().mockReturnValue({ email: 'test@test.com' })
    request(app.use(routes))
      .post('/register')
      .send({
        email: 'test@gmail.com',
        password: '123456',
        firstName: 'test ',
        lastName: 'test',
      })
      .expect(201)
      .expect((res: any) => {
        expect(res.text.replace(/\s+/g, '')).toBe(JSON.stringify({ data: { email: 'test@test.com' }, success: true }))

        expect(userService.createUser).toHaveBeenCalledTimes(1)
      })
      .end(done)
  })

  it('User register with invalid body', async (done: CallbackHandler) => {
    userService.createUser = jest.fn().mockReturnValue({ email: 'test@test.com' })

    request(app.use(routes)).post('/register').expect(400).end(done)
  })

  it('User register with invalid user', async (done: CallbackHandler) => {
    userService.createUser = jest.fn().mockReturnValue({ error: 'www' })
    request(app.use(routes))
      .post('/register')
      .send({
        email: 'testtest.com',
        password: '123456',
        firstName: 'test ',
        lastName: 'test',
      })
      .expect(400)
      .end(done)
  })
})
