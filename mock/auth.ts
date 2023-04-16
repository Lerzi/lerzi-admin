export default [
  {
    url: '/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: {
          token: '123123123123'
        }
      }
    }
  }
]