<template>
    <h1>{{ restaurant.name }}</h1>
</template>

<script>
export default {
    mounted() {
        let id = this.$route.params.id;

        this.$axios(`/api/restaurants/${id}`)
            .then(res => res.data)
            .then(rest => (this.restaurant = rest));
    },

    data() {
        return {
            restaurant: {}
        };
    }
};
</script>