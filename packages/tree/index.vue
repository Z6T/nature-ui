<template >
  <div class="nt-tree">
    {{treeData}}
    <div class="nt-tree__div">
      <NodeTreeNode :data="data" ref="childNodeWrapper" />
    </div>
  </div>
</template>

<script>
import NodeTreeNode from "./tree-node";

export default {
  name: "nt-tree",
  provide() {
    return {
      fatherTree: this
    };
  },
  props: {
    data: Array
  },
  data() {
    return {
      treeData: [],
      checkeArr: []
    };
  },
  components: { NodeTreeNode },
  computed() {},
  methods: {
    clickLeaf(item) {
      this.$emit("node-click", item);
    },
    // 摊平数组，以及数组中子元素的children的数组
    getFlatChild(childs) {
      if (!Array.isArray(childs)) return [];
      const arrres = [];
      const fun = arr => {
        for (let index = 0; index < arr.length; index++) {
          const ele = arr[index];
          arrres.push(ele);
          if (ele.children && Array.isArray(ele.children)) {
            fun(ele.children);
          }
        }
      };
      fun(childs);
      return arrres;
    },
    // 参数是一个数组，判断下边的所有元素是否全选 type就是truefalse
    isEveryChildChecked(childArr, type) {
      if (!Array.isArray(childArr) || !childArr.length) return false;
      return childArr.every(c => c.checked && c.checked === type);
    },
    // 子元素有一个被选中就返回true
    isSomeChildChecked(childArr) {
      if (!Array.isArray(childArr) || !childArr.length) return false;
      return childArr.some(c => c.checked === true);
    },
    // 如果没有checked属性，加上reactive（响应式）的属性
    setCheckProp(data) {
      const func = arr => {
        if (Array.isArray(arr)) {
          for (let i = 0; i < arr.length; i++) {
            const ele = arr[i];
            const childs = this.getFlatChild(ele.children);
            // 动态为所有节点设置checked属性
            debugger
            if (ele.checked && ele.checked === true) {
              // 当前节点以及字节点全是checked
               this.$set(ele, "every", true);
                this.$set(ele, "some", false);
                this.$set(ele, "noevery", false);
              childs.forEach(child => {
                this.$set(child, "checked", true);
                this.$set(child, "every", true);
                this.$set(child, "some", false);
                this.$set(child, "noevery", false);
              });
            } else {
              this.$set(ele, "checked", false);
              const every = this.isEveryChildChecked(childs, true); // 是否全选
              const some = this.isSomeChildChecked(childs);
              if (every === true) {
                this.$set(ele, "every", true);
                this.$set(ele, "some", false);
                this.$set(ele, "noevery", false);
              }
              // 有一些被选中
              if (every === false && some === true) {
                this.$set(ele, "some", true);
                this.$set(ele, "every", false);
                this.$set(ele, "noevery", false);
              }
              // 全不选
              if (every === false && some === false) {
                this.$set(ele, "noevery", true);
                this.$set(ele, "every", false);
                this.$set(ele, "some", false);
              }
            }
            func(ele.children);
          }
        }
        return arr;
      };
      this.treeData = func(func(data))
    }
  },
  watch: {
    data: {
      handler(val) {
        this.setCheckProp(val);
      },
      deep: true,
      immediate: true
    },
    treeData: {
      handler(val) {
        console.log("Newval :", val);
        this.setCheckProp(val);
        console.log(999);
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.setCheckProp(this.data);
  }
};
</script>

<style>
</style>
