<template>
<div id="demosPage">
    <section>
        <h1>Alert 警告提示</h1>
        <p>警告提示，用于向用户展示需要关注的内容。</p>
    </section>
    <section>
        <h2>代码示例</h2>
    </section>
    <section>
        <Demo :component="AlertDemo1"/>   
        <Demo :component="AlertDemo2"/>   
        <Demo :component="AlertDemo3"/>
    </section>
    
</div>
</template>
<script lang="ts">
import Demo from '../components/Demo.vue';
import AlertDemo1 from '../components/Alert/Alert.demo1.vue';
import AlertDemo2 from '../components/Alert/Alert.demo2.vue';
import AlertDemo3 from '../components/Alert/Alert.demo3.vue';
export default {
    components:{
        AlertDemo1,
        AlertDemo2,
        AlertDemo3,
        Demo
    },
    setup(){
        return {
            AlertDemo1,
            AlertDemo2,
            AlertDemo3,
        }
    }
}
</script>
<style lang="scss">

</style>