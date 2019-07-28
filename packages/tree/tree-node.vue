<template>
  <ul v-if="data&&data.length" v-show="state_co==='open'||vLeval.length===3">
    <li
      v-for="(item,i) in treeData"
      :key="i"
      :nt-tree-leval="vLeval+i"
      :isFolder="!!(item&&item.children)"
    >
      <div>
        <i
          @click="expandNode($event,i,item)"
          class="iconfont"
          :class="item.state==='open'?'icon-Decrease':'icon-Increase'"
          v-if="item.children"
        ></i>
        <input type="checkbox" :checked="item.every||item.checked" @change="handleCheckbox(item)" />

        <span
          @click="expandNode($event,i,item)"
          :isLastNode="!item.children"
          :expand="this_expand"
        >{{item.label}}</span>
        every:{{item.every}}------some:{{item.some}}----noevery:{{item.noevery}} ----checked: {{item.checked}}---{{item.id}}
      </div>

      <tree-node
        :data="item.children"
        :boxchecked="curChecked"
        :state="item.state"
        :vLeval="vLeval+i+'-'"
      ></tree-node>
    </li>
  </ul>
</template>

<script>
import { log } from "util";
let draging = null,
  dragover = null;

export default {
  name: "TreeNode",
  inject: ["fatherTree"],
  data() {
    return {
      curCpmponentShow: false,
      this_expand: false,
      state_co: this.state, // 当前节点是否关闭或者直接开启
      curChecked: false
    };
  },
  props: {
    data: Array,
    boxchecked: Boolean,
    vLeval: {
      type: String,
      // nt-tree-index
      default: "nt-"
    },
    state: {
      type: String,
      default: "close",
      validator: s => {
        return ["open", "close"].indexOf(s) > -1;
      }
    }
  },
  methods: {
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
    handleCheckbox(curLiItem) {
      console.log('curLiItem', curLiItem)
      const changedCk = !curLiItem.checked;
      this.setReactiveProp(curLiItem,"checked",changedCk) // 为当前元素赋值checked
      // curLiItem.checked = changedCk;
      const childs = curLiItem.children; // 子元素。还有自身的
      if (childs && childs.length) {
        const flatChildArr = this.getFlatChild(childs);
        flatChildArr.forEach(item =>
          this.setReactiveProp(item, "checked", changedCk)
        );
      }
    },
    // 为children设置reactive的属性
    setReactiveProp(obj, key, val) {
      this.$set(obj, key, val);
    },
    expandNode(e, index, item) {
      if (!this.$children) return;
      item.state = item.state === "open" ? "close" : "open";
      this.this_expand = !this.this_expand;
      const isshow = this.$children[index].state_co;
      this.$children[index].state_co = isshow === "close" ? "open" : "close";
      this.fatherTree.clickLeaf({
        id: item.id,
        label: item.label,
        isLeaf: !(item.children && item.children.length !== 0)
      });
    },
    handleCheckbboxClick(i) {
      // this.treeData[i].curChecked = true;
      // const curNode = this.treeData[i];
      // const fn = (curNode) => {
      //     this.$children && this.$children.forEach(item => {
      //         item.curChecked = true;
      //         if (item.children) {
      //             fn(item.children)
      //         }
      //     })
      // }
      // fn(curNode)
    }
  },
  watch: {
    data: {
      handler(newVal) {
        this.treeData = newVal;
      },

      deep: true,
      immediate: true
    }
  }
};
</script>

<style>
</style>
