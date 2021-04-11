<demo>
基本用法#点击 <span class="cloud-font-strong">TimePicker</span> ，在菜单中选择或者直接输入对应格式的时间。
</demo>
<template>
<div>
  <TimePicker/>
</div>
</template>

<script lang="ts">
import TimePicker from "../../lib/TimePicker.vue";
export default {
  components: {
    TimePicker
  },
  setup(){
      const onchange = function(time:string){
          console.log(time);
      }
      return {
          onchange
      }
  }
}
</script>
