<template>
<div>
  <Button theme="primary">主按钮</Button>
  <Button>默认按钮</Button>
  <Button theme="dashed">虚线按钮</Button>
  <Button theme="text">文本按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button shape="round">圆角按钮</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>
