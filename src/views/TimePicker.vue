<template>
<div id="demosPage">
  <section>
    <h1>TimePicker 时间选择器</h1>
  </section>
  <section>
    <h2>代码示例</h2>
  </section>
  <section>
    <Demo :component="TimeDemo1" />
  </section>
</div>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue'
import TimeDemo1 from '../components/TimePicker/Time.demo1.vue'

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      TimeDemo1,
    }
  }
}
</script>
<style lang="scss">
@import "../example.scss";
</style>