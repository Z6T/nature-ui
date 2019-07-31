
<template>
    <th class="nt-table-column" :width="width">{{label}}</th>
</template>

<script>
export default {
    name: 'nt-table-colummn',
    props: {
        width: [String, Number],
        fixed: {
            type: [String, Boolean]
        },
        label: String,
        prop: String
    }
}
</script>

<style>
</style>
