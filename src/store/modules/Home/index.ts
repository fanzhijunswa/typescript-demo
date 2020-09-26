import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import {Module} from 'vuex'
import HomeState from './type'
import RootState from '../../type'

const home:Module<HomeState,RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}

export default home