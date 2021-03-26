<template>
    <main class="navAndBanner">
      <TopNav :jumpOrNot="jumpOrNot"/>
      <div class="banner">
          <h1>CloudUI</h1>
          <h2>一个简洁的 UI 框架</h2>
          <p class="asButton">
            <a class="actions" href="https://github.com/Nightlue2" style="display:flex;align-items:center;">
              <svg class="icon" style="width:28px;height:28px;margin-left:3px;margin-right:10px;">
                <use xlink:href="#icon-github"></use>
              </svg>
              Github
            </a>
            <router-link class="actions" to="/doc" >开始</router-link>
          </p>
      </div>
    </main>
    <section class="features">
      <ul>
        <li>
          <div class="grid-container">
            <svg class="icon">
              <use xlink:href="#icon-vue"></use>
            </svg>
            <h3>基于 Vue 3</h3>
            <p>使用了 Vue 3 Composition API</p>
          </div>
        </li>
        <li>
          <div class="grid-container">
            <svg class="icon">
              <use xlink:href="#icon-typescript"></use>
            </svg>
            <h3>基于 TypeScript </h3>
            <p>源代码采用 TypeScript 书写</p>
          </div>
        </li>
        <li>
          <div class="grid-container">
            <svg class="icon">
              <use xlink:href="#icon-light"></use>
            </svg>
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁</p>
          </div>
        </li>
    </ul>
    </section>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {computed,ref} from 'vue';
export default {
    components: {TopNav},
    setup(){
      let documentWidth = ref(document.documentElement.clientWidth);
      let jumpOrNot = computed(()=>{
        return documentWidth.value > 800 ?  false : true;
      })
      return {documentWidth,jumpOrNot}
    }
    
}
</script>
<style lang="scss">
@media (min-width:1200px){
  .navAndBanner, section{
    a:hover{
      text-decoration: none;
      border:none;
    }
  }
  .navAndBanner{
    background: linear-gradient(135deg, rgba(230,246,249,1) 0%, rgba(179,228,238,1) 54%, rgba(195,239,252,1) 100%);
    height:560px;//1200
    clip-path:ellipse(80% 60% at 50% 40%);
  }
  .banner {
    color:#083c4c;
    padding-top:80px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Microsoft YaHei Light";
    h1{
      font-size:60px;
      letter-spacing: 2px;
    }
    h2{
      font-size:44px;
      margin-top:15px;
      font-weight: lighter;
    }
    >.asButton{
      margin-top:65px;
      display:flex;
      justify-content: center;
      > .actions{
        font-size:24px;
        margin:0 36px;
        padding:0 18px;
        background: #f6f6f6;
        $h: 48px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
      }
    }
  }
  .features{
    display:flex;
    justify-content: center;
    margin-top:50px;
    ul{
      display:flex;
      justify-content: center;
      flex-wrap:wrap;
      width:1250px;
    }
    .grid-container{
      margin:16px 16px;
      padding:15px 8px;
      display: inline-grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 75px auto;
      grid-template-rows: 1fr auto;


      >svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
        font-weight: normal;
      }

      >p {
        grid-area: text;
        font-size: 18px;
      }
    }
  }
}
@media (min-width: 770px) and (max-width: 1200px) {
  .navAndBanner, section{
    a:hover{
      text-decoration: none;
      border:none;
    }
  }
  .navAndBanner{
    background: linear-gradient(135deg, rgba(230,246,249,1) 0%, rgba(179,228,238,1) 54%, rgba(195,239,252,1) 100%);
    height:560px;//1200
    clip-path:ellipse(80% 60% at 50% 40%);
  }
  .banner {
    color:#083c4c;
    padding-top:80px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Microsoft YaHei Light";
    h1{
      font-size:60px;
      letter-spacing: 2px;
    }
    h2{
      font-size:44px;
      margin-top:15px;
      font-weight: lighter;
    }
    >.asButton{
      margin-top:65px;
      display:flex;
      justify-content: center;
      > .actions{
        font-size:24px;
        margin:0 36px;
        padding:0 18px;
        background: #f6f6f6;
        $h: 48px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
      }
    }
  }
  .features{
    display:flex;
    justify-content: center;
    margin-top:50px;
    ul{
      display:flex;
      flex-wrap:wrap;
      width:720px;
      margin-left:50px;
    }
    .grid-container{
      width:360px;
      margin:16px 0;
      padding:15px 8px;
      display: inline-grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 75px auto;
      grid-template-rows: 1fr auto;


      >svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
        font-weight: normal;
      }

      >p {
        grid-area: text;
        font-size: 18px;
      }
    }
  }
}
@media (max-width:770px){
  .navAndBanner, section{
    a:hover{
      text-decoration: none;
      border:none;
    }
  }
  .navAndBanner{
    background: linear-gradient(135deg, rgba(230,246,249,1) 0%, rgba(179,228,238,1) 54%, rgba(195,239,252,1) 100%);
    height:340px;
    clip-path:ellipse(95% 59% at 50% 38%);
  }
  .banner {
    color:#083c4c;
    padding-top:25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Microsoft YaHei Light";
    h1{
      font-size:40px;
      letter-spacing: 2px;
    }
    h2{
      font-size:28px;
      margin-top:15px;
      font-weight: lighter;
    }
    >.asButton{
      margin-top:30px;
      display:flex;
      justify-content: center;
      > .actions{
        font-size:24px;
        margin:0 10px;
        padding:0 16px;
        background: #f6f6f6;
        $h: 48px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
      }
    }
  }
  .features{
    ul{
      display:flex;
      flex-wrap:wrap;
      width:100%;
      padding:10px 0;
    }
    li{
      display:flex;
      width:100%;
      justify-content: center;
    }
    .grid-container{
      min-width:320px;
      width:340px;
      margin:24px auto;
      margin-top:0;
      padding:15px 0;
      display: inline-grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 75px auto;
      grid-template-rows: 1fr auto;


      >svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
        font-weight: normal;
      }

      >p {
        grid-area: text;
        font-size: 18px;
      }
    }
  }
}
</style>