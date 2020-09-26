import HomeState from './type'
import RootState from '../../type'
import {GetterTree} from 'vuex'

const getters:GetterTree<HomeState,RootState> = {
  firstHomeUserInfo : (state: HomeState) => state.homeList[0]
}

export default getters
