import { createRouter, createWebHashHistory } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/Intro.vue';
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'
import NotFound from "./views/NotFound.vue";

export const router = createRouter({
    history:createWebHashHistory(),
    routes: [
      {path:'/',component:Home},
      {path:'/doc',component:Doc,
        children:[
          {path:'intro',component:Intro},
          {path:'install',component:Install},
          {path:'getStarted',component:GetStarted}
        ]
      },
      {path:'/:pathMatch(.*)*',component:NotFound}
    ],
  });