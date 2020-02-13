<template>
  <div class="vcs">
    <div
      class="vsc__picker"
      @click="isOpen = !isOpen"
    >
      <input
        disabled
        :value="value"
        :placeholder="placeholder"
      />

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
        :onSelect="onSelect"
        :options="options"
      />
    </transition>
  </div>
</template>

<script>
import Arrow from './components/arrow.vue';
import SelectMenu from './components/select-menu.vue';
import { validateOptions } from './utils/validators';

export default {
  name: 'VueCascaderSelect',
  components: {
    Arrow,
    SelectMenu,
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
    onSelect: {
      type: Function,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    value() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
.vsc__picker {
  position: relative;
  display: flex;
}

.vsc__picker input {
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 30px 0 10px;
  text-align: center;
  text-align: left;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  width: calc(100% - 20px);
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

.vcs__fade-enter-active, .vcs__fade-leave-active {
  transition: opacity .2s;
}

.vcs__fade-enter, .vcs__fade-leave-to {
  opacity: 0;
}
</style>
