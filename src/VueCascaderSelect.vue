<template>
  <div
    class="vcs"
    v-click-outside="handleClose"
    @keydown.esc="handleClose"
  >
    <div
      class="vcs__picker"
      @click="() => handleOpen(false)"
      @keypress.enter="() => handleOpen(true)"
      tabindex="0"
    >
      <input
        disabled
        :value="value"
        :placeholder="placeholder"
      />

      <transition name="vcs__fade">
        <div v-if="value" class="vcs__cross">
          <button @click.stop="$emit('clear')">
            &times;
          </button>
        </div>
      </transition>

      <div class="vcs__arrow-container">
        <Arrow
          borderColor="#ccc"
          :direction="isOpen ? 'up' : 'down'"
        />
      </div>
    </div>

    <transition name="vcs__fade">
      <SelectMenu
        v-if="isOpen"
        :onSelect="handleSelect"
        :options="options"
        :withKeyboard="withKeyboard"
      />
    </transition>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';
import Arrow from './components/Arrow.vue';
import SelectMenu from './components/SelectMenu.vue';
import { validateOptions } from './utils/validators';

export default {
  name: 'VueCascaderSelect',
  components: {
    Arrow,
    SelectMenu,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    placeholder: {
      type: String,
      default: 'Please select...',
    },
    options: {
      type: Array,
      required: true,
      validator: value => validateOptions(value),
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      withKeyboard: false,
    };
  },
  methods: {
    handleSelect(option) {
      this.$emit('select', option);
    },
    handleOpen(withKeyboard = false) {
      this.isOpen = !this.isOpen;
      this.withKeyboard = withKeyboard;
    },
    handleClose() {
      this.isOpen = false;
    },
  },
  watch: {
    value() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
button {
  padding: 0;
  background: none;
  border: none;
  text-align: left;
  font-size: unset;
}

.vcs {
  position: relative;
}

.vcs__picker {
  position: relative;
  display: flex;
  width: 100%;
}

.vcs__picker input {
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: inherit;
  height: 30px;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 55px 0 10px;
  text-align: center;
  text-align: left;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  -webkit-appearance: none;
}

.vcs__picker input:disabled {
  background: inherit;
  opacity: 1;
}

.vcs__arrow-container {
  border-left: 1px solid #ccc;
  cursor: pointer;
  padding-left: 10px;
  margin-left: 10px;
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translate(0, -50%);
}

.vcs__cross {
  position: absolute;
  right: 33px;
  top: 50%;
  transform: translate(0, -50%);
}

.vcs__cross button {
  -webkit-appearance: none;
  background: none;
  border: none;
  color: #bbb;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.7;
  padding: 0 3px;
  transition: opacity 0.2s linear;
}

.vcs__cross button:hover {
  opacity: 1;
}

.vcs__fade-enter-active, .vcs__fade-leave-active {
  transition: opacity .2s;
}

.vcs__fade-enter, .vcs__fade-leave-to {
  opacity: 0;
}
</style>
