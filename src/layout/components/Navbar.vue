<template>
  <div class="w-full h-full flex px-20px box-border">
    <div class="h-full flex">
      <slot name="left" />
    </div>
    <div class="h-full flex-1">
      <slot />
      <slot name="center" />
    </div>
    <div class="h-full flex flex-shrink-0 items-center">
      <div>
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
