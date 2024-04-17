<template>
  <div class="m-3 w-full">
    <div class="grid grid-cols-2 lg:grid-cols-none">
      <div class="md:width-full">
        <h2>
          <a href="https://github.com/tsnydr/resume">
            <Icon name="mdi:github" class="mx-1" />
            <span class="noPrint">repo</span>
            <span class="onlyPrint">/tsnydr</span>
          </a>
        </h2>
      </div>
      <div class="md:width-full">
        <h2>
          <a href="https://linkedin.com/in/tsnydr">
            <Icon name="mdi:linkedin" class="mx-1" />
            <span class="noPrint">profile</span>
            <span class="onlyPrint">/in/tsnydr</span>
          </a>
        </h2>
      </div>
      <div class="md:width-full">
        <h2>
          <a href="mailto:trstn@snydr.xyz">
            <Icon name="mdi:email-outline" class="mx-1" />
            <span>t@snydr.xyz</span>
          </a>
        </h2>
      </div>
      <div class="md:width-full">
        <h2>
          <Icon name="bi:phone" class="mx-1" />
          <span>717.451.5216</span>
        </h2>
      </div>
    </div>
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