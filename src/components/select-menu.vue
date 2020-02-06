<template>
  <div
    class="vcs__select-menu"
    :class="{ 'vcs__select-menu__not-main': notMain }"
  >
    <Option
      v-for="({ label, options, value }) in options"
      :key="value"
      :label="label"
      :onSelect="onSelect"
      :options="options"
      :value="value"
      @openMenu="handleOpenNextMenu"
    />

    <transition name="vcs__fade">
      <SelectMenu
        v-if="nextMenu.isOpen"
        :notMain="true"
        :onSelect="onSelect"
        :options="nextMenu.options"
      />
    </transition>
  </div>
</template>

<script>
import Option from '@/components/option.vue';
import { validateOptions } from '@/utils/validators';

export default {
  name: 'SelectMenu',
  components: {
    Option,
  },
  props: {
    notMain: {
      type: Boolean,
      default: false,
    },
    onSelect: {
      type: Function,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      validator: value => validateOptions(value),
    },
  },
  data() {
    return {
      nextMenu: {
        isOpen: false,
        options: false,
        label: '',
      },
    };
  },
  methods: {
    handleOpenNextMenu(label, options) {
      if (this.nextMenu.label === label) {
        this.resetNextMenu();
      } else {
        this.nextMenu = {
          isOpen: true,
          options,
          label,
        };
      }
    },
    resetNextMenu() {
      this.nextMenu = {
        isOpen: false,
        options: [],
        label: '',
      };
    },
  },
  watch: {
    options() {
      this.resetNextMenu();
    },
  },
};
</script>

<style>
.vcs__select-menu {
  border-radius: 4px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  padding: 5px 0;
  position: relative;
  text-align: left;
  width: 100%;
  background: white;
}

.vcs__select-menu__not-main {
  position: absolute;
  left: 100%;
  top: -1px;
  margin-top: 0;
}
</style>
