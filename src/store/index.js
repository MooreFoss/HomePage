import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        repos: []
    },
    mutations: {
        setRepos(state, repos) {
            state.repos = repos;
        }
    },
    actions: {
        async fetchRepos({ commit }) {
            try {
                const response = await axios.get('https://api.botium.cn/github/users/MooreFoss/repos?per_page=100');
                commit('setRepos', response.data);
            } catch (error) {
                console.error('Error fetching repos:', error);
            }
        }
    },
    getters: {
        filteredRepos: state => {
            return state.repos.filter(repo => !repo.fork);
        }
    }
});