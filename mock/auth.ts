const TOKEN = 'SuperToken'
export default [
  {
    url: '/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body.data
      if (username === 'lerzi' && password === 'lerzi123') {
        return {
          code: 200,
          msg: 'success',
          data: {
            token: TOKEN
          }
        }
      } else {
        return {
          code: 500,
          msg: '用户名或密码错误',
          data: null
        }
      }
    }
  }, {
    url: '/getUserInfo',
    method: 'get',
    response: ({ query }) => {
      if (query.token === TOKEN) {
        return {
          code: 200,
          msg: 'success',
          data: {
            id: 1,
            userName: 'lerzi',
            roles: ['superAdmin']
          }
        }
      } else {
        return {
          code: 0,
          msg: 'error',
          data: {
          }
        }
      }
    }
  }
]