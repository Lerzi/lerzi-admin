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
            token: 'success'
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
  }
]