<template>
    <v-container fluid>
        <MovieList />
    </v-container>
</template>
<script>
export default {
    name: 'Home',
    components: {
        MovieList: () => import('@/components/MovieList.vue'),
    },
}
</script>
