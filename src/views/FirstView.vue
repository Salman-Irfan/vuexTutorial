<template>
    <h1>First View</h1>
    <h2>{{ $store.state.mainTitle }}</h2>
    <!-- call second component -->
    <SecondView/>
</template>

<script>
import SecondView from './SecondView.vue';
export default {
    name: "FirstView",
    components: {
        SecondView
    }
}
</script>