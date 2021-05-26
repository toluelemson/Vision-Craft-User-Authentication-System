import { getRepository } from 'typeorm'
import { generateHash, verifyHash } from '@src/functions/encryption.utils'
import sterilizeUser from '@src/functions/sterilizeUsers.utils'
import User from './user.entity'
import { IUserRegister } from './user.interface'

const getUsers = async () => {
  const users = await Object.assign(getRepository(User)).find()
  return users
}

const getUserByEmail = async (email: string) => {
  return (
    (await getRepository(User).findOne({ email })) ??
    Promise.reject(new Error(`User with email: ${email} does not exist`))
  )
}

const getUserProfileByID = async (id: string) => {
  return (await getRepository(User).findOne({ uuid: id })) || Promise.reject(new Error(`User not Found`))
}

const createUser = async ({ firstName, lastName, email, password }: IUserRegister) => {
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
    throw new Error(e)
  }
}

const loginUser = async (email: string, password: string) => {
  const user = await getUserByEmail(email)
  const result = await verifyHash(password, user.password)
  if (result) return user
  throw Error('error')
}

export default {
  getUsers,
  getUserByEmail,
  getUserProfileByID,
  createUser,
  loginUser,
}
