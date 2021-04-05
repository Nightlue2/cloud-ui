<demo>
加载中#表示开关的操作仍在加载中。
</demo>
<template>
    <Switch v-model:value="normalchecked" loading/>
    <div style="margin-top:15px;">
        <Switch v-model:value="smallchecked" size="small" loading/>
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
