<demo>
基本使用#使用 <span class="cloud-font-strong">title</span> 属性来设置每个tab的标题。
</demo>
<template>
<Tabs v-model:selected="selectedTab">
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
  <Tab title="导航3">内容3</Tab>
  <Tab title="导航4">内容4</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib/Tabs.vue';
import Tab from '../../lib/Tab.vue';
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

