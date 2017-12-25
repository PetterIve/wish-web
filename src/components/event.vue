<template>
<div class="container login">
    <h1>Wishes</h1>
    <div class="wishes">
        <div 
            class="wish"
            v-for="wish in wishes"
            v-bind:key="wish.id"
        >
                {{wish.name}}
        </div>
    </div>
    <div v-if="!wishes">No wishes</div>
    <button class="button">Add wish</button>
</div>
</template>

<script>
export default {
    computed: {
        wishes() {
            console.log(this.$store.state.events.events);
            console.log(this.$route.params);
            return this.$store.state.events.events
                .find(event => event.id + '' === this.$route.params.id)
                .wishes;
        },
    },
    methods: {
    },
};
</script>

<style scoped>
.button {
    margin-top: 10px;
}
.wishes > * {
    margin-top: 5px;
}
.wish {
    padding: 10px;
    border: 1px solid black;
}
.wish:hover {
    cursor: pointer;
    padding: 9px;
    border-width: 2px;
}
</style>
