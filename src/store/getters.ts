import state from './state'
import { RootStateTypes } from './types'
import { GetterTree } from 'vuex'

const getters: GetterTree<RootStateTypes, any> = {
  author: (state: RootStateTypes) => state.author,
  username: (state: RootStateTypes) => state.username
}

export default getters
