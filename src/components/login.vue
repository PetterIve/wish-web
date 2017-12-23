<template>
<div class="container login">
    <form v-on:submit.prevent="submit">
        <h1>Sign in</h1>
        <input v-model="username" placeholder="Enter username">
        <input type="password" v-model="password" placeholder="Enter password">
        <input class="button" type="submit" value="Sign in">
        <router-link to="/register">
            Sign up
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
        };
    },
    methods: {
        submit() {
            console.log(this.username);
        },
        register() {
            console.log('Register')
        }
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
