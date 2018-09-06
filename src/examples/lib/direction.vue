<template>
  <div id="direction">
    <div class="row">
      <div class="col">
        <div class="photo-container" style="background-image:url(img/1.jpg)"></div>
        <h2>图片一 </h2>
        <div class="slide">
        </div>
      </div>
      <div class="col">
        <div class="photo-container" style="background-image:url(img/2.jpg)"></div>
        <h2>图片二 </h2>
        <div class="slide">
        </div>
      </div>
      <div class="col">
        <div class="photo-container" style="background-image:url(img/3.jpg)"></div>
        <h2>图片三 </h2>
        <div class="slide">
        </div>
      </div>
      <div class="col">
        <div class="photo-container" style="background-image:url(img/4.jpg)"></div>
        <h2>图片四 </h2>
        <div class="slide">
        </div>
      </div>
    </div>


    <div class="cube-box">
      <div class="cube">
        <div class="cube-1"></div>
        <div class="cube-2"></div>
        <div class="cube-3"></div>
        <div class="cube-4"></div>
        <div class="cube-5"></div>
        <div class="cube-6"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style type="text/css">
  .cube-box{
    width: 500px;
    height: 500px;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 0 0 -150px; 
    perspective: 3000px;
    perspective-origin: 50% 50%;
  }
  .cube{
    height: 100%;
    transform-style: preserve-3d;
  }
  .cube > div{
    width: 300px;
    height: 300px;
    position: absolute;
    top: 100px;
    left: 100px;
    border: 1px solid #fff;
  }
  .cube-1{
    transform: translate3d(0,0,0);
  }
  .cube-2{
    transform: rotateY(-104deg) translateZ(150px) translateX(-150px);
  }
  .cube-3{
    transform: rotateY(75deg) translateZ(126px) translateX(149px) translateY(60px);
  }
  /* .cube-4{
    transform: rotateX(-93deg) translateZ(-149px) translateX(0px);;
  }
  .cube-5{
    transform: rotateY(-93deg) translateZ(150px) translateX(-150px);
  } */
  .cube-6{
    transform: translateZ(-300px) translateX(78px);
  }















  .col {
    overflow: hidden;
    position: relative;
  }

  .slide {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: all 0.275s ease-in-out, visibility 0s 0.275s;
    transition: all 0.275s ease-in-out, visibility 0s 0.275s;
    visibility: hidden;
    will-change: transform;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }

  .row:hover~.row .slide {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  .row:hover .slide {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  .row:hover .col:hover~.col .slide {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .row:hover .col:hover .slide {
    -webkit-transform: none;
    transform: none;
    visibility: visible;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .col {
    color: #fff;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 260px;
    position: relative;
  }

  .col h2 {
    font-weight: 300;
    font-size: 1.33333rem;
    line-height: 1.25;
    margin: 0;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 0;
  }

  .col:nth-child(2) {
    min-width: 20%;
  }

  .col:nth-child(4) {
    min-width: 33%;
  }


  .photo-container {
    background: #0f0523 50% 50% / cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: 1s;
    transition: 1s;
    -webkit-transform-origin: bottom right;
    transform-origin: bottom right;
  }


  .slide {
    background: rgba(25, 1, 21, 0.8);
    padding: 0 1.5rem;
  }
</style>