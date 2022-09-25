<script setup>
const handleClickMini = () => {
  AMessage.info('hello isboyjc, click mini AButton!')
}
</script>
<template>
  <div>hello isboyjc, This is toolsdog home page!</div>
  <a-space>
    <a-button type="primary" size="mini" @click="handleClickMini">
      Mini
    </a-button>
    <a-button type="primary" size="small">Small</a-button>
    <a-button type="primary">Medium</a-button>
    <a-button type="primary" size="large">Large</a-button>
  </a-space>

  <HelloWorld />

  <div class="text-20px">哈哈哈</div>
  <!-- ICON -->
  <div class="icon-style bg-pink h-100px">
    <icon-ep-alarm-clock class="text-20px" />
    <icon-home-copy class="text-20px" />
    <icon-home-download class="text-20px" />
  </div>
</template>
<style scoped>
.icon-style {
  @apply mt-10px;
}
</style>
