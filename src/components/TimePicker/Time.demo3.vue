<demo>
onchange 函数#向组件传入 <span class="cloud-font-strong">onchange</span> 函数来获取得到的时间。
</demo>
<template>
<div>
    <TimePicker :onchange="fn"/>
</div>
</template>

<script lang="ts">
import TimePicker from "../../lib/TimePicker.vue";
export default {
  components: {
    TimePicker
  },
  setup(){
    const fn = (time)=>{
      console.log(time.value)
    }
    return {fn}
  }
}
</script>
