<template>
<div id="demosPage">
  <section>
    <h1>Button 按钮</h1> 
    <p>用于触发一系列的操作。</p> 
  </section>
  <section>
    <h2>代码示例</h2>
  </section>
  <section>
    <Demo :component="BtnDemo1" />
    <Demo :component="BtnDemo2" />
    <Demo :component="BtnDemo3" />
    <Demo :component="BtnDemo4" />
    <Demo :component="BtnDemo5" />
  </section>
</div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import BtnDemo1 from "../components/Button/Btn.demo1.vue";
import BtnDemo2 from "../components/Button/Btn.demo2.vue";
import BtnDemo3 from "../components/Button/Btn.demo3.vue";
import BtnDemo4 from "../components/Button/Btn.demo4.vue";
import BtnDemo5 from "../components/Button/Btn.demo5.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      BtnDemo1,
      BtnDemo2,
      BtnDemo3,
      BtnDemo4,
      BtnDemo5
    };
  },
};
</script>
<style lang="scss">
@import '../example.scss';
.btnDemoContainer{
  margin:8px auto;
  line-height:1em;
  @media (max-width:770px) {
    line-height:45px;
  }
  &:first-child{
    margin-top:0;
  }
  &:last-child{
    margin-bottom: 0;
  }
}
.cloud-button-demo{
  @media(max-width:770px){
    line-height: 43px;
  }
}
</style>