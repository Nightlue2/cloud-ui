<demo>
设置大小#可以通过将size指定为small来使用更小的开关。
</demo>
<template>
    <Switch v-model:value="normalchecked"/>
    <div style="margin-top:15px;">
        <Switch v-model:value="smallchecked" size="small"/>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components: {
    Switch,
  },
  setup(){
      const normalchecked = ref(true)
      const smallchecked = ref(true)
      return {normalchecked,smallchecked}
  }
}
</script>
