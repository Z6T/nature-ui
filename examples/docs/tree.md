

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
              id: "111-1",
              checked: true
            },
            {
              label: "猪八戒",
              id: "111-2",
              checked: true
            }
          ]
        },
        {
          label: "三国演义",
          id: "222",
          state: "open",
          children: [
            {
              label: "关羽",
              id: "222-1",
              state: "open",
              checked: true,
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
      ],
      treeCheckboxData: [
        {
          label: "西游记",
          id: "111",
          state: "open",
          children: [
            {
              label: "孙悟空",
              id: "111-1",
              checked: true
            },
            {
              label: "猪八戒",
              id: "111-2",
              checked: true
            }
          ]
        },
        {
          label: "三国演义",
          id: "222",
          state: "open",
          children: [
            {
              label: "关羽",
              id: "222-1",
              state: "open",
              checked: true,
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
    },
    getAllCheckNode(){
        console.log(this.$refs.checktree.getCheckedNode());
    },
    getAllLeafCheckNode(){
        console.log(this.$refs.checktree.getCheckedLeafNode());
    }
  }
};
</script>



# Tree 树形菜单控件

## 基本用法


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
          state: "open",
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
## 可供选择
::: demo 
```html
<template>
  <nt-tree ref="checktree" :data="treeCheckboxData" :showcheckbox="true" @node-click="handTreeClick"></nt-tree>
  <nt-button size="small" type="primary" @click="getAllCheckNode">获取所有选中的节点</nt-button>
  <nt-button size="small" type="primary" @click="getAllLeafCheckNode">获取所有选中叶子节点</nt-button>
</template>

<script>
export default {
  data() {
    return {
      treeCheckboxData: [
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
          state: "open",
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
    },
    getAllCheckNode(){
        console.log(this.$refs.checktree.getCheckedNode());
    },
    getAllLeafCheckNode(){
        console.log(this.$refs.checktree.getCheckedLeafNode());
    }
  }
};
</script>

```
:::

### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| data     | 传递的需要渲染的tree的数据     | Array  | - | - |
| showcheckbox     |  是否显示复选框    | Boolean  |`true` `false`            | `false`  |

### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| node-click    | 点击每一项触发的事件| 当前点击的项,该项中的isLeaf参数表示是否是叶子节点   |
| node-click    | 获取所有勾选的节点|  所有勾选的节点组成的数组  |
| node-click    | 获取所有勾选叶子节点| 所有勾选的叶子节点组成的数组   |
