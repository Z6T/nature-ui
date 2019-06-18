<template>
    <div>
        <button
            class="nt-button"
            :disabled="disabled"
            :class="['nt-button'+type,'nt-button'+size,{
            'nt-button-disbled':disabled,
            'nt-button-long':long
        }]"
            @click="handleClick"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: "NtButton",
    props: {
        tag: {
            type: String,
            defaut: 'button',
            required: false
        },
        type: {
            validator(t) {
                return ['default', 'primary', 'warn'].indexOf(t) > -1;
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
<style>
</style>
