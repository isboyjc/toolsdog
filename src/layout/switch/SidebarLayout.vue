<script>
import IconRiLayout5Fill from '~icons/ri/layout-5-fill'
export default {
  name: 'SidebarLayout',
  icon: IconRiLayout5Fill,
  title: '边栏布局'
}
</script>

<script setup>
// 侧边栏收缩状态
const collapsed = ref(false)

// 侧边栏收缩触发事件
const handleCollapse = (val, type) => {
  const content = type === 'responsive' ? '响应式触发' : '点击触发'
  console.log(`${content}侧边栏，当前状态：${val}`)
  collapsed.value = val
}
</script>

<template>
  <div class="sidebar-layout">
    <a-layout>
      <a-affix>
        <a-layout-header>
          <Navbar>
            <template #left> <Logo /> </template>

            <template #right>
              <SwitchLayout />
              <Github />
            </template>
          </Navbar>
        </a-layout-header>
      </a-affix>

      <a-layout>
        <a-affix :offsetTop="58">
          <a-layout-sider
            breakpoint="lg"
            :width="220"
            height="calc(100vh-58px)"
            collapsible
            :collapsed="collapsed"
            @collapse="handleCollapse"
          >
            <Menu mode="vertical" />
          </a-layout-sider>
        </a-affix>

        <a-layout>
          <a-layout-content class="min-h-[calc(100vh-58px)]">
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
          </a-layout-content>
          <a-layout-footer> <Footer /> </a-layout-footer>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped>
.sidebar-layout :deep(.arco-layout-header),
.sidebar-layout :deep(.arco-layout-footer),
.sidebar-layout :deep(.arco-layout-content) {
  @apply text-[var(--color-text-1)] text-14px;
}

.sidebar-layout :deep(.arco-layout-header) {
  @apply w-full h-58px;
  @apply bg-[var(--color-bg-3)]  border-b-[var(--color-border-1)] border-b-solid border-b-width-1px box-border;
}
.sidebar-layout :deep(.arco-layout-content) {
  @apply flex flex-col items-center;
  @apply bg-[var(--color-bg-1)] relative;
}
.sidebar-layout :deep(.arco-layout-footer) {
  @apply w-full flex justify-center items-center;
  @apply border-t-[var(--color-border-1)] border-t-solid border-t-width-1px box-border;
  @apply bg-[var(--color-bg-2)] text-[var(--color-text-1)] text-14px;
}

.sidebar-layout :deep(.arco-layout-sider) {
  @apply h-[calc(100vh-58px)];
}
.sidebar-layout :deep(.arco-layout-sider),
.sidebar-layout :deep(.arco-layout-sider-trigger) {
  @apply border-r-[var(--color-border-1)] border-r-solid border-r-width-1px box-border;
}
</style>
