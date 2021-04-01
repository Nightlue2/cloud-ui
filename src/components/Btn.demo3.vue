<template>
<div>
    <Button theme="primary" danger>主按钮</Button>
    <Button :danger="true">默认按钮</Button>
    <Button theme="dashed" danger>虚线按钮</Button>
    <Button theme="text" danger>文本按钮</Button>
    <Button theme="link" danger>链接按钮</Button>
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
