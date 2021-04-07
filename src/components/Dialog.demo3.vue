<demo>
自定义宽度#设置width来改变对话框的宽度
</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2" width="720">
        <template v-slot:title>
          <div>对话框</div>
        </template>
        <template v-slot:content>
            <p>内容部分</p>
            <p>内容部分</p>
            <p>内容部分</p>
        </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>
