import { createStore } from "vuex";

export default createStore({
    // initial states
    state: {
        name: "salman",
        mainTitle: "No Title",
        mainDescription: "No Description",
        secretKey: "888"
    },
    // mutations to change the state, for synchronous actions
    mutations: {
        // functions to update the state mainTitle
        setNewTitle(state, payload) {
            state.mainTitle = 'Updated Title from mutation + ' + payload;
            // to accept multiple parameters in object,
            state.mainTitle = "Updated Title from mutation + " + payload.title;
        },
    },
    // actions for asynchronous mutations
    actions: {
        // part 2, set time out
        // newTitle(context, payload){
        //     // now from api, setTimeout
        //     setTimeout(() => {
        //         context.commit("setNewTitle", payload);
        //     }, 500);
        // }

        // part 3, promises
        newTitle(context, payload) {
            // now from api, setTimeout
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit("setNewTitle", payload);
                    resolve("setNewTitle", payload);
                }, 500);
            })
        },
    },
    // getters
    getters: {
        hashAdd(state) {
            return state.secretKey + "##"
        }
    }
})