<template>
  <div class="contain">
    <p>msg: {{msg}}</p>
    <p>props: {{propMessage}}</p>
    <p>computed: {{computedMsg}}</p>
    <p>getters: {{author}}, {{username}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'
import { Getter, Mutation, Action } from 'vuex-class'
@Component
export default class Calc extends Vue {
  msg: string = '这是子组件'
  count = {
    value: 1
  }
  // Getter
  @Getter author: string
  @Getter username: string
  // Mutation
  @Mutation SET_AUTHOR: any
  // Action
  @Action SET_AUTHOR_ASYNC: any
  // props
  @Prop(Array) propMessage!: Array<string>

  // watch
  @Watch('propMessage')
  onPropMessage (val: Array<string>, oldval: Array<string>) {
    console.log(val, oldval)
  }

  // emit
  @Emit('onChange')
  componentChange (val: any) {
    console.log(111)
    this.count.value = 2
  }
  // computed
  get computedMsg () {
    let str: string = ''
    this.propMessage.map((item) => {
      str += item
    })
    return str
  }

  async mounted () {
    // 子组件传父组件
    this.componentChange(this.count)
    // Vuex mutation
    this.SET_AUTHOR('Jeff')
    // Vuex action
    let res = await this.SET_AUTHOR_ASYNC()
    console.log('res:', res)
  }
}
</script>

<style lang="scss">

</style>
