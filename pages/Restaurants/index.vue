<template>
    <div>
        <h1>
            Restaurants
            <sup>
                <span
                    class="badge badge-info badge-pill"
                    style="font-size:1rem;"
                >{{ restaurants.length }}</span>
            </sup>
        </h1>
        <ol>
            <li v-for="(restaurant, index) in restaurants" :key="restaurant.id">
                <a :href="'restaurants/' + (index)">{{ restaurant.name }}</a>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$axios
            .get("/api/restaurants")
            .then(res => res.data)
            .then(rests => (this.restaurants = rests));
    },

    data() {
        return {
            restaurants: []
        };
    }
};
</script>