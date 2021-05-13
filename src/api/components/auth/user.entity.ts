import { Column, Entity, PrimaryGeneratedColumn, Unique, BeforeInsert } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('user_auth', { orderBy: { id: 'ASC' } })
class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number

  @Column()
  @Unique(['email'])
  email!: string

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column()
  password!: string

  @Column({ type: 'uuid' })
  uuid!: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastLogin!: string

  @BeforeInsert()
  createUuid() {
    this.uuid = uuid()
  }

  toJSON() {
    return { ...this, password: undefined }
  }
}

export default User
