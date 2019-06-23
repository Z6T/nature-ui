<template>
  <div class="nt-checkbox" @click="handleClick">
    <input
      type="checkbox"
      name
      :class="[isChecked?'nt-checkbox_checked':'nt-checkbox_unchecked','iconfont','nt-checkbox__icon']"
      @change="handleChange"
    >
    <span class="nt-checkbox__txt" :class="isChecked?'nt-checkbox__txt_isChecked':''">
      <slot/>
    </span>
  </div>
</template>

<script>
import findParentMixin from "../mixins/findParent";
import { log } from "util";

export default {
  name: "nt-checkbox",
  mixins: [findParentMixin],
  data() {
    return {
      isChecked: false
    };
  },
  props: {
    value: [Boolean, String],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isGroup() {
      return this.findParent("nt-checkbox-list");
    },
    curValue() {
      return this.value;
    },
    groupValue() {
      if (this.isGroup) {
        return this.$parent.value;
      }
      return "";
    },
    shouldChecked: {
      get() {},
      set(val) {
        console.log(this);
        this.isChecked = val;
      }
    }
  },
  methods: {
    initCheck() {
      if (this.isGroup) {
        this.isChecked = this.groupValue.indexOf(this.curValue) > -1;
      } else if (typeof this.curValue !== "boolean") {
        throw new Error("单个checkbox要求v-model绑定Boolean");
      }else{
        this.isChecked = this.curValue;
      }
    },
    handleClick() {
      this.isChecked = !this.isChecked;
      let isG = this.isGroup;
      let gVal = this.groupValue;
      let cVal = this.curValue;
      if (isG) {
        let gValue = gVal;
        if (this.isChecked) {
          gVal.push(cVal);
        } else {
          let index = gVal.indexOf(cVal)
          gVal.splice(index,1);
        }
        this.$parent.$emit("input", gVal);
      } else {
        this.$emit("input", this.isChecked);
      }
    },
    handleChange() {
      //  alert(888)
    }
  },
  created() {
    this.initCheck();
    console.log(this.groupValue);
    
  }
};
</script>

<style>
</style>
