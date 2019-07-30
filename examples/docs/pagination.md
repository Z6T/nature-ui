# Pagination 分页

## 基本用法

::: demo 
```html
<nt-pagination :total="199" :pageSize="24" @change="query"></nt-pagination>
<script>
export default {
    methods: {
        query(num){
            console.log(`页码改变了,是${num}`);
        }
    }
};
</script>
```
:::

### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| curPage     | 当前页码       | Number  | -| 1 |
| total     | 总条数      | Number  |    -        | -  |
| pageSize | 每页显示条数   | Number |      -                | -   |

### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| change    | 页码改变就触发该事件 |    当前要显示的页码      |

