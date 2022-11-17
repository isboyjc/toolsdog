<script>
import IconRiLayoutTopFill from '~icons/ri/layout-top-fill'
export default {
  name: 'DefaultLayout',
  icon: IconRiLayoutTopFill,
  title: '默认布局'
}
</script>

<template>
  <div>
    <div class="default-layout">
      <a-layout>
        <a-affix>
          <a-layout-header>
            <Navbar>
              <!-- left插槽 -->
              <template #left>
                <Logo />
              </template>

              <!-- 默认插槽和center插槽，默认插槽可不加template直接写内容，作用同center插槽 -->
              <template #center>
                <Menu />
              </template>

              <!-- right插槽 -->
              <template #right>
                <SwitchLayout />
                <Github />
              </template>
            </Navbar>
          </a-layout-header>
        </a-affix>
        <a-layout-content class="min-h-[calc(100vh-58px)]">
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </a-layout-content>
        <a-layout-footer>
          <Footer />
        </a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<style scoped>
.default-layout :deep(.arco-layout-header),
.default-layout :deep(.arco-layout-footer),
.default-layout :deep(.arco-layout-content) {
  @apply text-[var(--color-text-1)] text-14px;
}

.default-layout :deep(.arco-layout-header) {
  @apply w-full h-58px overflow-hidden;
  @apply bg-[var(--color-bg-3)]  border-b-[var(--color-border-1)] border-b-solid border-b-width-1px box-border;
}
.default-layout :deep(.arco-layout-content) {
  @apply flex flex-col items-center;
  @apply bg-[var(--color-bg-1)] relative;
}
.default-layout :deep(.arco-layout-footer) {
  @apply w-full flex justify-center items-center;
  @apply border-t-[var(--color-border-1)] border-t-solid border-t-width-1px box-border;
  @apply bg-[var(--color-bg-2)] text-[var(--color-text-1)] text-14px;
}
</style>
