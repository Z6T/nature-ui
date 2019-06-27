
<template>
    <div>
        <button @click="visible = true">remove</button>
        <nt-dialog class="confirm" v-model="visible">
            <div slot="title">Remove</div>
            <div slot="body">
                <div>This operation is irreversible, are you sure?</div>
                <div>
                    <button @click="handleYes">Yes</button>
                    <button>No</button>
                </div>
            </div>
        </nt-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {
        handleYes() {
            alert('Yes')
            this.visible = false
        }
    }
}
</script>