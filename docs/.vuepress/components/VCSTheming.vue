<template>
  <div class="vcs-theming">
    <VueCascaderSelect
      @select="(selected) => value = selected.value"
      @clear="(val) => value = ''"
      :options="options"
      :placeholder="placeholder"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: 'VCSBasic',
  props: {
    placeholder: String,
  },
  data() {
    return {
      value: '',
      options: [
        {
          label: 'Frontend',
          value: 'Frontend',
          disabled: true,
          options: [
            { label: 'Vue', value: 'Vue' },
            { label: 'React', value: 'React' },
            { label: 'Svelte', value: 'Svelte' },
          ],
        },
        {
          label: 'Backend',
          value: 'Backend',
          disabled: true,
          options: [
            { label: 'Ruby on Rails', value: 'Ruby on Rails' },
            { label: 'NodeJS', value: 'NodeJS' },
            { label: 'Elixir', value: 'Elixir' },
          ],
        },
      ],
    };
  },
}
</script>

<style>
.vcs-theming {
  width: 250px;
  margin-top: 30px;
}

.vcs-theming .vcs__picker input,
.vcs-theming .vcs__select-menu {
  background: #282b34;
  color: white;
  border-color: #282b34;
}

.vcs-theming .vcs__picker input::placeholder {
  color: #bbb;
}

.vcs-theming .vcs__option--active {
  background: #41444e;
}

.vcs-theming .vcs__option:hover {
  background: #474b56;
}
</style>
