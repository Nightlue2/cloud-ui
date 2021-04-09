<demo>
a#a
</demo>
<template>
    <Demo :component="Alert"/>
</template>
<script lang="ts">
import Demo from '../Demo.vue';
import Alert from '../../lib/Alert.vue'
export default {
    components:{
        Demo,
        Alert
    }
}
</script>
<style lang="scss">

</style>