# Messsage 文字提示

## 基本用法


::: demo 
```html
<nt-button type="primary" @click="success">success</nt-button>
<nt-button type="warn"    @click="warn">warn</nt-button>
<nt-button type="danger"  @click="danger">danger</nt-button>
<script>
export default {
    methods: {
        success() {
            this.$ntMessageShow({
                content: '这是一条成功的提示'
            });
        },
        warn() {
            this.$ntMessageShow({
                type: 'warn',
                content: '这是一条警告的提示'
            });
        },
        danger() {
            this.$ntMessageShow({
                type: 'danger',
                content: '这是一条危险的提示'
            });
        },
    }
}
</script>
```
:::

### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| type     | 提示类型       | String  |  `success` `danger`  `warn` | `success` |
| duration     | 显示多少秒后自动关闭    | Number  | -         | 3(单位为s)  |
| content | 显示的内容   | String | -                       | -   |

