<template>
<div id="demosPage">
  <section>
    <h1>Tabs 标签页</h1>
    <p>点击不同的tab可切换到不同的页。</p>
  </section>
  <section>
    <h2>代码示例</h2>
  </section>
  <section>
    <Demo :component="TabDemo1" />
    <Demo :component="TabDemo2" />
    <Demo :component="TabDemo3" />
  </section>
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