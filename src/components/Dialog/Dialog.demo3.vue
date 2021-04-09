<demo>
自定义宽度#设置 <span class="cloud-font-strong">width</span> 来改变对话框的宽度。
</demo>
<template>
  <div>
    <Button theme="primary" @click="toggle">打开一个宽度为720px的对话框</Button>
    <Dialog v-model:visible="x" :confirm="f1" :cancel="f2" :width="dialogWidth">
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
