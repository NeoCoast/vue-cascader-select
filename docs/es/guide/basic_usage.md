# Uso básico

Veamos el uso más básico del componente:

```vue
<template>
  <vue-cascader-select
    :options="options"
    @clear="(val) => value = ''"
    @select="(val) => value = val"
    :value="value"
  />
</template>
```

¡Esto renderizará el `cascader-select` con las opciones correspondientes, y dejará que el usuario seleccione cualquiera de ellas!

<VCSBasic
  placeholder="Seleccione una opción..."
/>

## Props

| Nombre      | Tipo     | Requerido | Valor por defecto  |
|-------------|----------|:---------:|--------------------|
| options     | Array    | ✅        |                    |
| placeholder | String   |           | 'Please select...' |
| value       | String   | ✅        |                    |

### options

Opciones que mostrará el `cascader-select`. Esta prop es un arreglo de objetos, en los cuales las claves `label` y `value` son requeridas, mientras que `options`, `selectable` y `disabled` son opcionales.

Veamos un ejemplo:

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

## Events

| Nombre      | Parámetros     | Cuándo?                                 |
|-------------|----------------|:---------------------------------------:|
| clear       |                | Al clickear en el ícono de la cruz      |
| select      | value          | Al seleccionar una opción               |
