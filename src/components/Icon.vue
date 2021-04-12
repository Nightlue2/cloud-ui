<template>
    <svg>
        <use v-bind:xlink:href="'#icon-'+icon"></use>
    </svg>
</template>
<script>
export default {
    props:{
        icon:String
    }
}
</script>