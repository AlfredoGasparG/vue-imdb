<template>
  <div id="app" class="container">
    

    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>

import Home from './components/Home.vue';
import Menu from './components/Menu.vue';

export default {
  name: 'app',
  data () {
    return {
     
    }
  },

  components: {
    'app-home': Home,
    'app-menu': Menu
  }

}
</script>

<style>

</style>
