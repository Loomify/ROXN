<template>
  <ClientOnly>
    <div class="NavbarDiv">
    <h1 class="poppins-brand middle" style="font-family:'Poppins', sans-serif;src: url('/poppins/Poppins-Bold.ttf');color:white;text-decoration: none;">avnce</h1>
      <div class="end">
        <router-link to="/" class="e2 poppins">Home</router-link>
        <router-link to="/about" class="e2 poppins">About</router-link>
        <router-link to="/projects" class="e2 poppins">Projects</router-link>
      </div>
  </div>
  </ClientOnly>
</template>
<style scoped>
.e1 {
  margin-right: 10px;
  color: rgb(255, 255, 255);
  font-family: 'Poppins', sans-serif;
  transition: 0.3s;  
}
h1 {
  margin-top: 10px;
  color: white;
}
h1:active {
  color: white;
}
h1:visited {
  color: white;
}
.e1:hover {
  color: rgb(6, 131, 255);
  font-family: 'Poppins', sans-serif;
  transition: 0.3s;
  transform: translateY(-5px);
}
.e2 {
  margin-left: 20px;
  font-family: 'Poppins', sans-serif;
  color: rgb(255, 255, 255);
  transition: 0.3s;
}
.e2:hover {
  color: rgb(6, 131, 255);
  font-family: 'Poppins', sans-serif;
  transition: 0.3s;
  transform: translateY(-5px);
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
/* a {
  text-decoration: none;
  /* Align on 0 y axis 
  display: flex;
  align-items: center;
} */
.NavbarDiv {
  width: 100vw;
  height: 12vh;
  background: #242424;
  /* Add transparency */

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
@media screen and (max-width: 600px) {
  .end {
    float: right;
    margin-right: 0px;
    margin-top: -40px;
  }
  .e1 {
    margin-right: 10px;
    margin-left: 0px;
  }
  .e2 {
    margin-left: 10px;
    margin-right: 10px;
  }
  .middle {
    margin-left: 10px;
  }
}
@media screen and (max-width: 1000px) and (orientation: landscape) {
  .e2 {
    margin-right: 10px;
  }
  .e1 {
    margin-right: 10px;
    margin-left: 0px;
  }
  .NavbarDiv {
    width: 100vw;
    height: 20vh;
    background: #242424;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    color: white;
    top: 0;
    left: 0;
    z-index: 1;
    align-self: start;
  }
  .end {
    float: right;
    margin-right: 0px;
    margin-top: -40px;
  }
  .e1 {
    margin-right: 0px;
    margin-left: 0px;
  }
  .e2 {
    margin-left: 10px;
  }
  .middle {
    margin-left: 10px;
  }
}
.poppins-brand {
  font-family: 'Poppins', sans-serif;
  src: url('/poppins/Poppins-Bold.ttf');
  color: white;
  font-size: 40px;
  font-weight: 900;
  margin-top: 10px;
  margin-left: 20px;
  transition: 0.3s;
}
.poppins-brand:hover {
  color: rgb(255, 255, 255);
  font-family: 'Poppins', sans-serif;
  transition: 0.3s;
}
.poppins-brand:visited {
  color: white;
  font-family: 'Poppins', sans-serif;
}
a:hover, a:active { text-decoration: none;}
</style>
