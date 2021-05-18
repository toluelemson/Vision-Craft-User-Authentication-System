/* eslint-disable @typescript-eslint/no-explicit-any */
import { Factory, Seeder } from 'typeorm-seeding'
import User from '../../api/components/auth/user.entity'

export default class CreateUsers implements Seeder {
  // eslint-disable-next-line class-methods-use-this
  public async run(factory: Factory): Promise<any> {
    await factory(User)().createMany(5)
  }
}
