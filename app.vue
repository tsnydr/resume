<script setup>
useHead({ title: "Tristan's Resume" })
</script>

<template>
  <NuxtPage />
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-black dark:text-gray-200;
  max-width: 216mm;
  margin: auto;
}

.card{
  @apply container dark:bg-gray-500 m-auto w-full rounded-md shadow-xl
}

h1 {
  @apply text-4xl font-urbanist font-black
}

h2 {
  @apply font-mono font-thin
}

h3 {
  @apply text-lg font-urbanist font-bold
}

p {
  @apply font-urbanist text-sm py-1
}

@page {
  size: letter;
  margin: 0mm 0mm 0mm 0mm;
}

@media print {
  html, body {
    width: 216mm;
    height: 279mm;
    @apply bg-white text-black
  }

  .card{
    @apply container h-screen m-auto w-full shadow-none
  }

  .onlyPrint {
    display:inline;
  }

  .noPrint {
    display:none;
  }

  .history {
    page-break-inside: avoid;
  }
}
</style>
