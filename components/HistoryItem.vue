<template>
  <div>
    <h3 class="text-lg font-urbanist font-bold">
      <slot name="company"></slot>
    </h3>
  </div>
  <div class="flex flex-row justify-between">
    <div>
      <h3 class="text-md font-urbanist font-thin">
        <slot name="title"></slot>        
      </h3>
    </div>
    <div>
      <h3 class="text-md font-urbanist font-thin">
        <slot name="start">
        </slot>
        -
        <slot name="end"></slot>
      </h3>
    </div>
  </div>
  <div class="p-2">
    <slot name="description"></slot>    
  </div>
</template>