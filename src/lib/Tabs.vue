<template>
<div class="cloud-tabs">
  <div class="cloud-tabs-nav" ref="container" :class="{'cloud-tabs-center':center}">
    <div class="cloud-tabs-nav-item" v-for="(t,index) in titles" :ref="el => { if (t===selected) selectedItem = el }" @click="select(t)" :class="{selected: t===selected,disabled:t===disabled}" :key="index">{{t}}</div>
    <div class="cloud-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="cloud-tabs-content">
    <component :is="current" :key="current.props.title" />
  </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {
  computed,
  ref,
  watchEffect,
  onMounted
} from 'vue';
export default {
  props: {
    selected: {
      type: String
    },
    disabled:String,
    center:Boolean,
  },
  setup(props, context) {
    const selectedItem = ref < HTMLDivElement > (null)
    const indicator = ref < HTMLDivElement > (null)
    const container = ref < HTMLDivElement > (null)

    onMounted(() => {
      watchEffect(() => {
        const {
          width
        } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {
          left: left1
        } = container.value.getBoundingClientRect()
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      },{
        flush:'post'
      })
    })

    const defaults = context.slots.default() //首先拿到传递的tab组件
    defaults.forEach((tab) => {
      // @ts-ignore
      if (tab.type.name !== Tab.name) {
        throw new Error('Tabs 子标签必须是 Tab')//如果不是tab组件就报错
      }
    })
    const current = computed(() => {
      return defaults.find(tab => tab.props.title === props.selected)//找到当前被选中的tab
    })
    const disabledTab = computed(()=>{
        return defaults.find(tab=> tab.props.title === props.disabled)//找到当前不可点击的tab
    })
    const titles = defaults.map((tab) => {
      return tab.props.title //获取当前所有的tab组件的title
    })
    const select = (title: string) => {
        if(title !== props.disabled){
            context.emit('update:selected', title)
        }
    }
    return {
      current,
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
      disabledTab
    }
  }
}
</script>

<style lang="scss">
$blue: #5ec5db;
$color: #333;
$border-color: #d9d9d9;

.cloud-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
      &.disabled{
          cursor:not-allowed;
          opacity: 0.5;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 20px 0;
    overflow-wrap: break-word;
  }
}
.cloud-tabs-center{
    display:flex;
    justify-content: center;
}
</style>
