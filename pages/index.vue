<template>
  <div class="card">
    <Header />
    <div class="flex flex-row max-h-[85%]">
      <div class="w-3/12 min-w-60">
        <Side />
      </div>
      <div class="overflow-y-auto overflow-hidden w-9/12">
        <div class="divide-dotted divide-y-2 divide-opacity-50 w-5/6">
          <About />
          <History />
          <Education />
        </div>
      </div>
    </div>
  </div>
</template>
