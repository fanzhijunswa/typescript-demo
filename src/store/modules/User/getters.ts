import {GetterTree} from 'vuex'
import UserState from './type'
import RootState from '../../type'

const getters:GetterTree<UserState,RootState> = {
  userName: (state:UserState):string => state.userInfo.name
}

export default getters