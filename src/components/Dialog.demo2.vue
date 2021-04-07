<demo>
快捷打开 Dialog#使用Dialog标签可能会使得生命周期钩子不会重复触发，而使用openDialog函数则能解决这个问题。
</demo>
<template>
<div>
  <Button @click="showDialog">openDialog()</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {
  h
} from 'vue'
import {openDialog} from '../lib/openDialog'
export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        moveDialog:false,
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  },
  
}
</script>
