<template>
    <v-data-iterator
        :items="favorite ? favoriteMovieList : movieList"
        :items-per-page="100"
        :page="1"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
    >
        <template v-slot:header>
            <v-toolbar
                dark
                color="blue darken-3"
                class="mb-4"
                style="border-radius:15px; padding:0 15px;"
            >
                <v-toolbar-title>{{favorite ? 'Избранное' : 'TOP-100' }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn-toggle
                    v-model="sortDesc"
                    mandatory
                >
                    <v-btn
                        depressed
                        color="blue"
                        :value="false"
                    >
                        <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn
                        depressed
                        color="blue"
                        :value="true"
                    >
                        <v-icon>mdi-arrow-down</v-icon>
                    </v-btn>
                </v-btn-toggle>
            </v-toolbar>
        </template>

        <template v-slot:default="props">
            <v-item-group
                v-model="selectedFavoriteMovies"
                multiple
            >
                <v-row>
                    <v-col
                        v-for="movie in props.items"
                        :key="movie.idIMDB"
                        cols="12"
                        sm="6"
                        md="4"
                        lg="3"
                    >
                        <v-item
                            v-slot:default="{ active, toggle }"
                            :value="movie"
                        >
                            <v-badge
                                overlap
                                class="badge"
                                color="orange"
                            >
                                <div
                                    slot="badge"
                                    style="margin: 15px auto;"
                                >
                                    {{movie.ranking}}
                                </div>
                                <v-card
                                    max-width="250"
                                    class="mx-auto"
                                >
                                    <v-container class="pa-1">
                                        <v-img
                                            :src="movie.urlPoster"
                                            height="370"
                                            class="white--text align-end"
                                        >
                                            <v-card-title v-text="movie.title"></v-card-title>
                                        </v-img>
                                        <v-card-actions>
                                            <v-rating
                                                :value="movie.rating / 2"
                                                background-color="orange lighten-3"
                                                color="orange"
                                                small
                                                half-increments
                                            ></v-rating>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                icon
                                                @click="toggle"
                                            >
                                                <v-icon style="color:red;">
                                                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                                                </v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-container>
                                </v-card>
                                <v-snackbar
                                    v-if="!favorite"
                                    v-model="active"
                                    color="success"
                                    :timeout="2000"
                                    :top="true"
                                    style="text-align:center"
                                >
                                    {{movie.title}} добавлено в Избранное
                                </v-snackbar>
                            </v-badge>
                        </v-item>
                    </v-col>
                </v-row>
            </v-item-group>
        </template>
    </v-data-iterator>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'MovieList',
    props: {
        favorite: {
            type: Boolean,
            default: false
        },
    },
    data () {
        return {
            sortDesc: false,
            sortBy: 'ranking',
        }
    },
    computed: {
        ...mapGetters({
            movieList: 'movieList',
            favoriteMovieList: 'favoriteMovieList',
        }),
        selectedFavoriteMovies: {
            get () {
                return this.favoriteMovieList
            },
            set (value) {
                this.setFavoriteMovieList({ favoriteMovieList: value })
            }
        },
    },
    methods: {
        ...mapActions({
            loadMovieList: 'loadMovieList',
            setFavoriteMovieList: 'setFavoriteMovieList',
        })
    },

}
</script>
<style lang="scss">
.badge {
    width: 250px;
    .v-badge__badge {
        width: 60px;
        height: 60px;
        font-size: 21px;
        display: block;
    }
}
</style>>
