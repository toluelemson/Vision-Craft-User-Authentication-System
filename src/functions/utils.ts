import User from '@src/api/components/auth/user.entity'

const sterilizeUser = (user: User) => {
  const { password, ...userWithOutPassword } = user
  return userWithOutPassword
}

export default sterilizeUser
