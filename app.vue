<template>
  <NuxtPage />
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-black dark:text-gray-200;
}
@page {
  size: A4;
  margin: 0;
}
@media print {
  html, body {
    width: 210mm;
    height: 297mm;
  }
  noPrint {
    display:none;
  }
}
</style>
