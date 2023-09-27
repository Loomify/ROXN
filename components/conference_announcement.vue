<template>
    <div class="css-selector">  
        <div class="css-middle">
        <p>avnce is a software company. We're currently developing our first product, but you can sign up for our newsletter to get notified when we launch it.</p>
        </div>
    </div>
</template>
<style scoped>
.css-selector {
    position: absolute;
    background: #374bff;
    background-size: 100% 100%;
    height: 10vh;
    width: 100vw;
    overflow: hidden;
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

@media only screen and (max-width: 600px) {
    .css-selector {
        height: 20vh;
    }
    .css-middle {
        font-size: 15px;
    }
}
</style>