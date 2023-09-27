<script setup lang="ts">
</script>

<template>
<div class="css-selector">
  <div class="css-middle">
    
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
    background: rgb(46, 46, 46);
    background-size: 100% 100%;
    height: 105vh;
    width: 100.65vw;
    transform: translate(-10px,0%);
}
</style>
