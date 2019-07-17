# nihfsdfsd

::: demo 
```html
<template>
    <nt-button size="large">默认按钮</nt-button>-------{{a}}
            <nt-button>默认按钮</nt-button>
    <nt-checkbox v-model="checked2" border>备选2</nt-checkbox> ---{{checked2}}
</template>

<script>
export default{
    data(){
        return {
            a:111,
            checked2:true
        }
    }
}
</script>

```
:::