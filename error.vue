<script lang="ts">
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>
  
<template>
    <div class="middle-div">
      <h1>Oops!</h1>
      <p>Something went wrong.<br>{{error.message}}</p>
      <NuxtLink to="/">Return back to home.</NuxtLink>
    </div>
</template>
<style scoped>
div {
  text-align: center;
  margin-top: 20vh;
  font-family: 'Poppins', sans-serif;
  src: url('/poppins/Poppins-Bold.ttf');
  font-size: 20px;
  color: white;
}
.middle-div {
  margin: auto;
  width: 50vw;
  height: 50vh;
  background-color: #282828;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50%;
}
</style>