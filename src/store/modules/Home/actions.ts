import HomeState from './type'
import {ActionTree} from 'vuex'
import RootState from '../../type'
import * as types from './mutations-types'

const actions:ActionTree<HomeState,RootState> = {
  syncEditHomeName({commit},payload:string):any {
    return new Promise((resolve:any) => {
      window.setTimeout(() => {
        commit(types.EDIT_HOME_NAME,payload)
        resolve()
      },2000)
    })
  }
}

export default actions