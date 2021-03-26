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
      
      <router-link to="/doc" class="toDoc">文档</router-link>
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
  @media(max-width:770px){

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
  > .toDoc{
    font-size: 20px;
    display:block;
    line-height:32px;
  }
}
</style>