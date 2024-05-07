<template>
  <div class="card">
    <Header />
    <div class="lg:flex">
      <div class="w-full lg:w-11/12">
        <div class="lg:w-11/12">
          <About />
          <hr class="border-dotted border-opacity-50 m-3"/>
          <History />
          <hr class="border-dotted border-opacity-50 m-3"/>
          <Education />
          <hr class="lg:hidden border-dotted border-opacity-50 m-3"/>
        </div>        
      </div>
      <div class="w-full lg:w-1/12 lg:min-w-48 lg:order-first">
        <Side />
      </div>
    </div>
  </div>
</template>
