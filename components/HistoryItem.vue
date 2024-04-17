<template>
  <div class="py-2 history">
    <div>
      <h3>
        <slot name="company"></slot>
      </h3>
      </div>
      <div class="flex flex-row justify-between">
        <div>
          <h2>
            <slot name="title"></slot>
          </h2>
        </div>
        <div>
          <h2 class="whitespace-nowrap">
            <Icon class="mx-1 mb-1" name="ph:calendar-dots-light" />
            <slot name="start"></slot>
            -
            <slot name="end"></slot>
          </h2>
        </div>
      </div>
    <div>
      <slot name="description"></slot>
    </div>
  </div>
</template>