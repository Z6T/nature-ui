<template>
    <div
        class="nt-dialog"
        :class="showMask?'nt-dialog_mask':''"
        v-if="dialogShow"
        :style="{height:height+'px',width:width+'px'}"
    >
        <div class="nt-dialog__content">
            <div class="nt-dialog__content__header" v-if="showHeader">{{title}}</div>
            <div class="nt-dialog__content__body" v-html="body">
                <!-- <slot></slot> -->
            </div>
            <div class="nt-dialog__content__footer">
                <button
                    class="nt-dialog__content__footer__concel"
                    v-if="!justOkBtn"
                    @click="concelEv"
                >{{concelTxt}}</button>
                <button
                    class="nt-dialog__content__footer__confirm"
                    @click="confirmEv"
                >{{confirmTxt}}</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'nt-dialog',
    data() {
        return {
            dialogShow: true
        }
    },
    props: {
        height: Number,
        width: Number,
        showMask: {
            type: Boolean,
            default: false
        },
        justOkBtn: {
            type: Boolean,
            default: false
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: '提示'
        },
        body: {
            type: String,
            default: '唱、跳、rap、篮球、music'
        },
        confirmTxt: {
            type: String,
            default: '确定'
        },
        concelTxt: {
            type: String,
            default: '取消'
        },
        confirm: {
            type: Function
        },
        concel: {
            type: Function
        }
    },
    methods: {
        concelEv(e) {
            if (this.concel) return this.concel();
            this.dialogShow = false;
        },
        confirmEv(e) {
            if (this.confirm) {
                this.confirm()
            } else if (this.justOkBtn) {
                this.concel()
            }
        },
        dialogClose() {
            this.dialogShow = false;
        }
    },
}
</script>

