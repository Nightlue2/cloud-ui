<demo>
按钮类型#按钮有五种类型：主按钮，默认按钮，虚线按钮、文本按钮和链接按钮，可以通过标签上的 <span class="cloud-font-strong">theme</span> 属性来控制。圆角的按钮则可以通过标签上的 <span class="cloud-font-strong">shape</span> 属性来设置。
</demo>
<template>
<div class="cloud-button-demo">
  <Button theme="primary">主按钮</Button>
  <Button>默认按钮</Button>
  <Button theme="dashed">虚线按钮</Button>
  <Button theme="text">文本按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button shape="round">圆角按钮</Button>
</div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>
<style lang="scss">

</style>
