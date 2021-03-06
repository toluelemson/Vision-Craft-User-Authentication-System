import User from '@src/api/components/auth/user.entity'

const sterilizeUser = (user: User) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...userWithOutPassword } = user
  return userWithOutPassword
}

export default sterilizeUser
