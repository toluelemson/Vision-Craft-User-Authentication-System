import Faker from 'faker'
import { define } from 'typeorm-seeding'
import User from '../../api/components/auth/user.entity'

define(User, (faker: typeof Faker) => {
  const email = faker.internet.email()
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const password = faker.internet.password()

  const user = new User()
  user.email = email
  user.firstName = firstName
  user.lastName = lastName
  user.password = password

  return user
})
