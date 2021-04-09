<template>
    <template v-if="visible">
        <teleport to="#cloud-dialog-show" disabled="false">
            <div class="cloud-dialog-overlay" @click="onClickOverlay"></div>
            <div class="cloud-dialog-wrapper">
                <div class="cloud-dialog" :style="cloudDialogStyle" >
                    <header>
                        <slot name="title" />
                        <div @click="close" class="cloud-dialog-close">
                          <svg class="icon">
                            <use xlink:href="#icon-dialog-close"></use>
                          </svg>
                        </div>
                    </header>
                    <main>
                        <slot name="content" />
                    </main>
                    <footer>
                        <Button @click="cancel">取消</Button>
                        <Button theme="primary" @click="confirm">确定</Button>
                    </footer>
                </div>
            </div>
        </teleport>
    </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    moveDialog:Boolean,
    width:String,
    confirm: Function,
    cancel: Function
  },
  components: {
    Button,
  },
  setup(props, context) {
    const w = parseInt(props.width);
    let cloudDialogStyle = {width:''};
    if(!isNaN(w) && w !== 0){
      cloudDialogStyle.width = w+'px'
    }else{
      cloudDialogStyle = null
    }
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const confirm = () => {
      props.confirm?.()
      close()
    }
    const cancel = () => {
      props.cancel?.()
      close()
    }
    return {
      cloudDialogStyle,
      close,
      onClickOverlay,
      confirm,
      cancel
    }
  },
};
</script>

<style lang="scss">
@import '../example.scss';
$radius: 2px;
$border-color: #f0f0f0;

.cloud-dialog {
  border:none;
  background: white;
  border-radius: $radius;
  box-shadow: 5px 6px 17px -4px fade_out(black, 0.75);
  @media (min-width:500px){
    width:520px;
  }
  @media (max-width:500px){
    width:350px;
  }
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 30%;
    transform: translate(-50%,-50%);
    z-index: 11;
  }

  >header {
    padding: 12px 16px;
    padding-left:24px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    font-size: 20px;
    width:auto;
    position:relative;
  }

  >main {
    padding: 22px 21px;
  }

  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    left:100%;
    transform:translateX(-200%);
    border-radius: 50%;
    color:rgba(0,0,0,.45);
    transition:color 0.4s ease;
    &:hover,&:focus{
      color:darken(black,8%);
      &::after{
        transform:scale(1);
      }
    }
    &::after{
      content:'';
      display:block;
      position:absolute;
      right:-10px;
      top:-10px;
      width:200%;
      height:200%;
      border-radius: 50%;
      transform: scale(0);
      transition:all .5s ease;
      background-color:$theme-color;
      z-index:-1;
    }
  }
}
</style>
