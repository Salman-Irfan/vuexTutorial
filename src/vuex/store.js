import { createStore } from "vuex";

export default createStore ({
    // initial states
    state: {
        name: "salman",
        mainTitle: "No Title",
        mainDescription: "No Description",
    },
    // mutations to change the state
    mutations: {
        // functions to update the state mainTitle
        setNewTitle (state, payload) {
            state.mainTitle = 'Updated Title from mutation + ' + payload;
            // to accept multiple parameters in object,
            state.mainTitle = "Updated Title from mutation + " + payload.title;
        },
    }
})