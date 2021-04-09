<demo>
四种样式#设置 <span class="cloud-font-strong">theme</span> 属性来控制警告提示的主题，包括成功、普通信息、警告以及错误提示。
</demo>
<template>
    <Alert theme="success">成功提示</Alert>
    <Alert theme="info">普通提示</Alert>
    <Alert theme="warning">警告提示</Alert>
    <Alert theme="error">错误提示</Alert>
</template>
<script lang="ts">
import Alert from '../../lib/Alert.vue';
export default {
    components:{
        Alert
    }
}
</script>
