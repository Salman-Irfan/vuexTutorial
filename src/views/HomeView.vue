<template>
  <h1>Vuex Tutorial</h1>
  <p>{{ $store.state.name }}</p>
  <FirstView/>
</template>

<script>
import FirstView from './FirstView.vue';
export default {
  name: "HomeView",
  components: {
    FirstView
  }
}
</script>
