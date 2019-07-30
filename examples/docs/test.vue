<template>
    <div>
        <nt-switch v-model="switchActive"></nt-switch>
        <p>{{switchActive}}</p>
    </div>
</template>

<script>
export default {
    methods: {
        query(num){
            console.log(`页码改变了,是${num}`);
        }
    }
};
</script>
