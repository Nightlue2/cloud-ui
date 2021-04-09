<demo>
设置点击遮罩层关闭#通过添加 <span class="cloud-font-strong">closeOnClickOverlay</span> 属性来设置点击遮罩层是否关闭对话框，默认值为true，此时点击则关闭。
</demo>
<template>
  <div>
    <Button @click="toggle">对话框</Button>
    <Dialog v-model:visible="x" :confirm="f1" :cancel="f2" :closeOnClickOverlay="false">
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
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
    Dialog
  },
  setup() {
    window.console.log('你好');
    const x = ref(false);
    const dialogWidth = '720px';
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return {
      x,
      dialogWidth,
      toggle,
      f1,
      f2,
    };
  },
};
</script>
