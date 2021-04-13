<template>
    <svg>
        <use v-bind:xlink:href="'#icon-'+icon"></use>
    </svg>
</template>
<script>
let svgSrc = document.createElement('script');
svgSrc.src = '//at.alicdn.com/t/font_2444970_scsft1ykeus.js';
document.body.appendChild(svgSrc);
export default {
    props:{
        icon:String
    }
}
</script>