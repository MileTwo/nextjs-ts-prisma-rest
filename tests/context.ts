import { PrismaClient } from '@prisma/client'
import { mockDeep } from 'jest-mock-extended'
import { DeepMockProxy } from 'jest-mock-extended/lib/cjs/Mock'

export type Context = {
  prisma: PrismaClient
}

export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>
}

export const createMockContext = (): MockContext => {
  return {
    prisma: mockDeep<PrismaClient>() as any,
  }
}