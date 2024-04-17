<template>
  <div class="card">
    <Header />
    <div class="lg:max-h-[85%] lg:flex">
      <div class="w-full lg:w-11/12">
        <div class="divide-dotted divide-y-2 divide-opacity-50 lg:w-11/12">
          <About />
          <History />
          <Education />
        </div>
        <div class="divide-dotted divide-y-2 divide-opacity-50 lg:divide-y-0">
          <div class="m-3"></div>
          <div class="m-3"></div>
        </div>
      </div>
      <div class="w-full lg:w-1/12 lg:min-w-48 lg:order-first">
        <Side />
      </div>
    </div>
  </div>
</template>
