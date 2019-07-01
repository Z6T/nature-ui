<template>
  <ul v-if="data&&data.length">
    <li
      v-for="(item,i) in data"
      :key="i"
      :nt-tree-leval = "vLeval+i"
      @dragstart="onDragStart"
      @dragover="onDragOver"
      @dragend="onDragEnd"
      draggable="true"
    >
      {{item.label}}---> {{vLeval+i}}
      <tree-node :data="item.children" :vLeval = 'vLeval+i+"-"'></tree-node>
    </li>
  </ul>
</template>

<script>
import { log } from 'util';
export default {
  name: "TreeNode",
  data(){
      return {
        draging:null
      }
  },
  props: {
    data: Array,
    vLeval:{
        type:String,
        // nt-tree-index
        default:'nt-'
    }
  },
  methods: {
    onDragStart(e) {
      this.draging = e.target;
      console.log(e.target.innerText);
      
    },
    onDragOver(e) {
      console.log('drag over');
       console.log(e.target.getAttribute('nt-tree-leval'));
    },
    onDragEnd(e) {
       console.log(e.target.getAttribute('nt-tree-leval'));
    }
  }
};
</script>

<style>
</style>
