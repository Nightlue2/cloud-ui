<demo>
居中#使用 <span class="cloud-font-strong">center</span> 属性来使标签的位置居中。
</demo>
<template>
<Tabs v-model:selected="selectedTab" center>
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
  <Tab title="导航3">内容3</Tab>
  <Tab title="导航4">内容4</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs,{Tab} from '../../lib/Tabs.vue';
import {
  ref,
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const selectedTab = ref('导航1')
    return {
      selectedTab
    }
  }
}
</script>

