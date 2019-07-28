<template>
  <div class="nt-switch" :class="activeState?'nt-switch-active':''"  @click="toggle">
    <label for="" class="nt-switch__label">
      <input type="checkbox">
    </label>
  </div>
</template>

<script>
export default {
  name: "nt-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeState: this.value
    };
  },
  methods: {
    toggle() {
      debugger
      this.activeState = !this.activeState;
      this.$emit('input',this.activeState)
      this.$emit('change',this.activeState)
    }
  }
};
</script>
