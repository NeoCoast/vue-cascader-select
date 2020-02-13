<script>
import Vue from 'vue';
import VueCascaderSelect from './vue-cascader-select.vue';
import teams from './utils/teams';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueCascaderSelect,
  },
  data() {
    return {
      value: '',
    };
  },
  computed: {
    getTeams() {
      return teams;
    },
  },
});
</script>

<template>
  <div id="app">
    <div class="container">
      <vue-cascader-select
        :options="getTeams"
        :onSelect="(val) => value = val"
        :value="value"
      />
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px;
  font-size: 12px;
}

.container {
  width: 160px;
}
</style>
