<template>
<div class="container login">
    <h1>Upcoming events</h1>
    <div class="events">
        <div 
            class="event"
            v-for="event in events"
            v-bind:key="event.id"
            v-on:click="navigate(event)"
        >
                {{event.name}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        events() {
            return this.$store.state.events.events;
        },
    },
    methods: {
        navigate(event) {
            this.$router.push({ path: `/events/${event.id}` });
        },
    },
};
</script>

<style scoped>
.events > * {
    margin-top: 5px;
}
.event {
    padding: 10px;
    border: 1px solid black;
}
.event:hover {
    cursor: pointer;
    padding: 9px;
    border-width: 2px;
}
</style>
