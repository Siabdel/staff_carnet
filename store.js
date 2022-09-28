import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({

    state : {
        users : [],
        isLoadind : false,
        selectedUserId : null,
    },
    
    getters: {
        selectedUser : state => 
            state.users.find(user => user.login.uuid === state.selectedUserId)
    },

    mutations : {
        setUsers(state, {users}){
            state.users = users;
        },

        setSelectedUser(state, id){
            state.selectedUserId = id;
        },
        setIsLoading(state, bool){
            state.isLoadind = bool;
        },
    },

    actions: {
        loadUsers( {commit }){
            //let url = 'http://atlass.fr:93/apipro/directories/'
            let url = 'https://randomuser.me/api/?nat=fr,Fr&results=10&seed=abc'

            commit("setIsLoading", true)
            // fetch 
            return axios
            .get(url)
            .then(res => {
                
                commit("setUsers", { users : res.data.results})

                commit("setIsLoading", false)
                console.log("  users loaded ..." + res.data.results.length)
            })
            .catch(error => {
                console.log("Erreur loading data from " + error)
                commit("setIsLoading", false)
                }
            )
        }
        
    },


})