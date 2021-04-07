<template>
  <button class="cloud-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="cloud-loadingIndicator"></span>
      <slot />
  </button>
</template>
<script lang="ts">
import { computed,toRefs} from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "default",
    },
    danger: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    },
    shape:{
      type:String,
      default:"square"
    }
  },
  setup(props) {
    const { theme, size, danger,shape } = toRefs(props);
    const classes = computed(function(){
      let classObj = {};
      if(size.value !== 'default'){
        classObj[`cloud-size-${size.value}`]= size.value
      }
      if(danger.value){
        classObj['cloud-danger'] = danger.value
      }
      if(shape.value === 'round'){
        classObj['cloud-button-round'] = shape.value
      }
      classObj[`cloud-theme-${theme.value}`] = theme.value
      return classObj;
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 31px;
$border-color: #d9d9d9;
$color: #333;
$blue: #39c0db;
$radius: 2px;
$red: red;
$grey: grey;
$disableFontColor:rgb(0,0,0,.25);
$disableColor1:#f5f5f5;
[class^="cloud-"], [class*=" cloud-"] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}
.cloud-button {
  box-sizing: border-box;
  height: $h;
  padding: 5px 17px;
  cursor: pointer;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  transition: all 300ms cubic-bezier(.645,.045,.355,1);
  font-size:14px;
  line-height:1.4;
  margin-right: 8px;
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
    outline: none;
  }
  &.cloud-button-round{
    border-radius: 19.5px;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.cloud-theme-primary{
    background-color: $blue;
    color:white;
    box-shadow: none;
    border-color: $blue;
    border:none;
    &:hover,
    &:focus{
      background-color: lighten($blue,8%);
    }
    &.cloud-danger{
      background:$red;
      border-color: $red;
      &:hover,
      &:focus{
        background-color: lighten($red, 18%);
        border-color: lighten($red, 18%);
      }
    }
  }
  &.cloud-theme-button {
      &.cloud-danger {
        background-color: white;
        border-color: $red;
        color: $red;
        &:hover,
        &:focus {
          border-color: lighten($red, 20%);
          color:lighten($red, 20%);
        }
      }
      
  }
  &.cloud-theme-dashed{
    border:1px dashed #d9d9d9;
    &:hover,&:focus{
      border:1px dashed $blue;
    }
    &.cloud-danger {
      color: $red;
      border-color:$red;
      &:hover,
      &:focus {
        color: lighten($red, 18%);
        border-color: lighten($red, 18%);
      }
    }
  }
  &.cloud-theme-text {
    border:none;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 4%);
    }
    &.cloud-danger {
      color: $red;
      &:hover,
      &:focus {
        color: lighten($red, 18%);
      }
    }
  }
  &.cloud-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 7%);
    }
    &.cloud-danger {
      color: $red;
      &:hover,
      &:focus {
        color: lighten($red, 18%);
      }
    }
  }
  &.cloud-size-big {
    height: 40px;
    font-size: 16px;
    padding: 12px 18px;
    line-height:0.5;
    &.cloud-button-round{
      border-radius: 20px;
    }
  }
  &.cloud-size-small {
    height:24px;
    padding: 2px 10px;
    line-height:1.4;
    &.cloud-button-round{
      border-radius: 12px;
    }
  }
  &.cloud-theme-primary,&.cloud-theme-button,&.cloud-theme-primary.cloud-danger,&.cloud-theme-button.cloud-danger{
    &[disabled] {
      cursor: not-allowed;
      color: $disableFontColor;
      background-color:$disableColor1;
      border-color: $border-color;
    }
  }
  &.cloud-theme-dashed,&.cloud-theme-dashed.cloud-danger{
    &[disabled] {
      cursor: not-allowed;
      color: $disableFontColor;
      background-color:$disableColor1;
      border:1px dashed $border-color;
    }
  }
  &.cloud-theme-link,&.cloud-theme-link.cloud-danger, &.cloud-theme-text.cloud-danger {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
    &:hover,&:focus{
      background: transparent;
    }
  }
  > .cloud-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    vertical-align: -0.135em;
    animation: cloud-spin 1s infinite linear;
  }
}
@keyframes cloud-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>