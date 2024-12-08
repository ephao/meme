<template>
  <div class="relative min-h-screen flex flex-col">
    <div class="absolute inset-0 z-[-1] opacity-10">
      <img src="/iLoveMeme.svg" alt="background" class="w-full h-full object-cover fixed" />
    </div>
    <CommonNavbar></CommonNavbar>
    <CommonContainer class="flex-grow">
      <slot></slot>
    </CommonContainer>
    <CommonFooter></CommonFooter>
  </div>
</template>
