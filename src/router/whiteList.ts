const whiteList = [
  '/login'
]

export default whiteList

export function isWhite(path: string) {
  return whiteList.includes(path)
}