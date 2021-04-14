<template>
    <div class="cloud-alert-container">
        <div class="cloud-alert-icon-container" :class="{['cloud-alert-icon-container-small']:!title}" v-if="showIcon">
            <Icon :icon="theme" class="cloud-alert-icon" :class="{[`cloud-alert-icon-${theme}`]:showIcon && theme}"/>
        </div>
        <div class="cloud-alert-content" :class="{[`cloud-alert-theme-${theme}`]:theme}">
            <div :class="{'cloud-alert-title':title}">{{title}}</div>
            {{descriptions}}
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
import Icon from '../components/Icon.vue';
export default {
    props:{
        theme:String,
        descriptions:String,
        title:String,
        showIcon:Boolean
    },
    components:{
        Icon
    }
}
</script>
<style lang="scss">
$border-rad:4px;
$success-color:#e1fccb;
$success-border:#7bf21a;
$info-color:#d2f9fb;
$info-border:#13d9e7;
$warning-color:#fef1c6;
$warning-border:#f8c823;
$error-color:#fff2f0;
$error-border:#ffa092;
.cloud-alert{
    &-container{
        margin-bottom:7px;
        overflow: hidden;
        position:relative;
    }
    &-content{
        border-radius:$border-rad;
        padding:12px 15px;
        font-size: 14px;
        white-space: wrap;
        overflow-wrap:break-word;
    }
    &-theme{
        &-success{
            background-color:$success-color;
            border:1px solid $success-border;
        }
        &-info{
            background-color: $info-color;
            border:1px solid $info-border;
        }
        &-warning{
            background-color: $warning-color;
            border:1px solid $warning-border;
        }
        &-error{
            background-color:$error-color;
            border:1px solid $error-border;
        }
    }
    &-title{
        font-size:16px;
        margin-bottom:10px;
    }
    &-icon{
        width:1em;
        height:1em;
        font-size: 1em;
        overflow: hidden;
        &-success{
            fill:$success-border;
        }
        &-info{
            fill:$info-border;
        }
        &-warning{
            fill:$warning-border;
        }
        &-error{
            fill:$error-border;
        }
    }
}
.cloud-alert-icon-container{
    position:absolute;
    left: 0;
    top:50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:16px;
    font-size:28px;
    &+.cloud-alert-content{
        padding-left:60px;
    }
    &-small{
        font-size:20px;
        margin-left:12px;
        &+.cloud-alert-content{
            padding-left:40px;
        }
    }
}
</style>