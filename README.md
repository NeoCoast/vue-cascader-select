<p align="center">
  <a href="https://github.com/NeoCoast/vue-cascader-select" target="_blank">
    <img width="250"src="./public/logo.svg">
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-cascader-select">
    <img src="https://img.shields.io/npm/v/vue-cascader-select.svg"/>
    <img src="https://img.shields.io/npm/dm/vue-cascader-select.svg"/>
  </a>
  <a href="https://vuejs.org/">
    <img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg"/>
  </a>
  <a href="https://travis-ci.org/NeoCoast/vue-cascader-select">
    <img src="https://img.shields.io/travis/NeoCoast/vue-cascader-select/master.svg?logo=travis"/>
  </a>
  <a href="https://codecov.io/gh/NeoCoast/vue-cascader-select">
    <img src="https://codecov.io/gh/NeoCoast/vue-cascader-select/branch/master/graph/badge.svg"/>
  </a>
</p>

# Vue Cascader Select

## Installation

```bash
npm install --save vue-cascader-select@latest
or
yarn add vue-cascader-select@latest
```

## Usage

```js
import Vue from 'vue'
import VueCascaderSelect from 'vue-cascader-select';

Vue.use(VueCascaderSelect);
```

```
<template>
  <vue-cascader-select
    :options="options"
    :onSelect="(val) => value = val"
    :value="value"
  />
</template>
```

For more information see the [complete docs](https://NeoCoast.github.io/vue-cascader-select/)

<div>
  Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
</div>