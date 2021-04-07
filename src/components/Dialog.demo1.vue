<demo>
基本用法#创建一个对话框。
</demo>
<template>
    <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2" >
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
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Dialog,
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
