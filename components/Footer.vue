<script setup lang="ts">
</script>
<template  style="overflow-x: hidden;">
    <footer class="footer">
      <p>©2024 avnce.<br>All rights reserved.</p>
      <div class="links">
        <a href="https://status.avnce.org/status/avnce">Status</a>
        <a href="/projects">Projects</a>
      </div>
    </footer>
</template>
<style scoped>
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
  width: 100vw;
  overflow: hidden;
  margin-left: 0vw;
  background-color: rgb(35, 35, 35);
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
@media screen and (max-width: 1000px) and (orientation: landscape) {
  .footer {
    transform: translateY(0%);
    margin-top: 70vh;
    height: 110%
  }
}
</style>