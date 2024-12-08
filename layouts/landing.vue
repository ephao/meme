<template>
  <div class="relative min-h-screen">
    <div class="absolute inset-0 z-[-1] opacity-10">
      <img src="/iLoveMeme.svg" alt="background" class="w-full h-full object-cover" />
    </div>
    <CommonNavbar></CommonNavbar>
    <CommonContainer>
      <slot></slot>
    </CommonContainer>
    <CommonFooter></CommonFooter>
  </div>
</template>
