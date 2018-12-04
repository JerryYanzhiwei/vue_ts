import state from './state'
import { RootStateTypes } from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<RootStateTypes> = {
  // 设置用户名
  SET_AUTHOR (state: RootStateTypes, data: string) {
    state.author = data
  },
  SET_USERNAME (state: RootStateTypes, data: string) {
    state.username = data
  }
}

export default mutations
