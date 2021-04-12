<template>
  <div class="topnav" :class="outerClass">
    <Icon icon="list" class="icon list" @click="toggleMenu" />
    <router-link to="/" v-if="jumpOrNot">
      <Icon icon="cloud" class="icon" />
    </router-link>
    <div v-else>
      <Icon class="icon" icon="cloud" />
    </div>
    <router-link to="/doc" class="toDoc">文档</router-link>
  </div>
</template>

<script lang="ts">
import Icon from './Icon.vue';
export default {
  props: {
    jumpOrNot: {
      type: Boolean,
    },
    outerClass: {
      type: String,
    },
    modelValue: {
      type: Boolean,
    },
  },
  components:{
    Icon,
  },
  setup(props,context) {
    const toggleMenu = function () {
        context.emit("update:modelValue", !props.modelValue);
    };
    return {toggleMenu}
  },
};
</script>

<style lang="scss">
@import "../style.scss";
.topnav {
  @media (min-width: 1200px) {
    width: 100vw;
    height: 66px;
    flex-direction: row;
  }
  @media (min-width: 770px) and (max-width: 1200px) {
  }
  @media (max-width: 770px) {
  }
  background: pink;
  display: flex;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0);
  justify-content: space-between;
  > .icon {
    display: none;
  }
  > .list{
    width:24px;
    height:24px;
    margin:auto 0;
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
    height: auto;
  }
  > .toDoc {
    font-size: 20px;
    display: block;
    line-height: 32px;
    margin-right: 1.2em;
    color: $font-color;
  }
}
.docNav {
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  box-shadow: 0 -5px 20px 0 rgba(0, 0, 0, 0.2);
  z-index: 9;
  @media (min-width: 770px) and (max-width: 1200px) {
    width: 100vw;
    height: 66px;
    flex-direction: row;
  }
  @media (max-width: 770px) {
    width: 100vw;
    height: 66px;
    flex-direction: row;
    > .icon {
      display: block;
    }
    > .toDoc {
      margin-right: 0;
    }
  }
}
</style>
