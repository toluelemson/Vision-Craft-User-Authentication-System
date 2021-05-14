import { getRepository } from 'typeorm'
import { generateHash, verifyHash } from '@src/functions/encryption.utils'
import sterilizeUser from '@src/functions/sterilizeUsers.utils'
import User from './user.entity'
import { userData } from './user.interface'

const getUsers = async () => {
  const users = await Object.assign(getRepository(User)).find()
  return users
}

const getUserByEmail = async (email: string) => {
  try {
    return (
      (await getRepository(User).findOne({ email })) ??
      Promise.reject(new Error(`User with email: ${email} does not exist`))
    )
  } catch (e) {
    return e
  }
}

const createUser = async ({ firstName, lastName, email, password }: userData) => {
  const newUser = new User()
  newUser.firstName = firstName
  newUser.lastName = lastName
  newUser.email = email
  newUser.password = await generateHash(password, 10)
  try {
    const user = await getRepository(User).save(newUser)
    return sterilizeUser(user)
  } catch (e) {
    if (e.code === 'ER_DUP_ENTRY') throw new Error(`EMAIL ALREADY EXISTS`)
    if (e.code === 'ER_NO_DEFAULT_FOR_FIELD') throw new Error('CHECK ALL FIELDS')
    return e
  }
}

const loginUser = async (email: string, password: string) => {
  const user = await getUserByEmail(email)
  try {
    await verifyHash(password, user.password)
    return user
  } catch (e) {
    throw new Error(e)
  }
}

export default {
  getUsers,
  getUserByEmail,
  createUser,
  loginUser,
}
