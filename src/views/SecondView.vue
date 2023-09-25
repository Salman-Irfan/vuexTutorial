<template>
    <h1>Second View</h1>
    <h4>{{ privateKey }}</h4>
    <h6>{{ $store.state.mainDescription }}</h6>
    <!-- change the main title that is called on its parent component -->
    <button @click="newTitle" class="btn">Change Title</button>
</template>

<script>
    export default {
        name: "Second Page",
        computed: {
            privateKey(){
                return this.$store.getters.hashAdd;
            }
        },
        methods: {
            newTitle(){
                // or simple
                // this.$store.state.mainDescription = "change description to parameter payload simply"
                
                // to commit changes
                // this.$store.commit('setNewTitle', "change title to parameter payload");
                
                // to pass the multiple parameters, we use object
                // this.$store.commit('setNewTitle', {
                //     title: "change title to parameter payload in object form",
                //     description: "change description to parameter payload",
                // });
                
                // another way is to pass commit in the form of object
                // this.$store.commit({
                //     type: 'setNewTitle',
                //     title: "change title to parameter payload in commit object form",
                // })

                // ########################################################
                // by calling action method
                // this.$store.dispatch({
                //     type: 'newTitle',
                //     title: "title updated through actions",
                // })

                // #################################################################
                // returning promise
                // this.$store.dispatch({
                //     type: 'newTitle',
                //     title: "title updated through actions using promises",
                // }).then((response) => {
                //     console.log(`called`, response)
                // },)
                
                // promises part 2
                this.$store.dispatch({
                    type: 'newTitle',
                    title: "title updated through actions using promises",
                }).then((response) => {
                    console.log(`called`, response)
                },)
            }
        }
    }
</script>

<style scoped>
.btn{
    background-color: rgb(39, 39, 247);
}
</style>