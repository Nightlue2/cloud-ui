<demo>
按钮尺寸#按钮有大、中、小三种尺寸。可以通过标签上的size属性来设置按钮的不同尺寸。
</demo>
<template>
<div>
    <Button :size="btnsize" @click="changeSize('big')">Big</Button>
    <Button :size="btnsize" @click="changeSize('default')">Default</Button>
    <Button :size="btnsize" @click="changeSize('small')">Small</Button>

  <div class="btnDemoContainer">
    <Button :size="btnsize" theme="primary">主按钮</Button>
    <Button :size="btnsize">默认按钮</Button>
    <Button :size="btnsize" theme="dashed">虚线按钮</Button>
    <Button :size="btnsize" theme="link">链接按钮</Button>
  </div>
  
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import {ref} from 'vue';
export default {
  components: {
    Button
  },
  setup(){
    let btnsize = ref('default');
    function changeSize(newsize:string){
      btnsize.value = newsize;
    }
    return {btnsize,changeSize}
  }
}
</script>
