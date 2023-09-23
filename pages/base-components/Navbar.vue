<template>
  <ClientOnly>
    <div class="NavbarDiv">
    <h1 class="poppins-brand middle" style="font-family:'Poppins', sans-serif;src: url('/poppins/Poppins-Bold.ttf');">avnce</h1>
      <div class="end">
        <router-link to="/about" class="e1 poppins">About</router-link>
        <router-link to="/contact" class="e2 poppins">Contact</router-link>
      </div>
  </div>
  </ClientOnly>
</template>
<style scoped>
.e1 {
  margin-right: 10px;
  color: white;
}
.e2 {
  margin-left: 15px;
  color: white;
}
.middle {
  margin-left: 20px;
  color: white;
  font-size: 40px;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
  src: url('/poppins/Poppins-Bold.ttf');
  margin-top: 10px;
}
.NavbarDiv {
  width: 100vw;
  height: 12vh;
  background: #242424;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.end {
  float: right;
  margin-right: 20px;
  margin-top: -40px;
}

</style>
