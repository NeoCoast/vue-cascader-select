<template>
  <div
    class="vcs__select-menu"
    :class="{ 'vcs__select-menu__not-main': notMain }"
  >
    <Option
      v-for="({ label, options, value }) in options"
      :active="value === nextMenu.value"
      :key="value"
      :label="label"
      :onSelect="onSelect"
      :options="options"
      :value="value"
      @openMenu="handleOpenNextMenu"
    />

    <transition name="vcs__fade">
      <SelectMenu
        ref="childMenu"
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
  components: { Option },
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
        value: '',
      },
    };
  },
  methods: {
    handleOpenNextMenu(value, options) {
      if (options && this.nextMenu.value !== value) {
        this.nextMenu = {
          isOpen: true,
          options,
          value,
        };
      } else if (!options) {
        this.resetNextMenu();
      }

      if (this.$refs.childMenu) {
        this.$refs.childMenu.resetNextMenu();
      }
    },
    resetNextMenu() {
      this.nextMenu = {
        isOpen: false,
        options: [],
        value: '',
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
  left: calc(100% - 1px);
  top: -1px;
  margin-top: 0;
  width: auto;
}
</style>
