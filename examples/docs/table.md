<script>
export default {
  data() {
    return {fixedColData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333 
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        }
      ],
      fixColTitle: [
        {
          label: "日期",
          prop: "date",
          width: 80,
           fixed: 'left'  
        },
        {
          label: "姓名",
          prop: "name",
          width: 80,
           fixed: 'left'  
        },
        {
          label: "省份",
          prop: "province",
          width: 800
        },
        {
          label: "市区",
          prop: "city",
          width: 800
        },
        {
          label: "地址",
          prop: "address",
          width: 800
        },
        {
          label: "邮编",
          prop: "zip",
          width: 100,     
          fixed:'right'
        }
      ],
        fixedHeadertableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-23",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-29",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],
      baseetitle: [
        {
          label: "日期",
          prop: "date",
          width: 80
        },
        {
          label: "姓名",
          prop: "name",
          width: 80
        },
        {
          label: "省份",
          prop: "province",
          width: 80
        },
        {
          label: "市区",
          prop: "city",
          width: 80
        },
        {
          label: "地址",
          prop: "address",
          width: 80
        },
        {
          label: "邮编",
          prop: "zip",
          width: 80
        }
      ],
      title: [
        {
          label: "日期",
          prop: "date",
          width: 85,
          fixed: "left"
        },
        {
          label: "姓名",
          prop: "name",
          width: 292
        },
        {
          label: "省份",
          prop: "province",
          width: 292
        },
        {
          label: "市区",
          prop: "city",
          width: 292
        },
        {
          label: "地址",
          prop: "address",
          width: 292
        },
        {
          label: "邮编",
          prop: "zip",
          width: 292
        }
      ]
    }
  },
      methods:{
      handleClick(row){
         this.$dialog({
            body:JSON.stringify(row,null,'\t'),
            height:300,
            width:400,
                 showMask:true,
                 justOkBtn:true
          })
      }
    }
};
</script>

# Table 数据表格

## 基本用法

::: demo 
```html
<nt-table :data="tableData" :columns="baseetitle" style="height:200px" />

<script>
export default {
  data() {
    return {
      fixedHeadertableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-23",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-29",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],
      baseetitle: [
        {
          label: "日期",
          prop: "date",
          width: 80
        },
        {
          label: "姓名",
          prop: "name",
          width: 80
        },
        {
          label: "省份",
          prop: "province",
          width: 80
        },
        {
          label: "市区",
          prop: "city",
          width: 80
        },
        {
          label: "地址",
          prop: "address",
          width: 80
        },
        {
          label: "邮编",
          prop: "zip",
          width: 80
        }
      ]
    };
  }
};
</script>
```
:::
## 固定表头

::: demo 
```html
<nt-table :data="fixedHeadertableData" :columns="baseetitle" style="height:200px" />

<script>
export default {
  data() {
    return {
      fixedHeadertableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-23",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-29",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],
      baseetitle: [
        {
          label: "日期",
          prop: "date",
          width: 80
        },
        {
          label: "姓名",
          prop: "name",
          width: 80
        },
        {
          label: "省份",
          prop: "province",
          width: 80
        },
        {
          label: "市区",
          prop: "city",
          width: 80
        },
        {
          label: "地址",
          prop: "address",
          width: 80
        },
        {
          label: "邮编",
          prop: "zip",
          width: 80
        }
      ]
    };
  }
};
</script>
```
:::

## 固定列

::: demo 
```html
<nt-table :data="fixedColData" :columns="fixColTitle"  />

<script>
export default {
  data() {
    return {
      fixedColData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        }
      ],
      fixColTitle: [
         {
          label: "日期",
          prop: "date",
          width: 80,
           fixed: 'left'  
        },
        {
          label: "姓名",
          prop: "name",
          width: 80,
           fixed: 'left'  
        },
        {
          label: "省份",
          prop: "province",
          width: 800
        },
        {
          label: "市区",
          prop: "city",
          width: 800
        },
        {
          label: "地址",
          prop: "address",
          width: 800
        },
        {
          label: "邮编",
          prop: "zip",
          width: 100,     
          fixed:'right'
        }
      ]
    };
  }
};
</script>
```
:::


## 增加操作列

::: demo 
```html
<nt-table :data="fixedColData" :columns="fixColTitle" >
    <template v-slot:default="scope" fixed="right">
        <span @click="handleClick(scope.row)">编辑</span>
        <span @click="handleClick(scope.row)">删除</span>
        <span @click="handleClick(scope.row)">编辑</span>
</template>
</nt-table>

<script>
export default {
  data() {
    return {
      fixedColData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        }
      ],
      fixColTitle: [
         {
          label: "日期",
          prop: "date",
          width: 80,
           fixed: 'left'  
        },
        {
          label: "姓名",
          prop: "name",
          width: 80,
           fixed: 'left'  
        },
        {
          label: "省份",
          prop: "province",
          width: 800
        },
        {
          label: "市区",
          prop: "city",
          width: 800
        },
        {
          label: "地址",
          prop: "address",
          width: 800
        },
        {
          label: "邮编",
          prop: "zip",
          width: 100,     
          fixed:'right'
        }
      ]
    };
  },
   handleClick(row){
         this.$dialog({
            body:JSON.stringify(row,null,'/t'),
            height:300,
            width:300,
                 showMask:true,
                 justOkBtn:true
          })
      }
};
</script>

```
:::

### Attributes

| 参数    | 说明     | 类型   | 可选值        | 默认值 |
| ------- | -------- | ------ | ------------- | ------ |
| data    | 表格数据 | Array  | -             | -      |
| columns | 表头数据 | Array  | -             | -      |
| fixed   | 表头数据 | String | right,left,'' | false  |

