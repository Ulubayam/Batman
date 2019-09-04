import Vue from "vue";
import Vuex from "vuex";
import tvmazeApi from "./services/tvmazeApi";
export const namespaced = true;
Vue.use(Vuex);

export default new Vuex.Store({
    state: { tvShows: null, tvShow: null },
    mutations: {
        SET_TVSHOWS(state, tvShows) {
            state.tvShows = tvShows.data;
        },
        SET_TVSHOW(state, tvShow) {
            state.tvShow = tvShow.data;
        }
    },

    actions: {
        getTvShows({ commit }) {
            return new Promise((resolve, reject) => {
                tvmazeApi
                    .getTvShows()
                    .then(response => {
                        commit("SET_TVSHOWS", response);

                        resolve(response.data);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
        getTvShow({ commit }, id) {
            return new Promise((resolve, reject) => {
                tvmazeApi
                    .getTvShow(id)
                    .then(response => {
                        commit("SET_TVSHOW", response.data);

                        resolve(response.data);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        }
    }
});