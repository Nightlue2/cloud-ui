<template>
<div>
  
    <Button v-for="(item,name) in buttonList" :key="item" :size="btnsize" @click="changeSize(name)" >{{item}}</Button>
  
  <div>
    <Button :size="btnsize" theme="link"  @click="changeSize('big')">Big</Button>
    <Button :size="btnsize" theme="link" @click="changeSize('default')">Default</Button>
    <Button :size="btnsize" theme="link" @click="changeSize('small')">Small</Button>
  </div>
  <div>
    <Button :size="btnsize" theme="text" @click="changeSize('big')">Big</Button>
    <Button :size="btnsize" theme="text" @click="changeSize('default')">Default</Button>
    <Button :size="btnsize" theme="text" @click="changeSize('small')">Small</Button>
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
    let btnsize = ref('big');
    let buttonList = {'big':'Big','default':'Default','small':'Small'}
    function changeSize(newsize:string){
      btnsize.value = newsize;
    }
    return {btnsize,changeSize,buttonList}
  }
}
</script>
