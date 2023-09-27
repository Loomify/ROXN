import { PrismaClient } from '@prisma/client';

const db = new PrismaClient({
  log: ['query'],
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  var username = body.username
  var password = body.password
  var email = body.email
  console.log(username)
  return {
    status: 200,
  }
})