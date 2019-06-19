<template>
    <button
        class="nt-button"
        :disabled="isDisabled"
        :class="['nt-button_'+type,'nt-button_'+size,{
            'nt-button_disabled':isDisabled,
            'nt-button_long':long
        }]"
        @click="handleClick"
    >
        <span class="nt-button__icon"></span>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "NtButton",
    data() {
        return {
            isDisabled: !!this.disabled
        }
    },
    props: {
        tag: {
            type: String,
            defaut: 'button',
            required: false
        },
        type: {
            validator(t) {
                return ['default', 'primary', 'danger', 'warn'].indexOf(t) > -1;
            },
            default: 'default',
            required: false
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false
        },
        long: {
            type: Boolean,
            default: false,
            required: false
        },
        size: {
            validator(s) {
                return ['large', 'normal', 'small'].indexOf(s) > -1;
            },
            default: 'normal',
            required: false
        }
    },
    methods: {
        handleClick(e) {
            if (!this.disabled) {
                this.$emit('click', e)
            }
        }
    }
}
</script>
