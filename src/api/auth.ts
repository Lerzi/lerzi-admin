import request from '@/utils/request'
import type { LoginParams, LoginRes } from './auth.type'


export function login(data: LoginParams) {
  return request.post<LoginRes>('/login', {
    data
  })
}