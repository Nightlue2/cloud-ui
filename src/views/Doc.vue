<template>
    <div class="page">
        <TopNav :jumpOrNot="true" class="docNav" v-model="toggleAside"/>
        <div class="rest">
            <aside v-if="isMobile || toggleAside">
                <h2>文档</h2>
                <ol>
                    <li>
                    <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                    <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                    <router-link to="/doc/getstarted">开始使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/button">
                            <span>Button</span>
                            <span class="chinese" >按钮</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/doc/switch">
                        <span>Switch</span>
                        <span class="chinese">开关</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">
                        <span>Dialog</span>
                        <span class="chinese">对话框</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">
                        <span>Tabs</span>
                        <span class="chinese">标签页</span>
                        </router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view class="doc-content"/>
            </main> 
        </div>
    </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue';
import { onMounted, ref} from 'vue';
export default {
    components:{TopNav},
    setup(){
        let timerId;
        let isMobile = ref(document.documentElement.clientWidth<=770?false:true);
        let toggleAside = ref<Boolean>(false)
        onMounted(()=>{
            window.addEventListener('resize',()=>{
                timerId && window.clearTimeout(timerId);
                timerId = setTimeout(()=>{
                    if(document.documentElement.clientWidth<=770){
                        isMobile.value = false;
                    }else{
                        isMobile.value = true;
                    }
                    timerId = null;
                },400)
            });
        })
        return {toggleAside,isMobile}
    },
    
}
</script>
<style lang="scss">
@import '../style.scss';
@media (min-width:1200px){
    .page{
        position: relative;
        display:flex;
        width:100%;
        font-size: 24px;
        .rest{
            width:100vw;
            display:flex;
            > aside{
                width:$doc-aside-w;
                height:$doc-main-height;
                position: fixed;
                top:$doc-top-margin;
                padding-top:30px;
                color:rgb(0,0,0,0.65);
                font-family: Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
                &::after{
                    position: absolute;
                    content:'';
                    display: block;
                    width:200%;
                    height:200%;
                    top:0;
                    z-index:-1;
                    transform:scale(0.5);
                    transform-origin: left top;
                    border-right:1px solid #ccc;
                }
                h2{
                    font-weight: 400;
                    font-size:1em;
                    padding-left:40px;
                    padding-top:20px;
                }

                ol{
                    margin-top:12px;
                    >li{
                        font-weight: normal;
                        font-size: 16px;
                        a{
                            display: block;
                            padding:10px 0;
                            padding-left:50px;
                            font-size: inherit;
                        }
                        span{
                            color:inherit;
                            font-size:16px;
                            font-weight: 480;
                        }
                        span.chinese{
                            font-size: 14px;
                            margin-left:10px;
                            opacity: .67;
                            font-weight: 400;
                        }
                        .router-link-active {
                            background: #d8f1f6;
                            color:$doc-router-color;
                            border-right: 3px solid $doc-router-color;
                        }
                    }
                }
            }

            > main{
                height:calc(100vh - 66px);
                min-width:900px;
                width:calc(100% - 300px);
                margin:0 auto;
                margin-left:$doc-aside-w;
                margin-top:$doc-top-margin;
                padding-left:60px;
                padding-top:50px;
                padding-right:10.42vw;
                > .doc-content{
                    height: auto;
                    padding-left:4.95vw;
                    line-height: 1.7em;
                    
                }
            }
            
        }
    }
}
@media (min-width:770px) and (max-width:1200px) {
    .page{
        position: relative;
        display:flex;
        width:100%;
        font-size: 24px;
        .rest{
            width:100vw;
            display:flex;
            > aside{
                width:200px;
                height:$doc-main-height;
                position: fixed;
                top:$doc-top-margin;
                padding-top:30px;
                color:rgb(0,0,0,0.65);
                font-family: -apple-system,"Noto Sans","Helvetica Neue",Helvetica,"Nimbus Sans L",Arial,"Liberation Sans","PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Source Han Sans SC","Source Han Sans CN","Microsoft YaHei","Wenquanyi Micro Hei","WenQuanYi Zen Hei","ST Heiti",SimHei,"WenQuanYi Zen Hei Sharp",sans-serif;
                &::after{
                    position: absolute;
                    content:'';
                    display: block;
                    width:200%;
                    height:200%;
                    top:0;
                    z-index:-1;
                    transform:scale(0.5);
                    transform-origin: left top;
                    border-right:1px solid #ccc;
                }
                h2{
                    font-weight: 400;
                    font-size:1em;
                    padding-left:40px;
                    padding-top:20px;
                }

                ol{
                    margin-top:12px;
                    >li{
                        font-weight: normal;
                        font-size: 16px;
                        a{
                            display: block;
                            padding:10px 0;
                            padding-left:50px;
                            font-size: inherit;
                        }
                        span{
                            color:inherit;
                            font-size: 16px;
                        }
                        span.chinese{
                            font-size: 14px;
                            margin-left:10px;
                            opacity: .67;
                            font-weight: 400;
                        }
                        .router-link-active {
                            background: #d8f1f6;
                            color:$doc-router-color;
                            border-right: 3px solid $doc-router-color;
                        }
                    }
                }
            }

            > main{
                height:calc(100vh - 66px);
                width:auto;
                margin:0 auto;
                margin-left:200px;
                margin-top:$doc-top-margin;
                padding-left:30px;
                padding-top:50px;
                padding-right:1vw;
                > .doc-content{
                    height: auto;
                    padding-left:50px;
                    line-height: 1.7em;
                }
            }
            
        }
    }

}
@media(max-width:770px){
    .page{
        position: relative;
        display:flex;
        width:100%;
        font-size: 24px;
        .rest{
            width:100vw;
            margin-top:$doc-top-margin;
            position:relative;
            > aside{
                width:175px;
                height:$doc-main-height;
                position: fixed;
                top:65px;
                color:rgb(0,0,0,0.65);
                font-family: -apple-system,"Noto Sans","Helvetica Neue",Helvetica,"Nimbus Sans L",Arial,"Liberation Sans","PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Source Han Sans SC","Source Han Sans CN","Microsoft YaHei","Wenquanyi Micro Hei","WenQuanYi Zen Hei","ST Heiti",SimHei,"WenQuanYi Zen Hei Sharp",sans-serif;
                background-color:white;
                &::after{
                    position: absolute;
                    content:'';
                    display: block;
                    width:200%;
                    height:200%;
                    top:0;
                    z-index:-1;
                    transform:scale(0.5);
                    transform-origin: left top;
                    border-right:1px solid #ccc;
                }
                h2{
                    font-weight: 400;
                    font-size:1em;
                    padding-left:18px;
                    padding-top:20px;
                }

                ol{
                    margin-top:12px;
                    >li{
                        font-weight: normal;
                        font-size: 16px;
                        a{
                            display: block;
                            padding:10px 0;
                            padding-left:20px;
                            font-size: inherit;
                        }
                        span{
                            color:inherit;
                            font-size: 16px;
                        }
                        span.chinese{
                            font-size: 14px;
                            margin-left:10px;
                            opacity: .67;
                            font-weight: 400;
                        }
                        .router-link-active {
                            background: #d8f1f6;
                            color:$doc-router-color;
                            border-right: 3px solid $doc-router-color;
                        }
                    }
                }
            }

            > main{
                width:auto;
                height:calc(100vh - 66px);
                margin:0 auto;
                padding-top:20px;
                > .doc-content{
                    height: auto;
                    padding:10px 2.67vw 20px 4.8vw;
                    line-height: 1.7em;
                }
            }
            
        }
    }
}
</style>