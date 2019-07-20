<template>
  <div class="demo-block">
    <div class="demo-block-source">
      <slot name="source"></slot>
      <div class="demo-block-code-icon" v-if="!$slots.default" @click="showCode=!showCode">
        <span v-if="!showCode">查看代码</span>
        <span v-else>收起代码</span>
      </div>
    </div>
    <div class="demo-block-meta" v-if="$slots.default">
      <slot></slot>
      <span v-if="$slots.default" class="demo-block-code-icon" @click="showCode=!showCode">
        <span v-if="!showCode">查看代码</span>
        <span v-else>收起代码</span>
      </span>
    </div>
    <transition name="fade">
      <div class="demo-block-code" v-if="showCode">
        <slot name="highlight"></slot>
      </div>
    </transition>
  </div>
</template>

<script type="text/babel">
export default {
  name: "DemoBlock",
  data() {
    return {
      showCode: false
    };
  }
};
</script>
<style lang='less' >
.source {
  padding: 20px;
}
.demo-block-source {
  border: 1px solid #ebedf0;
}
.demo-block {
  border-radius: 2px;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0 0 16px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  // border-radius: 2px;
  box-sizing: border-box;
}
.demo-block-code-icon {
  user-select: none;
  cursor: pointer;
  color: #888888;
  height: 18px;
  font-size: 13px;
  line-height: 18px;
  text-align: right;
  padding-right: 10px;
  padding-bottom: 8px;
}
pre {
  margin: 0;
  border: 1px solid #ccc;
  code {
    border: none !important;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>