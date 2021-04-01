<template>
<div>
    <Button v-for="(item,name) in buttonList" :key="item" :size="btnsize" @click="changeSize(name)" >{{item}}</Button>
  
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
    let btnsize = ref('defa');
    let buttonList = {'big':'Big','default':'Default','small':'Small'}
    function changeSize(newsize:string){
      btnsize.value = newsize;
    }
    return {btnsize,changeSize,buttonList}
  }
}
</script>
