# Basic usage

Let's see the most basic usage of the component:

```vue
<template>
  <vue-cascader-select
    :options="options"
    :onSelect="(val) => value = val"
    :value="value"
  />
</template>
```

This will render the `cascader-select` with the given options, and allow the user to select any of them!

<VCSBasic />

## Props

| Name        | Type     | Required | Default value      |
|-------------|----------|:--------:|--------------------|
| options     | Array    | ✅       |                    |
| onSelect    | Function | ✅       |                    |
| placeholder | String   |          | 'Please select...' |
| value       | String   | ✅       |                    |

### options

Options passed down to the `cascader-select`. This prop is an array of objects. In each object the `label` and `value` keys are required while `options`, `selectable` and `disabled` keys are optional.

Let's see an example:

```js
[
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
];
```