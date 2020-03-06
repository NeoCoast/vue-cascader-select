<script>
import Vue from 'vue';
import VueCascaderSelect from './VueCascaderSelect.vue';
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
        @select="(selected) => value = selected.value"
        @clear="() => value = ''"
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
  font-size: 1rem;
}

.container {
  width: 250px;
}
</style>
