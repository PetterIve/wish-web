<template>
<div class="container login">
    <h1>Wish</h1>
    <p>
        Wish allows your friends and family to coordinate your big day without 
        spoiling the surprise. Sign up, add your wish list and share your link
        with friends and family!
    </p>
    <div class="buttons">
        <router-link to="/login" class="button">Sign in</router-link>
        <router-link to="/register" class="button inverse">Sign up</router-link>
    </div>
</div>
</template>

<style scoped>
.container{
    max-width: 50%;
}
    .buttons{
        display: flex;
    }
    .buttons > * {
        flex-grow: 1
    }
</style>
