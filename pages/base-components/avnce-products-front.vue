<script setup lang="ts">
</script>

<template>
<div class="css-selector">
  <div class="css-middle">
      <h1 style="font-size: 300%;">Join our Discord!</h1>
      <p style="font-size: 125%;">So you can learn more about avnce and our cause.</p>
      <br>
        <a href="https://discord.gg/vDKZJaYwgn"><button style="font-size: 125%;" class="button">Join Discord</button></a>

  </div>
  <br>
</div>
</template>

<style scoped>
.button {
  background-color: #2f2f2f;
  border: none;
  color: rgb(255, 255, 255);
  padding: 15px 32px;
  border-radius: 12px;
  text-emphasis-color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border: 2px solid #2f2f2f;
}
.button:hover {
  background-color: #e88c8c;
  color: white;
}
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
    background: linear-gradient(300deg, #ee2626, #0092c7);
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
</style>
