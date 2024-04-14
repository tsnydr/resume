<template>
  <div class="py-2">
    <div>
      <h3 class="text-xl font-urbanist font-bold">
        <slot name="company"></slot>
      </h3>
      </div>
      <div class="flex flex-row justify-between">
        <div>
        <h3 class="text-md font-urbanist font-thin italic">
          <slot name="title"></slot>        
        </h3>
      </div>
      <div>
        <h3 class="text-md font-urbanist font-thin">
          <Icon class="mx-1 mb-1" name="ph:calendar-dots-light" />
          <slot name="start"></slot>
          -
          <slot name="end"></slot>
        </h3>
      </div>
    </div>
    <div class="text-sm font-urbanist font-thin py-1">
      <slot name="description"></slot>    
    </div>
  </div>
</template>