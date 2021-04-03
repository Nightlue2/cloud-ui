<template>
<div class="demo">
  <div class="demo-component">
    <component :is="component" />
  </div>
  <div class="demo-actions">
    <div class="demo-description-title">{{descriptions[0]}}</div>
    <p class="demo-description-content">{{descriptions[1]}}</p>
    <button class="demo-showcode" @click="toggleCode">
      <svg class="icon demo-svg-code" :class="{'demo-svg-show':!codeVisible,'demo-svg-hide':codeVisible}">
        <use xlink:href="#icon-code-close"></use>
      </svg>
      <svg class="icon demo-svg-code" :class="{'demo-svg-show':codeVisible,'demo-svg-hide':!codeVisible}">
        <use xlink:href="#icon-code-open"></use>
      </svg>
    </button>
    
  </div>
  <div class="demo-code" v-if="codeVisible">
    <pre class="language-html" v-html="html" />
  </div>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs';
import 'prismjs/themes/prism.css';
import {
  computed,
  onMounted,
  ref
} from 'vue';
const Prism = (window as any).Prism
export default {
  components: {
    Button
  },
  props: {
    component: Object
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const descriptions = computed(()=>{
      return [props.component.__sourceCodeTitle.split('#')[0],props.component.__sourceCodeTitle.split('#')[1]]
    })
    const toggleCode = () => codeVisible.value = !codeVisible.value
    const codeVisible = ref(false)
    return {
      Prism,
      html,
      codeVisible,
      toggleCode,
      descriptions
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 2px;
  @media (min-width:1200px){
    min-width:875px;
    max-width:1200px;

  }
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 40px 24px 50px 30px;
    line-height: 1em;
  }

  &-actions {
    border-top: 1px solid $border-color;
    position: relative;
    height:auto;
  }
  &-description-title{
    font-size:14px;
    position: absolute;
    top:-9px;
    left:37px;
    padding:0;
    line-height:1em;
    background-color: white;
    padding:0 4px;
  }
  &-description-content{
    font-size:14px;
    line-height: 1.5em;
    padding:24px 34px;
  }

  &-showcode{
      background-color: transparent;
      outline: none;
      border:none;
      position: absolute;
      top:50%;
      right:10px;
      transform: translateY(-50%);
      width: 20px;
      height:20px;
      color:rgba(0,0,0,.45);
      &:hover,&:focus{
          cursor:pointer;
          color:rgba(0,0,0,.85);
      }
      > .demo-svg-code{
        width:20px;
        height: 20px;
        position: absolute;
        left:0;
        top:0;
        transition:opacity 0.5s ease,color 0.3s linear;
        color:inherit;
      }
      > .demo-svg-show{
        opacity:1;
      }
      > .demo-svg-hide{
        opacity:0;
      }
  }
  &-code {
    border-top: 1px solid $border-color;

    > .language-html {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      font-size: 18px;
    }
  }
}
</style>
