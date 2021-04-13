<demo>
禁用标签#设置 <span class="cloud-font-strong">disabled</span> 为tab的 <span class="cloud-font-strong">title</span> 可以禁用一个tab组件。
</demo>
<template>
<Tabs v-model:selected="selectedTab" :disabled="disabledTab">
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
  <Tab title="导航3">内容3</Tab>
  <Tab title="导航4">内容4</Tab>
</Tabs>
</template>

<script lang="ts">
import Tab from '../../lib/Tab.vue';
import Tabs from '../../lib/Tabs.vue';
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
    const disabledTab = ref('导航2')
    return {
      selectedTab,
      disabledTab,
    }
  }
}
</script>

