<template>
  <div class="vcs-basic">
    <VueCascaderSelect
      :onSelect="(val) => value = val"
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
.vcs-basic {
  width: 250px;
}
</style>
