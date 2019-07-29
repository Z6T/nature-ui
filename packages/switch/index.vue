<template>
    <div class="nt-switch" :class="activeState?'nt-switch-active':''" @click="toggle">
        <label for class="nt-switch__label" :style="labelStyl">
            <input type="checkbox" />
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
        },
        activeBgc: String,
        inactiveBgc: String,
    },
    data() {
        return {
            activeState: this.value
        };
    },
    computed: {
        labelStyl() {
            return this.activeState ? { backgroundColor: this.activeBgc } : { backgroundColor: this.inactiveBgc }
        }
    },
    methods: {
        toggle() {
            this.activeState = !this.activeState;
            this.$emit('input', this.activeState)
            this.$emit('change', this.activeState)
        }
    }
};
</script>
