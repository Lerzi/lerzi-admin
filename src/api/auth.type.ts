export interface LoginParams {
  username: string,
  password: string
}

export interface LoginRes {
  token: string
}


export interface UserInfo {
  id?: number;
  userName?: string;
  roles: string[];
}
