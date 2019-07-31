<template>
    <div class="nt-message" :class="'nt-message_'+type">
        <i class="iconfont nt-message__icon" :class="iconClass"></i>
        <span class="nt-message__txt">{{content}}</span>
    </div>
</template>

<script>
export default {
    name: 'nt-loading',
    data() {
        return {
            srcurl: ''
        }
    },
    computed: {
        iconClass() {
            return `icon-${this.type}`
        }
    },
    props: {
        type: {
            type: String,
            default: 'success',
            validator: function (val) {
                return ['success', 'warn', 'danger'].indexOf(val) > -1
            }
        },
        duration: Number,
        content: String
    },
    created() {
    },

}
</script>
