<template>
<div id="demosPage">
  <h1>Button 按钮</h1>
  <Demo :component="BtnDemo1" />
  <Demo :component="BtnDemo2" />
  <Demo :component="BtnDemo3" />
  <Demo :component="BtnDemo4" />
  <Demo :component="BtnDemo5" />
</div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import BtnDemo1 from "../components/Btn.demo1.vue";
import BtnDemo2 from "../components/Btn.demo2.vue";
import BtnDemo3 from "../components/Btn.demo3.vue";
import BtnDemo4 from "../components/Btn.demo4.vue";
import BtnDemo5 from "../components/Btn.demo5.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      BtnDemo1,
      BtnDemo2,
      BtnDemo3,
      BtnDemo4,
      BtnDemo5
    };
  },
};
</script>
<style lang="scss">
@import '../example.scss';
</style>