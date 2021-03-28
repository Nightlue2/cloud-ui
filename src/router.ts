import { createRouter, createWebHashHistory } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import NotFound from "./views/NotFound.vue";
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import Button from './views/ButtonExample.vue';
import Dialog from './views/DialogExample.vue';
import Switch from './views/SwitchExample.vue';
import Tabs from './views/TabsExample.vue';
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
export const router = createRouter({
    history:createWebHashHistory(),
    routes: [
      {path:'/',component:Home},
      {path:'/doc',component:Doc,
        children:[
          {path:'',redirect:'/doc/Intro'},
          {path:'intro',component:md('intro')},
          {path:'install',component:md('install')},
          {path:'getStarted',component:md('getstarted')},
          {path:'button',component:Button},
          {path:'dialog',component:Dialog},
          {path:'switch',component:Switch},
          {path:'tabs',component:Tabs},
        ]
      },
      {path:'/:pathMatch(.*)*',component:NotFound}
    ],
  });