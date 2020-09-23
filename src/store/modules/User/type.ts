export default interface UserState {
  userInfo: {
    name:string,
    sex:string
  },
  token: string,
  refresh_token?: string
}