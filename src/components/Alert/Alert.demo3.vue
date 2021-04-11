<demo>
支持图标#<span class="cloud-font-strong">showIcon</span> 属性可以为消息提示添加图标。
</demo>
<template>
    <Alert theme="success" showIcon>成功提示</Alert>
    <Alert theme="info" showIcon>普通提示</Alert>
    <Alert theme="warning" showIcon>警告提示</Alert>
    <Alert theme="error" showIcon>错误提示</Alert>
    
    <Alert theme="success" title="成功提示" descriptions="成功状态下的文字说明...." showIcon/>
    <Alert theme="info" title="普通提示" descriptions="普通状态下的文字说明...." showIcon/>
    <Alert theme="warning" title="警告提示" descriptions="警告状态下的文字说明...." showIcon/>
    <Alert theme="error" title="错误提示" descriptions="错误状态下的文字说明...." showIcon/>
</template>
<script lang="ts">
import Alert from '../../lib/Alert.vue';
export default {
    components:{
        Alert
    }
}
</script>
