<script setup lang="ts">
import Navbar from './base-components/Navbar.vue'
</script>

<template>
    <Navbar />
  <div class="mid">
    <h1>Our Projects</h1>
    <p>avnce is currently working on a few projects. We're currently developing our first product, but you can sign up for our newsletter to get notified when we launch it.</p>
    <div class="card-group-vertical">
      <div class="card">
        <div class="card-content-right">
          <h1 class="">Xen (formerly Kosciuszko)</h1>
          <br>
          <p class="card-text">Xen is a new take on the hosting panel. It's a modern, fast, and better panel that's built for the future. It's currently in development, but you can sign up for our newsletter to get notified when we launch it.</p>
          <a class="card-text">Sign up for our newsletter →</a>
        </div>
      </div>
      <!-- <div class="card">

      </div> -->
    </div>
  </div>
</template>
<style scoped>
.mid {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Poppins', sans-serif;
  color: white;
}
.card {
  background-color: rgb(35, 35, 35);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}
.card-group-vertical {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.card-content-right {
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 60%;
  gap: 5px;
}
.card-img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}
.card-text {
  font-family: 'arial';
}
a {
  color: #00b0f4;
  text-decoration: none;
  transition: 0.3s;
}
a:hover {
  color: #1f586f;
  text-decoration: none;
  /* add transition */
  transition: 0.3s;
}
@media only screen and (max-width: 600px) {
  .card {
    width: 150%;
  }
}
</style>