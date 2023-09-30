// import { PrismaClient } from '@prisma/client';

// const db = new PrismaClient({
//   log: ['query'],
// })
export default defineEventHandler(async (event) => {
  return {
    'status': 404,
  }
  // const body = await readBody(event)
  // var username = body.username
  // var password = body.password
  // var email = body.email
  // console.log(username)
  // return {
  //   status: 200,
  // }
})