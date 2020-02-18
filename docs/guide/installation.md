# Installation

## npm/yarn

``` bash
npm install --save vue-cascader-select@latest
or
yarn add vue-cascader-select@latest
```

You can either register the component globally:

``` js
import Vue from 'vue';
import VueCascaderSelect from 'vue-cascader-select';

Vue.use(VueCascaderSelect);
...
```

Or use it inside any given component:

```js
import Vue from 'vue';
import VueCascaderSelect from 'vue-cascader-select';

export default {
  name: 'MyComponent',
  components: {
    VueCascaderSelect,
  },
  ...
};
```
