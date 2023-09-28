<script setup lang="ts">
</script>

<template>
  <ClientOnly>
    <div class="brandsegmentwebsite">
      <br>
      <h2 class="poppins-bold" style="font-size: 50px;">Building the future.</h2>
      <p style="font-size: 20px;">avnce is attempting to build the future of technology through its projects.</p>
    </div>
  </ClientOnly>
</template>

<style scoped>

.brandsegmentwebsite {
  width: 100vw;
  height: 45%;
  color: white;
  transform: translate(-15%, 0%);
  resize: both;
  text-align: center;
  font-size-adjust: calc(0.5em + 3vw);
  font-size: calc(0.5em + 2vw);
  margin-left: 15%;
  background-color: black;
  position: absolute;
  
}
.poppins-bold {
  font-family: 'Poppins', Arial;
  src: url('/poppins/Poppins-Bold.ttf');
  color: white;
}
.lg {
  font-size: 75px;
}
@media screen and (max-width: 1000px) and (orientation: landscape) {
  .brandsegmentwebsite {
    width: 100vw;
    height: 45%;
    color: white;
    transform: translate(-15%, 0%);
    resize: both;
    text-align: center;
    font-size-adjust: calc(0.5em + 2vw);
    font-size: calc(0.5em + 1vw);
    margin-left: 15%;
    background-color: black;
    position: absolute;
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
