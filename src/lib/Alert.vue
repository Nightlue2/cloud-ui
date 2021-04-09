<template>
    <div class="cloud-alert-container">
        <div class="cloud-alert-content" :class="{[`cloud-alert-theme-${theme}`]:theme}">
            <div :class="{'cloud-alert-title':title}">{{title}}</div>
            {{descriptions}}
            <div class="cloud-alert-slot"><slot/></div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props:{
        theme:String,
        descriptions:String,
        title:String,
    },
    
}
</script>
<style lang="scss">
$border-rad:2px;
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
        border-radius:$border-rad;
        margin-bottom:7px;
    }
    &-content{
        padding:14px 15px;
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
    &-slot{
        display: block;
    }
}
</style>