<template>
  <div>
    <TopNav />
    <b-container fluid>
      <b-row>
        <b-col sm="12" md="4" class="p-0">
          <h1 class="bg-black p-4">PowerShell Conference <span class="color-green">Europe</span></h1>
          <h2 class="p-4 text-gray">2022 event cancelled</h2>
        </b-col>
        <b-col sm="12" md="8" class="normaltext">
          <Nuxt />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<style>
html, body {
  font-family: 'Roboto Mono';
  background-color: #363636;
  color: #ffffff;
  letter-spacing: -0.3px;
}

.normaltext {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.color-green {
  color: rgb(47, 255, 186);
}

.bg-gray {
  color: #363636;
  background-color: #ffffffcc;
}

.text-gray {
  color: #bbbbbb;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.bg-black {
  background-color: #00000073;
}

p {
  font-weight: 400;
  font-size: 16px;
}

.white {
  color: #ffffff;
}

.white:hover {
  color: #ffffff88;
}

h1, h2, h3, .pagetitle {
  font-weight: 800;
  letter-spacing: -1.5px;
  font-family: 'Roboto Mono';
}


.pagetitle {
  font-size: 22px;
}

</style>