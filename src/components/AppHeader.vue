<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
            absolute
            temporary
        >
            <v-list dense>
                <v-list-item
                    link
                    to="/"
                >
                    <v-list-item-content>
                        <v-list-item-title>Главная</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    link
                    to="/favorite"
                >
                    <v-list-item-content>
                        <v-list-item-title>Избранное</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            color="indigo"
            dark
            height="80"
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up"
            />
            <v-toolbar-title>
                <router-link
                    tag="span"
                    to="/"
                    style="cursor: pointer;"
                >Фильмы</router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down mr-4">
                <v-badge
                    color="orange"
                    overlap
                    class="align-self-center"
                >
                    <template v-slot:badge>
                        <span> {{favoriteMovieListLength}} </span>
                    </template>
                    <v-btn
                        icon
                        to="/favorite"
                    >
                        <v-icon large>mdi-heart</v-icon>
                    </v-btn>
                </v-badge>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'AppHeader',
    data: () => ({
        drawer: null,
    }),
    computed: {
        ...mapGetters({
            favoriteMovieListLength: 'favoriteMovieListLength',
        }),
    },
};
</script>
