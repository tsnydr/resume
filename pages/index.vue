<template>
  <div class="card">
    <Header />
    <div class="lg:max-h-[85%] lg:flex">
      <div class="w-full grow lg:overflow-y-auto lg:overflow-hidden lg:w-9/12">
        <div class="divide-dotted divide-y-2 divide-opacity-50 lg:w-5/6">
          <About />
          <History />
          <Education />
        </div>
      </div>
      <div class="w-full grow lg:w-3/12 lg:min-w-60 order-last lg:order-first">
        <Side />
      </div>
    </div>
  </div>
</template>
