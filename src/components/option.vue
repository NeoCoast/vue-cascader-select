<template>
  <div
    class="vcs__option"
    @click="handleSelection"
  >
    <span>{{label}}</span>
    <arrow
      v-if="!value"
      direction="right"
    />
  </div>
</template>

<script>
import Arrow from '@/components/arrow.vue';

export default {
  name: 'Option',
  components: {
    Arrow,
  },
  props: [
    'label',
    'onSelect',
    'options',
    'value',
  ],
  methods: {
    handleSelection() {
      const {
        label, onSelect, options, value,
      } = this.$props;
      if (value) {
        onSelect(value);
      } else {
        this.$emit('openMenu', label, options);
      }
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
  padding: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background 200ms linear;
}

.vcs__option span {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vcs__option:hover {
  background: #ddd;
}
</style>
