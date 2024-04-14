<template>
  <div class="p-5">
    <section>
      <h1 class="text-sm font-mono font-black">
        <a href="https://github.com/tsnydr/resume">
          <Icon name="mdi:github" class="mx-1" />
          <span class="noPrint">repo</span>
          <span class="onlyPrint">/tsnydr</span>
        </a>
      </h1>
      <h1 class="text-sm font-mono font-black">
        <a href="https://linkedin.com/in/tsnydr">
          <Icon name="mdi:linkedin" class="mx-1" />
          <span class="noPrint">profile</span>
          <span class="onlyPrint">/in/tsnydr</span>
        </a>
      </h1>
      <h1 class="text-sm font-mono font-black">
        <a href="mailto:trstn@snydr.xyz">
          <Icon name="mdi:email-outline" class="mx-1" />
          <span>trstn@snydr.xyz</span>
        </a> 
      </h1>
      <h1 class="text-sm font-mono font-black">
        <Icon name="bi:phone" class="mx-1" />
        <span>717.451.5216</span>
      </h1>
    </section>
  </div>
</template>

<style>
.onlyPrint {
  display:none;
}
@media print {  
  .onlyPrint {
    display:inline;
  }
  .noPrint {
    display:none;
  }
}
</style>