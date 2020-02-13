# Instalación

## npm/yarn

``` bash
npm install --save vue-cascader-select@latest
or
yarn add vue-cascader-select@latest
```

Usted puede registrar el componente de forma global:

``` js
import Vue from 'vue'
import VueCascaderSelect from 'vue-cascader-select';

Vue.use(VueCascaderSelect);
...
```

O utilizarlo solamente en cualquier componente:

```js
import Vue from 'vue'
import VueCascaderSelect from 'vue-cascader-select';

export default {
  name: 'MyComponent',
  components: {
    VueCascaderSelect,
  },
  ...
};
```
