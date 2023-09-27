<script setup lang="ts">
</script>

<template>
  <ClientOnly>
    <div class="brandsegmentwebsite">
      <div class="brandsegmentwebsites">
        <h2 class="poppins-bold cr" style="font-size: 25px;">The future of development is here.</h2>
        <h1 class="poppins-bold lg cr">Welcome to avnce.</h1>
        <p class="cr" style="font-size: 20px;">Pronounced  /ˈeɪviˌæns/</p>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.brandsegmentwebsite {
  width: 100%;
  height: 100%;
  color: white;
  resize: both;
  font-size-adjust: calc(0.5em + 1vw);
  font-size: calc(0.5em + 1vw);
  margin-left: 15%;
  height: 75vh;
  margin-top: 40vh;
}
.poppins-bold {
  font-family: 'Poppins', Arial;
  src: url('/poppins/Poppins-Bold.ttf');
  color: white;
}
.lg {
  font-size: 75px;
}

@media screen and (max-width: 600px) {
  
.brandsegmentwebsite {
  width: 100vw;
  height: 100%;
  color: white;
  transform: translate(-15%, 0%);
  resize: both;
  text-align: center;
  font-size-adjust: calc(0.5em + 3vw);
  font-size: calc(0.5em + 2vw);
  margin-left: 15%;
  margin-bottom: 100%; 
}
.brandsegmentwebsites {
  transform: translateY(-25%);
}
.poppins-bold {
  font-family: 'Poppins', Arial;
  src: url('/poppins/Poppins-Bold.ttf');
  color: white;
}
.lg {
  font-size: 75px;
}
}

</style>
