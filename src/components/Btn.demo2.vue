<template>
<div>
  <div>
    <Button v-for="(item,name) in buttonList" :key="item" :size="btnSize" @click="changeSize(name)" >{{item}}+{{btnSize}}</Button>
  </div>
  <div>
    <Button :size="btnSize" theme="link"  @click="changeSize('big')">Big</Button>
    <Button :size="btnSize" theme="link" @click="changeSize('default')">Default</Button>
    <Button :size="btnSize" theme="link" @click="changeSize('small')">Small</Button>
  </div>
  <div>
    <Button :size="btnSize" theme="text" @click="changeSize('big')">Big</Button>
    <Button :size="btnSize" theme="text" @click="changeSize('default')">Default</Button>
    <Button :size="btnSize" theme="text" @click="changeSize('small')">Small</Button>
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
    let btnSize = ref('default');
    let buttonList = {'big':'Big','default':'Default','small':'Small'}
    let x = ref(true)
    function changeSize(newsize){
      btnSize.value = newsize;
      x.value = !x.value;
    }
    
    return {btnSize,changeSize,buttonList,x}
  }
}
</script>
