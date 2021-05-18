/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import * as typeorm from 'typeorm'

const mockRepository = (returnValue: any) => {
  // @ts-ignore
  typeorm.getRepository = jest.fn().mockReturnValue({
    findOne: jest.fn().mockReturnValue(returnValue),
    save: jest.fn().mockReturnValue(returnValue),
  })

  return typeorm.getRepository
}

export default mockRepository
