<template>
  <div
    class="vcs__option"
    :class="{ 'vcs__option--active': active }"
    @mouseenter="$emit('openMenu', value, options)"
    @click="handleSelection"
  >
    <span>{{label}}</span>
    <arrow
      v-if="!isLeaf"
      direction="right"
    />
  </div>
</template>

<script>
import Arrow from '@/components/arrow.vue';
import { validateOptions } from '@/utils/validators';

export default {
  name: 'Option',
  components: { Arrow },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    label: String,
    onSelect: Function,
    options: {
      type: Array,
      validator: value => validateOptions(value),
    },
    value: {
      type: [String, Number],
    },
    selectable: {
      type: Boolean,
      default: true,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSelection() {
      const { selectable, onSelect, value } = this.$props;
      if (selectable) {
        onSelect(value);
      }
    },
  },
  computed: {
    isLeaf() {
      const { options } = this.$props;
      return (options || []).length === 0;
    },
  },
};
</script>

<style>
.vcs__option {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  transition: background 200ms linear;
}

.vcs__option--active {
  background-color: #eee;
}

.vcs__option span {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 10px;
}

.vcs__option:hover {
  background: #ddd;
}
</style>
