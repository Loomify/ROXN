<script setup lang="ts">
</script>
<template>
    <div>
        <h1>Sign Up</h1>
    </div>
    <form method="POST" action="">
        <label for="username">username</label>
        <input type="text" name="username" id="username" />
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit" class="">Sign Up</button>
    </form>
</template>
<style scoped>
.sc {
    /* Cause a loading screen */
    cursor: wait;

    /* make the button grayed out */
    background-color: #ccc;
    color: #fff;

    /* make the button unclickable */
    pointer-events: none;

}
body {
  background-color: #242424;
  color: white;
}
</style>