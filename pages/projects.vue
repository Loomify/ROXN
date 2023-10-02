<script setup lang="ts">
import Navbar from './base-components/Navbar.vue'
import './assets/main.css'
import './assets/base.css'
</script>

<template>
  <Navbar/>
  <div class="force">
    <div class="mid">
      <h1 class="poppins" style="font-size: 330%;">Projects:</h1>
      <p class="projects-description">Here are some of our projects that we are working on.</p>
      <br>
    <div class="card-group-vertical">
      <div class="card">
        <div class="card-content-right">
          <h1 class="">Xen (formerly Kosciuszko)</h1>
          <br>
          <p class="card-text">Xen is a new product that we are working on over here @avnce that will be our attempt at shaping the future of hosting.</p>
          <a class="card-text" href="mailto://hello@avnce.org">Send an email to learn more →</a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00b7ff" fill-opacity="1" d="M0,32L30,48C60,64,120,96,180,133.3C240,171,300,213,360,234.7C420,256,480,256,540,240C600,224,660,192,720,160C780,128,840,96,900,85.3C960,75,1020,85,1080,117.3C1140,149,1200,203,1260,192C1320,181,1380,107,1410,69.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" style="--darkreader-inline-fill: #0092cc;" data-darkreader-inline-fill="" class="sv"></path></svg>
      </div>
      <div class="card">
        <div class="card-content-right">
          <h1 class="">Li</h1>
          <br>
          <p class="card-text">Li is a status monitor for avnce services that will be open-source.</p>
          <a class="card-text" href="https://github.com/avnce/Li">Visit GitHub →</a>
        </div>
        
      </div>
    </div>
  </div>
</div>
<footer>
  <div class="footer-end">
    <p class="poppins-footer">©2024 avnce. All rights reserved.</p>
  </div>
</footer>
</template>
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,900&display=swap');
.footer-end {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8vh;
  background-color: #242424;
  color: white;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  transform: translateY(850%);
}
.poppins-footer {
  position: relative;
  font-size: 1.25rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}
@media only screen and (max-width: 600px) {
  .mid {
    position: relative;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -200%);
    width: 60%;
    margin-top: 400%;
  }
  .footer-end {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 8vh;
    background-color: #242424;
    color: white;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    transform: translateY(850%);
  }
  .poppins-footer {
    position: relative;
    font-size: 1.25rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
  }
}
@media only screen and (max-width: 800px) {
  .projects-description {
    font-size: 1.2rem;
    transform: translateX(-24%);
  }
  .mid {
    position: relative;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -200%);
    width: 60%;
    margin-top: 400%;
  }
  .text {
    font-family: 'Poppins', sans-serif;
    color: white;
    margin: auto;
  }
  .c3 {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(15%, 100%);

    text-align: center;

    font-size: 1.5rem;
    color: white;
  }
  .force {
    transform: translateY(70vh);
  }
  .poppins {
    transform: translateX(-20%);
    font-size: 2.5rem;
    width: 300px;
  }
}
.mid {
  font-family: 'Poppins', sans-serif;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -70%);
  margin-top: 20%;
  width: 60%;
}
.poppins {
  font-family: 'Poppins', sans-serif;
}
.c3 {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(15%, -300%);

  text-align: center;

  font-size: 1.5rem;
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
  color: #359ec8;
  text-decoration: none;
  transition: 0.3s;
}
a:hover {
  color: #00b7ff;
  text-decoration: none;
  /* add transition */
  transition: 0.3s;
}
@media only screen and (max-width: 600px) {
  .card {
    width: 150%;
  }
}
.content-right {
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 40%;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  transform: translate(150%,-200%);
  /* Create waves */
  animation: wave 1s infinite linear;
  
}
@keyframes wave {
  0% {
    transform: translate(150%,-200%);
  }
  50% {
    transform: translate(150%,-200%);
  }
  100% {
    transform: translate(150%,-200%);
  }
}
.sv {
  position: absolute;
  width: 100%;
  transform: translate(0%, 10%);
}
.text {
  font-family: 'Poppins', sans-serif;
  color: white;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -15vh);
  text-align: center;
  width: 100%;
  height: 100vh;
}
.poppins {
  font-size: 3rem;
}
@media only screen and (max-width: 1000px) and (orientation: landscape) {
  .text {
    font-family: 'Poppins', sans-serif;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -15vh);
    text-align: center;
    width: 100%;
    height: 100vh;
  }
  .mid {
    font-family: 'Poppins', sans-serif;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    margin-top: 40%;
  }
  .c3 {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(15%, -300%);

    text-align: center;

    font-size: 1.5rem;
    color: white;
  }
}

@media only screen and (max-width: 600px) {
  .text {
    font-family: 'Poppins', sans-serif;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -15vh);
    text-align: center;
    width: 100%;
    height: 100vh;
  }
  .mid {
    font-family: 'Poppins', sans-serif;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    margin-top: 40%;
  }
  .c3 {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(15%, -300%);

    text-align: center;

    font-size: 1.5rem;
    color: white;
  }
  
}
body {
  background-color: #242424;
  color: white;
}
</style>