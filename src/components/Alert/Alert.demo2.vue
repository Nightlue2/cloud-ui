<demo>
描述性文字#通过添加 <span class="cloud-font-strong">descriptions</span> 属性以在提示框中展示说明， <span class="cloud-font-strong">title</span> 属性则可以设置文字说明的标题。
</demo>
<template>
    <Alert theme="success" title="成功提示" descriptions="成功状态下的文字说明...." />
    <Alert theme="info" title="普通提示" descriptions="普通状态下的文字说明...." />
    <Alert theme="warning" title="警告提示" descriptions="警告状态下的文字说明...." />
    <Alert theme="error" title="错误提示" descriptions="错误状态下的文字说明...." />
</template>
<script lang="ts">
import Alert from '../../lib/Alert.vue';
export default {
    components:{
        Alert
    }
}
</script>
