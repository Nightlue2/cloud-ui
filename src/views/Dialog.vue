<template>
    <div id="demosPage">
      <section>
        <h1>Dialog 对话框</h1>  
      </section>
      <section>
        <h2>代码示例</h2>
      </section>
      <section>
        <Demo :component="DialogDemo1" />
        <Demo :component="DialogDemo2" />
        <Demo :component="DialogDemo3" />
        <Demo :component="DialogDemo4" />
      </section>
        
    </div>

</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import DialogDemo1 from '../components/Dialog/Dialog.demo1.vue';
import DialogDemo2 from '../components/Dialog/Dialog.demo2.vue';
import DialogDemo3 from '../components/Dialog/Dialog.demo3.vue';
import DialogDemo4 from '../components/Dialog/Dialog.demo4.vue';
export default {
  components: {
    Demo
  },
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
      DialogDemo3,
      DialogDemo4
    }
  }
}
</script>
<style lang="scss">
@import '../example.scss';
</style>