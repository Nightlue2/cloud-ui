<demo>
三种大小#通过 <span class="cloud-font-strong">size</span> 属性控制输入框的大小。
</demo>
<template>
<div>
  <div class="tp-wrapper">
    <TimePicker size="large"/>
  </div>
  <div class="tp-wrapper">
    <TimePicker />
  </div>
  <div class="tp-wrapper">
    <TimePicker size="small"/>
  </div>
</div>
</template>

<script lang="ts">
import TimePicker from "../../lib/TimePicker.vue";
export default {
  components: {
    TimePicker
  },
}
</script>
<style>
  .tp-wrapper{
    margin-bottom:14px;
  }
</style>
