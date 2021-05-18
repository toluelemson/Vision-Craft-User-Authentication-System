/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as typeorm from 'typeorm'
import UserService from './user.service'
import mockRepository from '@src//tests/unit/dbMock'
import User from './user.entity'

describe('User service', () => {
  test('getUserByEmail with existing user', async () => {
    mockRepository({ firstName: 'Test', lastName: 'User', email: 'test@test.com' })
    const actual = await UserService.getUserByEmail('test@test.com')
    expect(actual.email).toBe('test@test.com')
    // @ts-ignore
    expect(actual.password).toBe(undefined)
    expect(actual.firstName).toBe('Test')
    expect(actual.lastName).toBe('User')
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(1)
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      email: 'test@test.com',
    })
  })

