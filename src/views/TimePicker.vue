<template>
<div id="demosPage">
  <section>
    <h1>TimePicker 时间选择器</h1>
    <p>用来选择时间。</p>
  </section>
  <section>
    <h2>代码示例</h2>
  </section>
  <section>
    <Demo :component="TimeDemo1" />
    <Demo :component="TimeDemo2" />
    <Demo :component="TimeDemo3" />
  </section>
</div>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue'
import TimeDemo1 from '../components/TimePicker/Time.demo1.vue'
import TimeDemo2 from '../components/TimePicker/Time.demo2.vue'
import TimeDemo3 from '../components/TimePicker/Time.demo3.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      TimeDemo1,
      TimeDemo2,
      TimeDemo3
    }
  }
}
</script>
<style lang="scss">
@import "../example.scss";
</style>