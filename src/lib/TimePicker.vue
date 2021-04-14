<template>
    <div class="cloud-picker" :class="{['cloud-picker-large']:size==='large'}" ref="picker">
        <input class="cloud-picker-input" :class="{['cloud-picker-input-small']:size==='small'}" size="13" ref="input" placeholder="请输入时间" :value="v" autocomplete="off" />
        <Icon class="cloud-picker-icon" icon="clock"/>
        <Icon class="cloud-picker-icon" :class="{['cloud-picker-showicon']:v}" icon="timepicker-close" @click="v = ''" v-if="v"/>
        <transition name="display">
            <div class="cloud-picker-wrapper" v-show="openOrNot" ref="pickList" :style="{top}">
                <ul>
                    <li v-for="(item,index) in arrGenertor(24)" :key="index" @click="changeVal(item,0)">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="(item,index) in arrGenertor(60)" :key="index" @click="changeVal(item,1)">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="(item,index) in arrGenertor(60)" :key="index" @click="changeVal(item,2)">{{item}}</li>
                </ul>
                <div class="cloud-picker-footer">
                    <a href="javascript:;" class="cloud-picker-getmoment" @click="v=currentTime()">此刻</a>
                    <button class="cloud-picker-submit" ref="button" @click="submitVal">确 定</button>
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
        onchange:Function,
        size:String,
    },
    components:{
        Icon,
    },
  setup(props) {
      const input = ref< HTMLInputElement >(null);
      const button = ref< HTMLButtonElement > (null);
      const pickList = ref< HTMLButtonElement > (null);
      const clock = ref< SVGSVGElement > (null);
      const picker = ref< HTMLDivElement >(null);
      const v = ref("");//控制input的值
      const openOrNot = ref(false);//控制显示下拉框
      const left = ref('');
      const top = ref('');
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
      const changeVal = function(new_v,place){
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
      const submitVal = function(){
          props.onchange.call(null,v);
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
        pickList.value.addEventListener('click',(e)=>{
            e.stopPropagation();
            if(e.target === button.value){
                if(v.value === '')  v.value = '00:00:00';
                openOrNot.value = false;
            }
        })
        input.value.addEventListener('focus',()=>{
            picker.value.classList.add('cloud-picker-focused')
        })
        input.value.addEventListener('blur',()=>{
            picker.value.classList.remove('cloud-picker-focused')
        })
        top.value = picker.value.getBoundingClientRect().height+'px';
      })
      return {
          v,
          openOrNot,
          arrGenertor,
          currentTime,
          isValid,
          changeVal,
          input,
          button,
          pickList,
          clock,
          picker,
          left,
          top,
          submitVal,
      }
  }
}
</script>

<style lang="scss">
$theme-color: #44c0db;
.cloud-picker{
    position:relative;
    padding:0 5px;
    border-radius: 2px;
    border:1px solid #d9d9d9;
    display: inline-flex;
    &:hover{
        border-color:$theme-color;
    }
    &-focused{
        border-color:$theme-color;
        outline:0;
        box-shadow:0 0 0 2px rgba(94,197,219,0.23);
    }
}
.cloud-picker-large{
    padding:8px 10px;
    padding-left: 5px;
}
.cloud-picker-input{
    width:100%;
    border:none;
    background: white;
    transition:box-shadow .25s linear,border .3s ease;
    font-size: 14px;
    line-height:24px;
    text-overflow: ellipsis;
    padding:2px 0;
    &:focus{
        outline:none;
    }
    &-small{
        line-height:16px;
    }
}
.cloud-picker-wrapper{
    position:absolute;
    left:0;
    margin-top:3px;
    z-index:4;
    width:180px;
    border-radius: 3px;
    box-shadow:0 0 10px 4px rgba(0, 0, 0, 4%),0 2px 15px 3px rgba(0,0,0,5%);
    background-color: white;
    height:288px;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    overflow-y: hidden;
    ul{
        list-style:none;
        width:60px;
        height: 238px;
        overflow-y:hidden;
        padding:0;
        margin:0;
        box-sizing: border-box;
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
        padding:0;
        margin:0;
        box-sizing: border-box;
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
    font-size: 14px;
    > .cloud-picker-getmoment{
        font-size: inherit;
        color:$theme-color;
        transition:color .25s linear;
        margin-left:15px;
        text-decoration: none;
        &:hover{
            cursor:pointer;
            color:lighten($theme-color,8%);
        }
    }
    > .cloud-picker-submit{
        font-size: inherit;
        background-color:#29a1ba;
        border:none;
        width:46px;
        height:26px;
        text-align: center;
        color:white;
        margin:auto 0;
        margin-left:80px;
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
.cloud-picker-icon{
    width:16px;
    height:16px;
    color:rgba(0,0,0,.45);
    fill:currentColor;
    margin:auto 0;
    position:absolute;
    right:3.7%;
    top:50%;
    transform:translateY(-50%);
    transition: opacity .25s linear;
}
.cloud-picker-showicon{
    background: white;
    &:hover{
        cursor: pointer;
        color:rgba(0,0,0,.75);
    }
}
.display-enter-active,
.display-leave-active{
    transition:opacity .4s ease;
}
.display-enter-from,
.display-leave-to{
    opacity:0;
}
</style>