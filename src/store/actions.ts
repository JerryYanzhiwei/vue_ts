import state from './state'
import { RootStateTypes } from './types'
import { ActionTree } from 'vuex'
import axios from 'axios'

const actions: ActionTree<RootStateTypes, any> = {
  async SET_AUTHOR_ASYNC ({ commit, state: RootStateTypes }, data: any) {
    let { data: res } = await axios.get('article/get_artical', data)
    return res
  }
}

export default actions
