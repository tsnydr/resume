<template>
  <div class="container dark:bg-gray-500 h-screen m-auto w-full max-w-screen-lg border-separate rounded-md shadow-xl">
    <Header />
    <div class="flex flex-row max-h-[85%]">
      <div class="w-2/12 min-w-60">
        <Side />
      </div>
      <div class="divide-dotted divide-y-2 divide-opacity-50 overflow-y-auto overflow-hidden w-8/12">
        <About />
        <History />
        <Education />
      </div>
    </div>
  </div>
</template>
