<template>
    <div style="position:relative;">
        <input class="cloud-timepicker-input" ref="input" placeholder="请输入时间" :value="v" autocomplete="off"/>
        <Icon class="cloud-alert-icon" :class="{[`cloud-alert-icon-${theme}`]:showIcon && theme}" icon="theme" />
        <transition name="display">
            <div class="cloud-picker-wrapper" v-show="openOrNot" ref="picker">
                <ul>
                    <li v-for="(item,index) in arrGenertor(24)" :key="index" @click="changeV(item,0)">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="(item,index) in arrGenertor(60)" :key="index" @click="changeV(item,1)">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="(item,index) in arrGenertor(60)" :key="index" @click="changeV(item,2)">{{item}}</li>
                </ul>
                <div class="cloud-picker-footer">
                    <a href="javascript:;" class="cloud-picker-getmoment" @click="v=currentTime()">此刻</a>
                    <button class="cloud-picker-submit" ref="button">确定</button>
                </div>
            </div>
        </transition> 
    </div>
  
</template>
<script lang="ts">
import { ref,onMounted} from 'vue';
import Icon from '../components/Icon.vue';
export default {
    props: {
        onChange:Function,
    },
    components:{
        Icon,
    },
  setup() {
      const input = ref< HTMLInputElement >(null);
      const button = ref <HTMLButtonElement> (null);
      const picker = ref <HTMLButtonElement> (null);
      let v = ref("");
      let openOrNot = ref(false);
      const arrGenertor = function(upLimit){//生成li里的数据
          const init = 0;
          const arr = Array(upLimit);
          for(let i=0;i<upLimit;i++){
              arr[i] = String(init + i);
              arr[i] = (arr[i].length === 1 ? '0'+arr[i] :arr[i])
          }
          return arr;
      }
      const currentTime = function(){
          let currentT = new Date();
          let h = currentT.getHours()+'';
          let m = currentT.getMinutes()+'';
          let s = currentT.getSeconds()+'';
          h = h.length ===1 ? '0' +h : h;
          m = m.length ===1 ? '0' +m : m;
          s = s.length ===1 ? '0' +s : s;
          return h+':'+m +':'+s;
      }
      const isValid = function(){
          let reg = /([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/
          if(reg.test(v.value)){
              return true;
          }
          return false;
      }
      const changeV = function(new_v,place){
          if(isValid() === true){
              let v_arr = v.value.split(':')
              v_arr[place] = new_v
              v.value = v_arr.join(':')
          }else{
              let v_arr = Array(3)
              v_arr[place] = new_v;
              for(let i=0;i<3;i++){
                if(i!==place){
                    v_arr[i] = '00';
                }
              }
              v.value = v_arr.join(':')
          }
      }
      onMounted(()=>{
        document.body.addEventListener('click',(e)=>{
            if(e.target === input.value){
                if(!openOrNot.value){
                    openOrNot.value = true;
                }
            }else{
                if(openOrNot.value){
                    openOrNot.value = false;
                    v.value = ''
                }
            }
        })
        picker.value.addEventListener('click',(e)=>{
            e.stopPropagation();
            if(e.target === button.value){
                openOrNot.value = false;
            }
        })
      })
      return {
          v,
          openOrNot,
          arrGenertor,
          currentTime,
          isValid,
          changeV,
          input,
          button,
          picker,
      }
  }
}
//tip:不保留ul滚动状态
//    子组件悬浮不会触发父组件
</script>

<style lang="scss">
$theme-color: #5ec5db;
.cloud-timepicker-input{
    width:170px;
    border:none;
    background: white;
    transition:box-shadow .25s linear,border .3s ease;
    font-size: 14px;
    padding:7px 6px 7px 10px;
    border:1px solid #d9d9d9;
    &:hover{
        border-color:$theme-color;
    }
    &:focus{
        border-color:$theme-color;
        box-shadow:0 0 0 2px rgba(94,197,219,0.23);
        outline:none;
    }
}
.cloud-picker-wrapper{
    position:absolute;
    z-index:10;
    width:180px;
    margin-top:3px;
    border-radius: 3px;
    box-shadow:0 0 10px 4px rgba(0, 0, 0, 4%),0 2px 15px 3px rgba(0,0,0,5%);
    background-color: white;
    height:288px;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    overflow-y: hidden;
    ul{
        width:60px;
        height: 238px;
        overflow-y:hidden;
        padding-top:3px;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        &:hover{
            overflow-y:auto;
        }
    }
    ul:nth-child(3){
        border-right:none;
    }
    ul > li{
        font-size:14px;
        line-height:26px;
        padding:4px 0 4px 10px;
        transition:background-color 0.15s ease;
        &:hover{
            cursor:pointer;
            background-color:rgba(0, 0, 0, 0.1);
        }
    }
}
.cloud-picker-footer{
    position:absolute;
    top:238px;
    width:180px;
    height:50px;
    line-height:50px;
    background-color:white;
    border-top:1px solid rgba(0, 0, 0, 0.1);
    > .cloud-picker-getmoment{
        color:$theme-color;
        transition:color .25s linear;
        margin-left:10px;
        &:hover{
            cursor:pointer;
            color:lighten($theme-color,8%);
        }
    }
    > .cloud-picker-submit{
        background-color:#29a1ba;
        border:none;
        width:56px;
        height:30px;
        text-align: center;
        padding:4px 3px;
        color:white;
        letter-spacing: 2px;
        margin:auto 0;
        margin-left:77px;
        transition:background-color .25s linear;
        &:focus{
            outline:none;
        }
        &:hover{
            cursor:pointer;
            background-color:lighten(#29a1ba,10%);
        }
    }
}
.display-enter-active,
.display-leave-active{
    transition:opacity 0.4s ease;
}
.display-enter-from,
.display-leave-to{
    opacity:0;
}
</style>