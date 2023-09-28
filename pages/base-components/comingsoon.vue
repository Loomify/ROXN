<script setup lang="ts">
</script>

<template>
<div class="css-selector">
  <div class="css-middle">
    <div class="mid-left">
      <h1 style="font-size: 300%;">Coming in the near future</h1>
      <p style="font-size: 125%;">A new product that we call "Xen".</p>
    </div>
  </div>
  <br>
    <div class="mid-right">
      <img src="/images/Xen.png" alt="xen" width="400" height="400">
    </div>
</div>
</template>

<style scoped>
.css-selector {
  overflow: -moz-hidden-unscrollable;
  overflow-x: hidden;
}
.css-middle {
  text-align: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Poppins', sans-serif;
  color: white;
}
.mid-left {
  position: relative;
  left: 50%;
  transform: translate(-65%, 0%);
}
.mid-right {
  position: relative;
  left: 50%;
  transform: translate(5%, -10%);
}
.css-selector {
    position: absolute;
    background: linear-gradient(300deg, #26ddee, #5100c7);
    background-size: 100% 100%;

    -webkit-animation: Gradient 22s ease infinite;
    -moz-animation: Gradient 22s ease infinite;
    animation: Gradient 22s ease infinite;
    height: 75vh;
    width: 100.65vw;
    transform: translate(-10px,0%);
}

@-webkit-keyframes Gradient {
    0%{background-position:0% 96%}
    50%{background-position:100% 5%}
    100%{background-position:0% 96%}
}
@-moz-keyframes Gradient {
    0%{background-position:0% 96%}
    50%{background-position:100% 5%}
    100%{background-position:0% 96%}
}
@keyframes Gradient {
    0%{background-position:0% 96%}
    50%{background-position:100% 5%}
    100%{background-position:0% 96%}
}
.css-selector:before {
  overflow: hidden;
}

@media screen and (max-width: 600px) {
  .css-selector {
    position: absolute;
    background: linear-gradient(300deg, #26ddee, #5100c7);
    background-size: 100% 100%;

    -webkit-animation: Gradient 22s ease infinite;
    -moz-animation: Gradient 22s ease infinite;
    animation: Gradient 22s ease infinite;
    height: 75vh;
    width: 100.65vw;
    transform: translate(-10px,0%);
  }
  .css-middle {
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Poppins', sans-serif;
    color: white;
  }
  .mid-left {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
    /* Make font-size smaller */
    font-size: 75%;

  }
  .mid-right {
    position: relative;
    left: 50%;
    transform: translate(500%, -10%);
  }
}
@media screen and (max-width: 1000px) and (orientation: landscape) {
  .css-selector {
    position: absolute;
    background: linear-gradient(300deg, #26ddee, #5100c7);
    background-size: 100% 100%;

    -webkit-animation: Gradient 22s ease infinite;
    -moz-animation: Gradient 22s ease infinite;
    animation: Gradient 22s ease infinite;
    height: 75vh;
    width: 100.65vw;
    transform: translate(-10px,0%);
  }
  .css-middle {
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Poppins', sans-serif;
    color: white;
  }
  .mid-left {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
    /* Make font-size smaller */
    font-size: 75%;

  }
  .mid-right {
    position: relative;
    left: 50%;
    transform: translate(500%, -10%);
  }
}
</style>
