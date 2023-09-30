export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    var username = body['username']
    var password = body['password']
    if (username == "admin" && password == "admin") {
        return {
            status: 200,
            headers: {
                'Location': '/events/account/dashboard',
            },
        }
    }
    return {
        status: 200,
        headers: {
            'Location': '/account',
        },
    }
  })