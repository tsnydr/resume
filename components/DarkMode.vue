<script setup>
const colorMode = useColorMode()

const icon = computed(() => {
  switch (colorMode.value) {
    case 'dark':
      return 'ph:sun'
    case 'light':
      return 'ph:moon'
    default:
      return 'ph:sun'
  }
})

function toggle() {
  if (colorMode.value === 'dark') 
    colorMode.preference = 'light'
  if (colorMode.value === 'light') 
    colorMode.preference = 'dark'
}
</script>

<template>
  <div class="noPrint">
    <button  @click="toggle" >
      <Icon :name="icon"/>
    </button>    
  </div>
</template>