<template>
<div class="container login">
    <form v-on:submit.prevent="submit">
        <h1>Register</h1>
        <input v-model="username" placeholder="Enter username">
        <input type="email" v-model="email" placeholder="Enter email">
        <input type="password" v-model="password" placeholder="Enter password">
        <input class="button" type="submit" value="Sign up">
        <router-link to="/login">
            Sign in
        </router-link>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            email: '',
        };
    },
    methods: {
        submit() {
        },
        register() {
        },
    },
};
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }
    form > * {
        margin-top: 10px;
    }
</style>
