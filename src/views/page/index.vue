<template>
  <div class="contain">
    {{msg}}
    <p>{{count}}</p>
    <Calc :propMessage=msg @onChange="showCount($event)"></Calc>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Calc from '@/views/page/component/calc.vue'
@Component({
  components: {
    Calc
  }
})
export default class Index extends Vue {
  msg: Array<string> = ['a', 'b']
  count: number = 0

  showCount (data: any) {
    console.log(22222)
    this.count = data.value
    console.log(data)
  }
  mounted () {
    setTimeout(() => {
      this.msg = ['c', 'd']
    }, 3000)
  }
}
</script>

<style scoped lang="scss">

</style>
