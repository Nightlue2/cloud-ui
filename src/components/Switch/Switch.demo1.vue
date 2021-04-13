<demo>
基本用法#将一个布尔值传给该组件，然后通过点击开关变更该布尔值。
</demo>
<template>
    <Switch v-model:value="checked" @click="fn"/>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const checked = ref(true)
    return {
      checked
    }
  },
}
</script>
