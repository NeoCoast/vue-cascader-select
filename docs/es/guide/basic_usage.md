# Uso básico

Veamos el uso más básico del componente:

```vue
<template>
  <vue-cascader-select
    :options="options"
    :onSelect="(val) => value = val"
    :value="value"
  />
</template>
```

Esto renderizara el `cascader-select` con las opciones correspondiente, y dejará que el usuario seleccione cualquiera de ellas!

<VSCBasic
  placeholder="Seleccione una opción..."
/>
