<template>
  <div
    class="vcs__select-menu"
    :class="{ 'vcs__select-menu__not-main': notMain }"
  >
    <Option
      v-for="(option, index) in options"
      ref="options"
      :active="option.value === nextMenu.value"
      :disabled="option.disabled"
      :focused="index === selectedOption"
      :index="index"
      :key="option.value"
      :label="option.label"
      :onSelect="onSelect"
      :options="option.options"
      :selectable="option.selectable"
      :value="option.value"
      @openMenu="handleOpenNextMenu"
      @closeMenu="handleCloseMenu"
      @nextOption="moveOption(true)"
      @prevOption="moveOption(false)"
    />

    <transition name="vcs__fade">
      <SelectMenu
        ref="childMenu"
        v-if="nextMenu.isOpen"
        :notMain="true"
        :onSelect="onSelect"
        :options="nextMenu.options"
        :withKeyboard="nextMenu.withKeyboard"
      />
    </transition>
  </div>
</template>

<script>
import Option from './Option.vue';
import { validateOptions } from '../utils/validators';

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
      default: () => [],
      validator: value => validateOptions(value),
    },
    withKeyboard: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const { options, withKeyboard } = this.$props;

    return {
      nextMenu: {
        isOpen: false,
        options: false,
        value: '',
        withKeyboard: false,
      },
      selectedOption: withKeyboard ? 0 : null,
      optionsLength: options.length,
    };
  },
  mounted() {
    if (this.$props.withKeyboard) {
      this.$refs.options[0].$el.focus();
    }
  },
  methods: {
    handleOpenNextMenu(value, options, index, withKeyboard = false) {
      this.selectedOption = index;
      this.$refs.options[index].$el.focus();

      if (options && this.nextMenu.value !== value) {
        this.nextMenu = {
          isOpen: true,
          options,
          value,
          withKeyboard,
        };
      }

      if (options && this.$refs.childMenu) {
        this.$refs.childMenu.resetNextMenu();
      }

      if (!options) {
        this.resetNextMenu();
      }
    },
    handleCloseMenu() {
      if (this.$parent && this.$parent.resetNextMenu) {
        this.$parent.resetNextMenu();
      }
    },
    resetNextMenu() {
      this.nextMenu = {
        isOpen: false,
        options: [],
        value: '',
      };

      this.$nextTick(() => {
        if (this.selectedOption >= 0 && this.$refs.options[this.selectedOption]) {
          this.$refs.options[this.selectedOption].$el.focus();
        }
      });
    },
    moveOption(increment = false) {
      const { selectedOption, optionsLength } = this;

      let newSelectedOption = increment ? selectedOption + 1 : selectedOption - 1;
      newSelectedOption = newSelectedOption >= 0 ? newSelectedOption : optionsLength - 1;
      newSelectedOption %= optionsLength;

      this.selectedOption = newSelectedOption;
      this.$refs.options[newSelectedOption].$el.focus();
    },
  },
  watch: {
    options() {
      this.resetNextMenu();

      if (!this.$props.withKeyboard) {
        this.selectedOption = null;
      }
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

  position: absolute;
  left: 0;
  top: calc(100% + 2px);
  margin-top: 0;
}

.vcs__select-menu__not-main {
  position: absolute;
  left: calc(100% - 1px);
  top: -1px;
  margin-top: 0;
  width: auto;
}
</style>
