import request from '@/utils/request'
import type { LoginParams, LoginRes, UserInfo } from './auth.type'

/**
 * 登录
 * @param data
 * @returns 
 */
export function fetchLogin(data: LoginParams) {
  return request.post<LoginRes>('/login', {
    data
  })
}

/**
 * 登录
 * @param data
 * @returns 
 */
export function fetchUserInfo(token: string) {
  return request.get<UserInfo>('/getUserInfo', {
    params: { token }
  })
}