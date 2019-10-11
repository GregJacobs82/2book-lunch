<template>
    <span class="logo-2book-lunch">
        <img :style="widthSize" src="https://cdn.massagebook.com/218/static/img/icon-green.svg" />
    </span>
</template>

<script>
export default {
    props: {
        width: {
            type: String / Number,
            default: 24
        }
    },
    computed: {
        widthSize() {
            return "width: " + this.width.toString() + "px";
        }
    }
};
</script>

<style>
</style>
