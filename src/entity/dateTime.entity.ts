import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

class DateTimeEntity {
  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}

export default DateTimeEntity
