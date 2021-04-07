<template>
    <div id="demosPage">
        <h1>Dialog 对话框</h1>
        <Demo :component="DialogDemo1" />
        <Demo :component="DialogDemo2" />
        <Demo :component="DialogDemo3" />
    </div>

</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import DialogDemo1 from '../components/Dialog.demo1.vue';
import DialogDemo2 from '../components/Dialog.demo2.vue';
import DialogDemo3 from '../components/Dialog.demo3.vue';
export default {
  components: {
    Demo
  },
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
      DialogDemo3
    }
  }
}
</script>
<style lang="scss">
@import '../example.scss';
</style>