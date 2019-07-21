

<script>
export default {
  data() {
    return {
      treeData: [
        {
          label: "西游记",
          id: "111",
          state: "open",
          children: [
            {
              label: "孙悟空",
              id: "111-1"
            },
            {
              label: "猪八戒",
              id: "111-2"
            }
          ]
        },
        {
          label: "三国演义",
          id: "222",
          children: [
            {
              label: "关羽",
              id: "222-1",
              state: "open",
              children: [
                {
                  label: "关平",
                  id: "222-1-1"
                }
              ]
            },
            {
              label: "张飞",
              id: "222-2",
              children: [
                {
                  label: "张苞",
                  id: "222-2-1"
                }
              ]
            },
            {
              label: "刘备",
              id: "222-3",
              children: [
                {
                  label: "阿斗",
                  id: "222-3-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    handTreeClick(item) {
      console.log("item :", item);
    }
  }
};
</script>



# LoadingBar 页面顶部加载条

### 基本用法

调用`this.$loadingbar.start();this.$loadingbar.finish();this.$loadingbar.error();`分别对应**进度条开始，进度条完成，进度条错误**。
::: demo 
```html
<template>
  <nt-tree :data="treeData" @node-click="handTreeClick"></nt-tree>
</template>

<script>
export default {
  data() {
    return {
      treeData: [
        {
          label: "西游记",
          id: "111",
          state: "open",
          children: [
            {
              label: "孙悟空",
              id: "111-1"
            },
            {
              label: "猪八戒",
              id: "111-2"
            }
          ]
        },
        {
          label: "三国演义",
          id: "222",
          children: [
            {
              label: "关羽",
              id: "222-1",
              state: "open",
              children: [
                {
                  label: "关平",
                  id: "222-1-1"
                }
              ]
            },
            {
              label: "张飞",
              id: "222-2",
              children: [
                {
                  label: "张苞",
                  id: "222-2-1"
                }
              ]
            },
            {
              label: "刘备",
              id: "222-3",
              children: [
                {
                  label: "阿斗",
                  id: "222-3-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    handTreeClick(item) {
      console.log("item :", item);
    }
  }
};
</script>

```
:::
