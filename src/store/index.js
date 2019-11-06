import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		movieList: [],
		favoriteMovieList: [],
	},

	actions: {
		/**
		 * @desc Load data into movieList
		 * @param VUE_APP_CORS_URL - to resolve a bug with the CORS policy
		 * @param VUE_APP_API_URL
		 * @param VUE_APP_TOKEN
		 */
		loadMovieList ({ commit }) {
			return axios
				.get(`${process.env.VUE_APP_CORS_URL}/${process.env.VUE_APP_API_URL}/top?start=1&end=100&token=${process.env.VUE_APP_TOKEN}&format=json&data=0`)
				.then(({ data: { data: { movies: movieList } } }) => {
					commit('SET_MOVIE_LIST', { movieList });;
					return movieList;
				})
				.catch(err => { throw err });
		},
		/**
		 * @desc Set data into favoriteMovieList
		 * @param favoriteMovieList
		 */
		setFavoriteMovieList ({ state, commit }, { favoriteMovieList }) {
			return Promise.resolve()
				.then(() => {
					commit('SET_FAVORITE_MOVIE', { favoriteMovieList });
				})
				.catch(err => { throw err });
		},
	},
	mutations: {
		SET_MOVIE_LIST (state, { movieList }) {
			state.movieList = movieList;
		},
		SET_FAVORITE_MOVIE (state, { favoriteMovieList }) {
			state.favoriteMovieList = favoriteMovieList;
		},
	},
	getters: {
		movieList: state => state.movieList,
		favoriteMovieList: state => state.favoriteMovieList,
		favoriteMovieListLength: state => state.favoriteMovieList.length,
	}
})
