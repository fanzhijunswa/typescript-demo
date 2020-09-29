import UserState from './modules/User/type'
import HomeState from './modules/Home/type'

export default interface RootState {
  user: UserState
  home: HomeState
}
