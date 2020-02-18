<template>
  <i
    class="vcs__arrow"
    :class="direction"
    :style="{ borderColor }"
  />
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    borderColor: String,
    direction: {
      type: String,
      validator: value => ['up', 'down', 'right'].includes(value),
    },
  },
};
</script>

<style>
.vcs__arrow {
  border-radius: 1px;
  border: solid #ccc;
  border-width: 0 3px 3px 0;
  cursor: pointer;
  display: inline-block;
  padding: 3px;
  transition: 150ms all linear;
  transform-origin: 50% 50%;
  font-size: 12px;
}

.vcs__arrow.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  margin-bottom: -2px;
}

.vcs__arrow.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-bottom: 1px;
}

.vcs__arrow.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
</style>
