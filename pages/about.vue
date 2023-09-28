<script setup lang="ts">
    import Navbar from './base-components/Navbar.vue'
</script>
<template>
    <Navbar />
    <div class="container">
      <div class="content">
        <h1 class="title"> about avnce</h1>
        <p>Since July of 2022, avnce (formerly aviance.app) has been working on making the world of hosting better. Now, we come from our roots and diversify into more software and projects to be able to meet your software needs.</p>
        <br>
        <h1 class="title">core values:</h1>
        <p>Our core values are what we stand for. They are the foundation of our company and what we believe in.</p>
        <div class="card-group">
            <div class="card">
                <h1 class="card-title">🔒Privacy</h1>
                <p>Privacy is an avnce-guaranteed right. Since its founding, avnce has always kept privacy-first by letting you not see what others can. We even have something called a privacy screen letting you know what happens to your data at an avnce related service.</p>
            </div>
            <div class="card">
                <h1 class="card-title">🔨 Service</h1>
                <p>Service is a core value of avnce. We believe that service is the most important thing to a customer. We strive to make sure that you are happy with our service and that you are satisfied with our service.</p>
            </div>          
        </div>
        <br>
        <h1 class="title">Team:</h1>           
        <p>The team is what makes avnce, avnce! Meet the lead team here:</p>
        <br>
        <div class="card-group-team">
            <div class="card-team">
                <div class="icon-grp">
                    <img src="/images/icons/defy.webp" alt="avatar" width="100px" height="100px" style="border-radius: 50%;">
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
            <div class="card-team">
                <div class="icon-grp">
                    <img src="/images/icons/icn_unknown.png" alt="avatar" width="100px" height="100px" style="border-radius: 50%;">
                    <h1 class="card-title">TBD</h1><br>
                </div><br>
                <p>Someone will be placed here; as of right now, this card is under a TBD status.</p> <br>
                <br>
                <br>
                <br>
            </div>
        </div>
      </div>
    </div>
    <div class="footer">

    </div>
</template>

<style scoped>
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
    /* Make it scalable with the screensize and can be adjusted */
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
} 
@media only screen and (max-width: 1000px) {
    .content {
        width: 80%;
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
</style>