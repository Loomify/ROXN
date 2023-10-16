<script setup lang="ts">
    import Navbar from './base-components/Navbar.vue'
    import './assets/main.css'
    import './assets/base.css'
    const teamdata = await useFetch('/api/employees')
</script>
<template>
    <head>
        <title>avnce | about</title>
    </head>
    <Navbar />
    <div class="container">
      <div class="content">

        <div class="abt">
            <h1 class="title"> about avnce</h1>
            <p>Since July of 2022, avnce (formerly aviance.app) has been working on making the world of hosting better. Now, we come from our roots and diversify into more software and projects to be able to meet your software needs.</p>
            <img class="img" src="https://i.pinimg.com/originals/b2/e7/ed/b2e7ed0c9f442b522322791ece0c49a5.jpg" alt="Hokkaido" width="400px" height="300px">
        </div>
        <br>
        <h1 class="title">core values:</h1>
        <p>Our core values are what we stand for. They are the foundation of our company and what we believe in.</p>
        <div class="card-group">
            <div class="card">
                <h1 class="card-title">🔒Privacy</h1>
                <p>Privacy is an avnce-guaranteed right. Since its founding, avnce has always kept privacy-first by letting nobody see your information and incorporating this philosophy into our projects.</p>
            </div>
            <div class="card">
                <h1 class="card-title">🔨 Service</h1>
                <p>Service is a core value of avnce. We believe that service is the most important thing to a user. We strive to make sure that you are happy with our service and that you are satisfied by providing support whenever you need it.</p>
            </div>          
        </div>
        <br>
        <h1 class="title">Team:</h1>           
        <p>The team is what makes avnce, avnce! Meet the lead team for making our projects here:</p>
        <br>
        <!-- <div class="card-group-team">
            <div class="card-team">
                <div class="icon-grp">
                    <img src="/images/icons/de-y.png" alt="avatar" width="100px" height="100px" style="border-radius: 50%;">
                    <h1 class="card-title">Defy</h1><br>
                </div><br>
                <p>Defy is the co-founder and Director of software at avnce. He is a developer and designer who started coding from the age of 9.</p> <br>
                <a href="https://github.com/de-y"><img src="/images/icons/github.svg" width="35px" height="35px"></a>
                <br>
                <br>
                <br>
            </div>
            <div class="card-team">
                <div class="icon-grp">
                    <img src="/images/icons/prsdoc.webp" alt="avatar" width="100px" height="100px" style="border-radius: 50%;">
                    <h1 class="card-title">Prsdoc</h1><br>
                </div><br>
                <p>Prsdoc is a co-founder of avnce with de-y & is the CEO. They have been friends since the 7th grade.</p> <br>
                <a href="https://github.com/prsdoc"><img src="/images/icons/github.svg" width="35px" height="35px"></a>
                <br>
                <br>
                <br>
            </div>
        </div> -->
        <div class="card-group-team">
    <div v-if="teamdata" v-for="(employees, index) in teamdata.data.value['members']" :key="index" class="card-team">
        <div class="icon-grp">
            <img :src="employees.img" alt="Image description"  style="border-radius: 50%; width: 100px; height: 100px;">
            <h1 class="card-title">{{ employees['name'] }}</h1><br>
        </div><br>
        <p>{{ employees['about'] }}</p> <br>
        <div class="bottom-row">
            <a :href="employees['github']">
                <img src="/images/icons/github.svg" alt="Github" style="width: 35px; height: 35px;">
            </a>
        </div>
        <br>
        <br>
        <br>
    </div>
</div>
        <br>
                <br>
                <br>
      </div>
    </div>

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
  transform: translateY(1500%);
}
.poppins-footer {
  position: relative;
  font-size: 1.25rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
}
.title {
    font-family: 'Poppins';
    font-size: 50px;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
    color: white;
    word-wrap: break-word;
    width: 40%;
}
.container {
    background-color: #1e1e1e;
    width: 100vw;
    margin-top: 60%;
    transform: translateY(0%);
}
.card-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 20px;
}
.card-group-team {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    background: #2e2e2e;
    border-radius: 10px;
    padding: 20px;
    width: 40%;
    height: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-title {
    font-family: 'Poppins';
    font-size: 10px;
}
.card-team {
    background: #2e2e2e;
    border-radius: 10px;
    padding: 20px;
    width: 45%;
    height: 350px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-title {
    font-family: 'Poppins';
    font-size: 30px;
}
@media only screen and (max-width: 1400px) {
    .card-title {
        font-size: 30px;
    }
    .card {
        width: 100%;

    }
    .card-team {
        width: 100%
    }
    .container {
        margin-top: 400%;
        transform: translateY(0%);
    }
} 
@media only screen and (max-width: 1000px) {
    .img {
        display: none;
    }
    .abt {
        margin-top: -30%;
        margin-left: 30%;
        transform: translateY(0%);
        margin-bottom: 30%;
    }    
    .container {
        margin-top: 300%;
        transform: translateY(0%);
    }
    .content {
        width: 80%;
    }
    .container {
        margin-bottom: 100%;
        transform: translateY(0%);
    }
    .card-group {
        flex-direction: column;
    }
    .card-group-team {
        flex-direction: column;
    }
    .card {
        width: 100%;
        margin-top: 20px;
    }
    .card-team {
        width: 100%;
        margin-top: 20px;
    }
}
.icon-grp {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}
@media screen and (max-width: 1000px) and (orientation: landscape) {
    .content {
        width: 80%;
    }
    .img {
        display: none;
    }
    .container {
        margin-bottom: -165%;
        transform: translateY(0%);
    }
    .card-group {
        flex-direction: column;
    }
    .card-group-team {
        flex-direction: column;
    }
    .card {
        width: 100%;
        margin-top: 20px;
    }
    .card-team {
        width: 100%;
        margin-top: 20px;
    }
}

.img {
    border-radius: 10px;
    margin-left: 100%;
    transform: translateY(-80%)
}
.abt {
    width: 100%;
    height: 100%;
    margin-top: 200px;
    transform: translate(-30%,40%);
}
@media only screen and (max-width: 1400px) {
    .container {
        margin-top: 100%;
        transform: translateY(10%);
    }
}
@media only screen and (max-width: 1200px) {
    .container {
        margin-top: 110%;
        transform: translateY(10%);
    }
    .abt {
        margin-top: 100%;
        transform: translate(-30%,40%);
    }
}
@media only screen and (max-width: 760px) {
    .container {
        margin-top: 170%;
        transform: translateY(10%);
    }
    .abt {
        margin-top: 100%;
        transform: translate(-30%,40%);
    }
}
@media only screen and (max-width: 600px) {
    .container {
        margin-top: 220%;
        transform: translateY(10%);
    }
    .abt {
        margin-top: 100%;
        transform: translate(-30%,40%);
    }
}
@media only screen and (max-width: 500px) {
    .container {
        margin-top: 325%;
        transform: translateY(10%);
    }
    .abt {
        margin-top: 100%;
        transform: translate(-30%,40%);
    }
}
@media only screen and (max-width: 1000px) and (orientation: landscape) {
    .container {
        margin-top: 300%;
        transform: translateY(-100%);
    }
    .abt {
        margin-top: 100%;
        transform: translate(-30%,40%);
    }
}
body {
  background-color: #242424;
  color: white;
}
</style>