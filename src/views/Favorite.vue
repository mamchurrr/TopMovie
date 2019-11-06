<template>
    <v-container fluid>
        <MovieList
            v-if="!!favoriteMovieListLength"
            favorite
        />
        <div
            v-else
            class="my-2"
        >
            <h2 class="mb-4">Вы еще не добавили фильмы в Избранное</h2>
            <v-btn
                x-large
                color="success"
                dark
                to="/"
            >Добавить новые</v-btn>
        </div>
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: 'Favorite',
    components: {
        MovieList: () => import('@/components/MovieList.vue'),
    },
    computed: {
        ...mapGetters({
            favoriteMovieListLength: 'favoriteMovieListLength',
        }),
    },
}
</script>
