<demo>
禁用状态#添加disabled属性以使得按钮处于无法点击的禁用状态。
</demo>
<template>
  <div class="btnDemoContainer">
    <Button theme="primary">主按钮</Button>
    <Button theme="primary" disabled>主按钮</Button>
  </div>
  <div class="btnDemoContainer">
    <Button>默认按钮</Button>
    <Button disabled>默认按钮</Button>
  </div>
  <div class="btnDemoContainer">
    <Button theme="dashed">虚线按钮</Button>
    <Button theme="dashed" disabled>虚线按钮</Button>
  </div>
  <div class="btnDemoContainer">
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
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
