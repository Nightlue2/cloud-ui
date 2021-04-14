# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tab, Tabs, Switch, Dialog, openDialog, Alert, TimePicker} from "c4loud";
import 'c4loud/dist/lib/cloud.css';
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button theme="primary">按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog, Alert, TimePicker} from "c4loud";
import 'c4loud/dist/lib/cloud.css'
export default {
  components: {Button}
}
</script>
```
