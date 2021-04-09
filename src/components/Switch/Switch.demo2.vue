<demo>
不可用状态#设置disabled后，该组件处于无法点击的状态。
</demo>
<template>
    <div class="switchDemoContainer">
        <div style="margin-right:20px;">
            <Switch :value="true" disabled />
        </div>
        <div>
            <Switch :value="false" disabled />
        </div>
    </div>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
export default {
  components: {
    Switch,
  },
}
</script>
<style lang="scss">
    .switchDemoContainer{
        display: flex;
    }
</style>