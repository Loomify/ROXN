<script setup lang="ts">
const username = 'admin'
const password = 'admin'
const { data } = await useFetch('/api/authentication/login', {
    method: 'POST',
    body: JSON.stringify({
        username: username,
        password: password,
    })
})
// Redirect user to page
window.location.href = data._value.headers.Location

</script>
<template>
        <p>Welcome to accounts! This is a page mimicking the html styles of 1990.</p><br>
        <p>Login to your account to see your account details.</p>
        <form action="#">
            <p>Username: <input type="text" id="username" name="username"></p>
            <p>Password: <input type="password" id="password" name="password"></p>
            <p><button type="submit">Login</button></p>
        </form>
</template>
<style scoped>
    p {
        font-family: 'Courier New', Courier, monospace;
        font-size: 20px;
        margin-left: 20px;        
    }
    body {
        background-color: black;
        color: white;
    }
</style>