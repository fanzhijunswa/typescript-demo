import * as types from './mutations-types'
import HomeState from './type'
import {MutationTree} from 'vuex'

const mutations:MutationTree<HomeState> = {
  [types.EDIT_HOME_NAME] (state:HomeState,payload:string):void {
    state.homeName = payload
  }
}

export default mutations
