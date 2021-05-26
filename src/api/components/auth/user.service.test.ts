/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as typeorm from 'typeorm'
import mockRepository from '@src//tests/unit/dbMock'
import UserService from './user.service'
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

  test('getUserByEmail with non-existing user', async () => {
    // @ts-ignore
    typeorm.getRepository = jest.fn().mockReturnValue({
      findOne: jest.fn().mockImplementation(() => {
        throw new Error()
      }),
    })
    const actual = UserService.getUserByEmail('test@test.com')
    await expect(actual).rejects.toThrow()
    // @ts-ignore
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(1)
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      email: 'test@test.com',
    })
  })

  test('getUserByProfileID with existing user', async () => {
    mockRepository({ firstName: 'Test', lastName: 'User', email: 'test@test.com' })
    const actual = await UserService.getUserProfileByID('123')
    expect(actual.email).toBe('test@test.com')
    // @ts-ignore
    expect(actual.password).toBe(undefined)
    expect(actual.firstName).toBe('Test')
    expect(actual.lastName).toBe('User')
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(1)
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      uuid: '123',
    })
  })

  test('getUserByProfileID with non-existing user', async () => {
    // @ts-ignore
    typeorm.getRepository = jest.fn().mockReturnValue({
      findOne: jest.fn().mockImplementation(() => {
        throw new Error()
      }),
    })
    // @ts-ignore
    const actual = UserService.getUserProfileByID('123')
    await expect(actual).rejects.toThrow()
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(1)
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      uuid: '123',
    })
  })

  test('createUser', async () => {
    const user = {
      firstName: 'User',
      lastName: 'Test',
      email: 'test@test.com',
      password: '123',
    }
    mockRepository(user)
    const actual = await UserService.createUser({
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
    })

    expect(actual.email).toBe('test@test.com')
    // @ts-ignore
    expect(actual.password).toBe(undefined)
    expect(actual.firstName).toBe(user.firstName)
    expect(actual.lastName).toBe(user.lastName)
    expect(actual.email).toBe(user.email)
    expect(typeorm.getRepository(User).save).toHaveBeenCalledTimes(1)
    expect(typeorm.getRepository(User).save).toHaveBeenCalledWith(
      expect.objectContaining({
        email: user.email,
        password: expect.any(String),
        firstName: user.firstName,
        lastName: user.lastName,
      })
    )
  })

  test('emailUser with non-existing user', async () => {
    const user = {
      firstName: 'User',
      lastName: 'Test',
      email: 'test@test.com',
      password: '123',
    }
    // @ts-ignore
    typeorm.getRepository = jest.fn().mockReturnValue({
      findOne: jest.fn().mockImplementation(() => {
        throw new Error('Password is Mismatched')
      }),
      save: jest.fn().mockReturnValue(null),
    })
    const actual = UserService.loginUser(user.email, user.password)
    await expect(actual).rejects.toThrow('Password is Mismatched')
    // @ts-ignore
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(1)
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      email: user.email,
    })
    expect(typeorm.getRepository(User).save).toHaveBeenCalledTimes(0)
  })

  test('emailUser with existing user wrong password', async () => {
    const user = {
      firstName: 'User',
      lastName: 'Test',
      email: 'test@test.com',
      password: '123',
    }
    // @ts-ignore
    mockRepository(user)
    const actual = UserService.loginUser(user.email, user.password)
    await expect(actual).rejects.toThrow('Password is Mismatched')
    // @ts-ignore
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(1)
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      email: user.email,
    })
    expect(typeorm.getRepository(User).save).toHaveBeenCalledTimes(0)
  })
})
