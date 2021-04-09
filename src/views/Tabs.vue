<template>
<div id="demosPage">
  <h1>Tabs 示例</h1>
  <Demo :component="TabDemo1" />
  <Demo :component="TabDemo2" />
  <Demo :component="TabDemo3" />
</div>

</template>

<script lang="ts">
import Demo from '../components/Demo.vue'
import TabDemo1 from '../components/Tab/Tab.demo1.vue'
import TabDemo2 from '../components/Tab/Tab.demo2.vue'
import TabDemo3 from '../components/Tab/Tab.demo3.vue'

export default {
  components: {
    Demo
  },
  setup() {
    return {
      TabDemo1,
      TabDemo2,
      TabDemo3
    }
  }
}
</script>
<style lang="scss">
@import "../example.scss";
</style>