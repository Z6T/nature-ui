<template>
  <div>
    <nt-switch v-model="switchActive"></nt-switch>
    <p>{{switchActive}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchActive: true
    };
  },
  methods: {
    handleSwitchChange(val) {
      console.log(val);
    }
  }
};
</script>
