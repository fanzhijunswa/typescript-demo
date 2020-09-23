import {MutationTree} from 'vuex'
import types from './mutations-types'
import UserState from './type'

const mutations :MutationTree<UserState> = {
  [types.EDIT_USER_INFO](state: UserState, payload: string): void {
    state.userInfo.name = payload
  }
}
export default mutations