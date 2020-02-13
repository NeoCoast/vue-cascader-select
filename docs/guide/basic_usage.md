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

<VSCBasic />
