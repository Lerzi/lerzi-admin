import request from '@/utils/request'

interface loginRes {
  token: string
}
export function login(data: any) {
  return request.post<loginRes>('/login', {
    data
  })
}