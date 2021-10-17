<template>
  <div>
    <article class="min-h-screen">
      <div class="w-full h-screen relative flex flex-col justify-center items-center">
        <div class="pb-16">
          <img id="furso" draggable="false" src="~/static/icon.png" width="200" height="182" alt="Furso" class="opacity-0 relative"/>
          <svg id="title" width="200" height="69" class="asbolute my-4" viewBox="0 0 215 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
              <path d="M20.3864 71L24.9886 56.3409H49.0909L53.6932 71H71.8295L48.2727 1.18182H25.8068L2.25 71H20.3864ZM29.0114 43.5227L36.75 18.7727H37.2955L45.0682 43.5227H29.0114Z" stroke="white" stroke-width="2"/>
              <path d="M96.017 1.18182H79.3466V71H96.017V1.18182Z" stroke="white" stroke-width="2"/>
              <path d="M131.105 71.9886C144.844 71.9886 153.878 65.3409 155.787 55.0455L140.48 54.6023C139.185 58.0796 135.776 59.9546 131.412 59.9546C125.003 59.9546 121.048 55.6932 121.048 49.2841V48.8409H155.957V44.6818C155.957 27.4318 145.457 17.9546 130.594 17.9546C114.776 17.9546 104.616 28.7955 104.616 45.0227C104.616 61.7955 114.639 71.9886 131.105 71.9886ZM121.048 39.1591C121.287 33.9432 125.412 29.9886 130.935 29.9886C136.423 29.9886 140.378 33.8068 140.446 39.1591H121.048Z" stroke="white" stroke-width="2"/>
              <path d="M177.903 18.6364H160.994L175.449 44.8182L160.244 71H177.153L186.528 53.6136L196.142 71H212.812L197.642 44.8182L212.267 18.6364H195.46L186.528 35.8864L177.903 18.6364Z" stroke="white" stroke-width="2"/>
            </g>
            <defs>
              <filter id="filter0_d" x="0.857239" y="0.181824" width="233.69" height="92.8068" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div data-aos="fade" class="flex justify-center items-center">
        <div class="w-9/12">
          <h1 class="text-2xl text-center">I'm Alex, also known as "Alexou" or "Alekuso" on internet.</h1>
          <h1 class="text-2xl text-center m-2">I'm a student from Belgium.</h1>
          <h1 class="text-2xl text-center">I'm a javascript developer since 2018.</h1>
        </div>
      </div>
      <div data-aos="fade" class="flex justify-center items-center mt-32">
        <div class="w-3/6 skills">
          <h1 class="text-4xl font-bold mb-8 flex text-center justify-center items-center">My skills</h1>
          <div data-aos="fade" data-aos-delay="200">
            <div class="list-none font-semibold flex flex-col justify-center items-center mb-8">
              <p class="text-2xl">General</p><span class="block w-full bg-dark-3 h-4 rounded"><span class="bg-line-1 float-left h-full rounded" style="width: 92%"></span></span>
            </div>
            <div class="list-none font-semibold flex flex-col justify-center items-center mb-8">
              <p class="text-2xl">Backend</p><span class="block w-full bg-dark-3 h-4 rounded"><span class="bg-line-2 float-left h-full rounded" style="width: 80%"></span></span>
            </div>
            <div class="list-none font-semibold flex flex-col justify-center items-center mb-8">
              <p class="text-2xl">Frontend</p><span class="block w-full bg-dark-3 h-4 rounded"><span class="bg-line-3 float-left h-full rounded" style="width: 15%"></span></span>
            </div>
          </div>
        </div>
      </div>
      <footer class="w-full select-none relative flex flex-col items-center justify-center pt-32 mb-2">
        <div class="flex items-center justify-center opacity-50">
          <a class="mx-2" href="https://discord.gg/Hkrdv7bvb4" target="_blank">Alexou#0001</a>
          <a class="mx-2" href="https://twitter.com/Alekuso_" target="_blank"><img draggable="false" src="~/static/twitter.svg" alt="twt" style="height: 24px; width: 24px;"/></a>
          <a class="mx-2" href="https://github.com/Alekuso" target="_blank"><img draggable="false" src="~/static/github.png" alt="gh" style="height: 24px; width: 24px"></a>
          <a class="mx-2" href="https://puroto.net" target="_blank"><img draggable="false" src="~/static/puroto.png" alt="prt" style="height: 24px; width: 24px"/></a>
        </div>
        <a href="https://github.com/Alekuso/alekuso.github.io" target="_blank" class="mt-2 opacity-50">Check out the source code!</a>
      </footer>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
