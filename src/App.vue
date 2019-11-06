<template>
    <v-app id="inspire">
        <AppHeader />
        <v-content>
            <v-container fluid>
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col class="text-center">
                        <router-view />
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <v-footer
            color="indigo"
            app
        >
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Layout',
    components: {
        AppHeader: () => import('@/components/AppHeader.vue'),
    },
    methods: {
        ...mapActions({
            loadMovieList: 'loadMovieList',
        })
    },
    created () {
        this.loadMovieList()
    }
};
</script>
