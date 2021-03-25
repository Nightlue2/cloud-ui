<template>
    <div class="topnav">
      <router-link to="/" v-if="jumpOrNot">
        <svg class="icon">
          <use xlink:href="#icon-cloud"></use>
        </svg>
      </router-link>
      <div v-else>
        <svg class="icon" >
                  <use xlink:href="#icon-cloud"></use>
        </svg>
      </div>
      
      <ul class="menu">
          <li><router-link to="/doc">文档</router-link></li>
      </ul>
    </div>
</template>

<script lang="ts">
export default {
  props:{
    jumpOrNot:{
      type:Boolean
    }
  }
}
</script>

<style lang="scss">
.topnav {
  @media (min-width:1200px) {
    
  }
  @media(min-width:800px){

  }
  @media(max-width:800px){

  }
  background: pink;
  display: flex;
  padding: 16px;
  background-color:rgba(0,0,0,0);
  justify-content: space-between;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      > a{
        font-size: 16px;
        display:block;
        line-height:32px;
        &:hover{
          text-decoration: none;
          border:none;
        }
      }
    }
  }
}
</style>