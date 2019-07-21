    
<template>
  <div class="nt-skeleton" :style="{background: bgColor, paddingBottom, width:width+'px'}">
  </div>
</template>

<script>
  export default{
    name: 'nt-skeleton',
    props: {
      proportion: {
        type: Number,
        default: 1
      },
      bgColor: {
        type: String,
        default: '#b4bccc'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: [String, Boolean],
        default: 200
      }
    },
    data () {
      return {
          paddingBottom:(this.height+'px') || `${this.proportion * 100}%`
      }
    }
  }
</script>