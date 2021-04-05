<template>
  <button class="cloud-switch" @click="toggle" :class="{'cloud-switch-checked':value,'cloud-switch-disabled':disabled || loading,'cloud-switch-small':size,'cloud-switch-loading':loading}">
    <span></span>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    value: Boolean,
    disabled:Boolean,
    size:String,
    loading:Boolean
  },
  setup(props, context) {
    const toggle = () => {
      if(props.loading!==true && props.disabled!==true){
        context.emit("update:value", !props.value);
      }
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$switch-small-h:18px;
$switch-small-h2:$switch-small-h - 4px;
$switch-checked-color:#39c0db;
$switch-unchecked-color:#bfbfbf;
.cloud-switch {
  height: $h; width: $h * 2; border: none; background: $switch-unchecked-color; border-radius: $h/2; position: relative;
  line-height: inherit;display:block;transition:background-color 250ms ease;
  &:hover{
      cursor: pointer;
  }
  > span {
    position: absolute; top: 2px; left: 2px; height: $h2; width: $h2; background: white; border-radius: $h2 / 2; transition: all 350ms ease;
  }
  &-checked { background: $switch-checked-color;
    > span { left: calc(100% - #{$h2} - 2px); }
  }
  &-checked.cloud-switch-small{
      >span{
          left:calc(100% - #{$switch-small-h2} - 2px);
      }
  }
  &:focus { outline: none; }
  &:not(.cloud-switch-disabled):active {
    > span { width: $h2 + 4px; }
  }
  &:not(.cloud-switch-disabled):active.cloud-switch-checked {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
  &-small{
      height: $switch-small-h; width: $switch-small-h * 2; border-radius: $switch-small-h / 2;
      >span{
          height: $switch-small-h2; width: $switch-small-h2; border-radius: $switch-small-h2 / 2; left:2px;top:2px;
          &::before{
            content:'';
            width:67%;
            height: 67%;
            display: block;
            border: 2px solid $switch-checked-color;
            border-color:$switch-checked-color transparent transparent transparent;
            border-radius: 100%;
            position:relative;
            transform: rotate(45deg);
            left:6%;
            top:3%;
          }
      }
  }
  &:not(.cloud-switch-disabled):active.cloud-switch-small{//小按钮-未选中-点击状态
      >span{
          width: $switch-small-h2 + 2px;
      }
  }
  &:not(.cloud-switch-disabled):active.cloud-switch-checked.cloud-switch-small{//小按钮-选中-点击状态
      >span{
           width: $switch-small-h2 + 2px; margin-left: -2px; 
      }
  }
  &-disabled{
      cursor:not-allowed;
      opacity: 0.5;
      &:hover,&:focus{
          cursor:not-allowed;
      }
      >span{
          cursor:inherit;
      }
  }
  &-loading{
    >span{
          cursor:inherit;
          &::before{
            content:'';
            width:12px;
            height: 12px;
            display: block;
            border: 2px solid $switch-checked-color;
            border-color:$switch-checked-color transparent transparent transparent;
            border-radius: 100%;
            position:relative;
            transform: rotate(45deg);
            left:6%;
            top:3%;
            cursor:not-allowed;         
          }  
      }
  }
}
</style>