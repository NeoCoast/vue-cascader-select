<template>
  <div class="vcs">
    <div
      class="vcs__picker"
      @click="isOpen = !isOpen"
    >
      <input
        disabled
        :value="value"
        :placeholder="placeholder"
      />

      <transition name="vcs__fade">
        <div v-if="value" class="vcs__cross">
          <button @click.stop="onClear">
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
        :onSelect="onSelect"
        :options="options"
      />
    </transition>
  </div>
</template>

<script>
import Arrow from './components/Arrow.vue';
import SelectMenu from './components/SelectMenu.vue';
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
    onClear: {
      type: Function,
      required: true,
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
.vcs {
  position: relative;
}

.vcs__picker {
  position: relative;
  display: flex;
}

.vcs__picker input {
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ccc;
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
  width: calc(100% - 20px);
}

.vcs__arrow-container {
  border-left: 1px solid #ccc;
  cursor: pointer;
  padding-left: 10px;
  margin-left: 10px;
  position: absolute;
  right: 11px;
  top: 42%;
  transform: translate(0, -42%);
}

.vcs__cross {
  position: absolute;
  right: 33px;
  top: 50%;
  transform: translate(0, -50%);
}

.vcs__cross button {
  background: none;
  border: none;
  color: #bbb;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.7;
  outline: none;
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
