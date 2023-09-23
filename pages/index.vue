<script setup lang="ts">
import Navbar from './base-components/Navbar.vue'
import BrandBody from '../../components/BrandBody.vue'
import aboutavnce from '../../components/aboutavnce.vue'
import comingsoon from './base-components/comingsoon.vue'
import './assets/main.css'
import './assets/base.css'
</script>

<template>
  <head>
    <title>avnce</title>
  </head>
  <Navbar />
  <main>

    <section class="Brand">
      <BrandBody class="BrandBody" />
    </section>
    <br>
    <section class="about">
      <aboutavnce />
    </section>
    <br>
    <section class="coming-soon">
      <comingsoon />
    </section>
    <br>
    <footer class="footer">
      <p>©2024 avnce Hokkaido. All rights reserved.</p>
      <div class="links">
        <a href="/legal/privacy">Privacy Policy</a>
        <a href="/legal/terms">Terms of Service</a>
      </div>
      <br>
    </footer>

  </main>
</template>
<style scoped>
.BrandBody {
  width: 50vw;
  height: 100vh;
  overflow: hidden;
}
.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.links a {
  margin-left: 10px;
  margin-right: 10px;
  color: rgb(43, 135, 255);
  text-decoration: none;
}
.footer {
  height: 20vh;
  color: white;
  text-align: center;
  font-size: 20px;
  font-family: 'Poppins', Arial;
  src: url('/poppins/Poppins-Bold.ttf');
  margin-top: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
  transform: translateY(35%);
  width: 50vw;
  overflow: hidden;
  margin-left: 25vw;
  
}

.about {
  overflow: hidden;
}
.coming-soon {
  overflow: hidden;
  /* Prevent overlap with .about */
  margin-top: 40vh;

}
@media screen and (max-width: 600px) {
  .BrandBody {
    width: 100vw;
    height: 100vh;
    font-size: normal;
    text-align: center;
    
  }
  .about {
    color: white;
    background-color: greenyellow;
    width: 100vw;
  }
  .coming-soon {
    color: white;
    background-color: greenyellow;
    width: 100vw;
  }
}

</style>