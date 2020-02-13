<template>
  <div class="vsc-basic">
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
  name: 'VSCBasic',
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
          options: [
            {
              label: 'Vue',
              value: 'Vue'
            },
            {
              label: 'React',
              value: 'React'
            },
            {
              label: 'Svelte',
              value: 'Svelte'
            },
          ]
        },
        {
          label: 'Backend',
          value: 'Backend',
          options: [
            {
              label: 'Ruby on Rails',
              value: 'Ruby on Rails'
            },
            {
              label: 'NodeJS',
              value: 'NodeJS'
            },
            {
              label: 'Elixir',
              value: 'Elixir'
            },
          ]
        }
      ],
    };
  },
}
</script>

<style>
.vsc-basic {
  width: 200px;
}
</style>
