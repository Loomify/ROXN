<script setup lang="ts">
import Navbar from './base-components/Navbar.vue'
import BrandBody from '/components/BrandBody.vue'
import aboutavnce from '/components/aboutavnce.vue'
import avnceProductsFront from './base-components/avnce-products-front.vue'
import comingsoon from './base-components/comingsoon.vue'
import ConferenceAnnouncement from '/components/conference_announcement.vue'
import Footer from '/components/Footer.vue'
import './assets/main.css'
import './assets/base.css'

</script>

<template style="overflow-x: hidden;">
  <head>
    <title>avnce</title>
  </head>
  <Navbar />
  <main>
    <section class="announcement">
      <ConferenceAnnouncement />
    </section>
    <section class="Brand">
      <BrandBody class="BrandBody" />
    </section>
    <br>
    <section class="about">
      <aboutavnce />
    </section>
    <br>
    <section class="coming-soon">
      <comingsoon/>
    </section>
    <section class="explore">
      <avnceProductsFront />
    </section>
    <div class="footer">
      <Footer /> 
    </div>
  </main>
</template>
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,900&display=swap');
.BrandBody {
  width: 50vw;
  height: 100vh;
  overflow: hidden;
}

.Brand {
  overflow: hidden;
  margin-top: 12vh;
}
.footer {
  transform: translateY(-0%);
}

.about {
  overflow: hidden;
}
.explore {
  overflow: hidden;
  /* Prevent overlap with .about */
  margin-top: 75vh;
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

.announcement {
  overflow: hidden;
  margin-top: 12vh;
}

@media screen and (max-width: 1000px) and (orientation: landscape) {
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