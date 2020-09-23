import {ActionTree} from 'vuex'
import types from './mutations-types'
import UserState from './type'
import RootState from '../../type'

const actions: ActionTree<UserState,RootState> = {
  syncEditUserInfo({commit},value:string):any {
    return new Promise((resolve:any,reject:any) => {
      console.log(12)
      try{
        window.setTimeout(() => {
          commit(types.EDIT_USER_INFO,value)
          resolve()
        },2000)
      }catch(e){
        reject(e)
      }
    })
  }
}

export default actions