<script setup lang="ts">
import Navbar from './base-components/Navbar.vue'
import Footer from '/components/Footer.vue'

// Make about part of navbar
</script>
<template>
    
    <Navbar />
    <div class="css-selector">
        <div class="c">
            <h1 class="pos hx">About avnce</h1>
            <br>
            <p class="pos1 x"><i>Innovation. Power. Speed. That is what makes avnce.</i><br>Since 2022 avnce (formerly aviance) has been trying to change the hosting dynamic by creating the most powerful of applications. Now, avnce comes from its hosting roots and diversifies.</p>
    </div>
    <br>
    <br>
    </div>
    <div class="scale">
        <div class="values">
            <h1 class="cs">Core Values:</h1>
            <br>
            <div class="card-group">
                <div class="card">
                    <div class="card-content">
                        <h2 style="color: white; font-size: 120%; text-align: center;"> 🔒 Security</h2>
                        <p style="color: white; font-size: 65%; text-align: center; font-family:'Segoe UI Bold', Tahoma, Geneva, Verdana, sans-serif">From Kosciuszko to Xen, We believe that security is important. That is why we build our applications to have security from the ground up.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <h2 style="color: white; font-size: 120%; text-align: center;"> Privacy</h2>
                        <p style="color: white; font-size: 65%; text-align: center; font-family:'Segoe UI Bold', Tahoma, Geneva, Verdana, sans-serif">We are serious when we mean this. avnce takes privacy to the next-level by ensuring that only <strong>you</strong> can see your content.</p>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="team">
            <h1 class="cs">The Team:</h1>
            <br>
            <div class="card-group">
                <div class="card2">
                    <div class="card-content">
                        <div class="img-tgth">
                            <img src="/images/icons/defy.webp" style="width: 20%; height: 20%; border-radius: 50%;"> <h2 style="color: white;">de-y</h2>
                            <p style="color: white; font-size: 65%; text-align: center; font-family:'Segoe UI Bold', Tahoma, Geneva, Verdana, sans-serif"><br>CEO/Lead Developer</p>
                        </div>
                        <br>
                        <p style="color: white; font-size: 65%; text-align: center; font-family:'Segoe UI Bold', Tahoma, Geneva, Verdana, sans-serif">
                            de-y is the CEO and Lead Developer of avnce. He is a 15 year old developer who has been coding since he was 9. He has a passion for coding and loves to make new things.<br>

<br>                            <a href='https://github.com/de-y' style="color: white;"><img src="/images/icons/github.svg" style="width: 10%; height: 10%; fill: white;"></a>
                        </p>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <Footer />
</template>
<style>
.hx {
    font-family: 'Poppins', sans-serif;
    src: url('/poppins/Poppins-Bold.ttf');
    font-size: 300%;
}
.values {
    font-family: 'Poppins', sans-serif;
    src: url('/poppins/Poppins-Bold.ttf');
    font-size: 150%;
    transform: translate(5%,0%);
    position: absolute;
    top: 50%;
    left: 51.5%;
    transform: translate(-50%, 50%);
}
.team {
    font-family: 'Poppins', sans-serif;
    src: url('/poppins/Poppins-Bold.ttf');
    font-size: 150%;
    transform: translate(5%,0%);
    position: absolute;
    top: 50%;
    left: 51.5%;
    transform: translate(-100%, 110%);
}
.c {
    background: image-url('/images/.png');
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}
.cs {
    color: white;
    position: absolute;
    left: 3%;
    top: -8%    
}
.x {
    overflow-wrap: break-word;
    inline-size: 40vw;
    font-size: 110%;
}
.pos {
    font-family: 'Poppins', sans-serif;
    src: url('/poppins/Poppins-Bold.ttf');
}
.pos1 {
    font-family: 'Arial', 'light';
    src: url('/poppins/Poppins-Light.ttf');
}
.css-selector {
    background: linear-gradient(227deg, #08d432, #ffd294);
    background-size: 400% 400%;

    -webkit-animation: Pollato 32s ease infinite;
    -moz-animation: Pollato 32s ease infinite;
    -o-animation: Pollato 32s ease infinite;
    animation: Pollato 32s ease infinite;
    width: max-content;
}

@-webkit-keyframes Pollato {
    0%{background-position:0% 13%}
    50%{background-position:100% 88%}
    100%{background-position:0% 13%}
}
@-moz-keyframes Pollato {
    0%{background-position:0% 13%}
    50%{background-position:100% 88%}
    100%{background-position:0% 13%}
}
@-o-keyframes Pollato {
    0%{background-position:0% 13%}
    50%{background-position:100% 88%}
    100%{background-position:0% 13%}
}
@keyframes Pollato {
    0%{background-position:0% 13%}
    50%{background-position:100% 88%}
    100%{background-position:0% 13%}
}
.card-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.card {
    background-color: #303030;
    width: 21vw;
    height: 12vw;
    border-radius: 5%;
    margin: 1vw;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.card2 {
    background-color: #303030;
    width: 21vw;
    height: 20vw;
    border-radius: 5%;
    margin: 1vw;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.card-content {
    padding: 1vw;

}
.img-tgth {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}
.img-tgth img {
    margin-right: 1vw;
}
</style>