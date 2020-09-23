import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import {Module} from 'vuex'
import userState from './type'
import RootState from '../../type'

const user:Module<userState,RootState> =  {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default user