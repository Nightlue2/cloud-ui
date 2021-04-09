<template>
<div id="demosPage">
  <h1>Switch 开关</h1>
  <Demo :component="SwitchDemo1" />
  <Demo :component="SwitchDemo2" />
  <Demo :component="SwitchDemo3" />
  <Demo :component="SwitchDemo4" />
</div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import SwitchDemo1 from "../components/Switch/Switch.demo1.vue";
import SwitchDemo2 from "../components/Switch/Switch.demo2.vue";
import SwitchDemo3 from "../components/Switch/Switch.demo3.vue";
import SwitchDemo4 from "../components/Switch/Switch.demo4.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      SwitchDemo1,
      SwitchDemo2,
      SwitchDemo3,
      SwitchDemo4
    };
  },
};
</script>
<style lang="scss">
@import '../example.scss';
</style>