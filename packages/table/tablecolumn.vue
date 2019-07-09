
<template>
    <th class="nt-table-column" v-text="label"></th>
</template>

<script>
export default {
    name: 'nt-table-colummn',
    props: {
        width: String,
        fixed: {
            type: [String, Boolean],
            default: false,
            validator: function (f) {
                return ['right', 'left', true].indexOf(f) > -1;
            }
        },
        label: String,
        prop: String
    }
}
</script>

<style>
</style>
