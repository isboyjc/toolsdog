<script setup>
import * as regPresetsObj from '@/utils/regexp.js'
import { useSystemStore } from '@/stores/system'
const { currentMode } = storeToRefs(useSystemStore())

// 大小
const size = ref('large')
// 正则表达式对象
const reg = ref(null)
// 正则表达式字符串
const regStr = ref('')
// 正则表达式修饰符
const regFlag = ref([])
watchEffect(() => {
  try {
    reg.value = regStr.value
      ? new RegExp(regStr.value, regFlag.value.join(''))
      : null
  } catch (err) {
    reg.value = null
  }
})

// 预设自动搜索
const auto = ref(true)
// 正则预设列表
const regPresets = ref([])
// 正则预设匹配方法
const regPresetMatch = value => {
  if (value && auto.value) {
    regPresets.value = [...Object.values(regPresetsObj)]
      .filter(r => r.name.includes(value) || r.source.includes(value))
      .map(v => {
        return {
          label: v.name,
          regexp: v,
          value: v.source
        }
      })
  } else {
    regPresets.value = []
  }
}
// 正则预设选中方法
const regPresetSelect = r => {
  let selected = regPresets.value.find(v => v.value === r)
  if (selected) regFlag.value = selected.regexp.flags.split('')
}

// 待匹配字符串
const matchStr = ref('')
// 匹配结果
const matchingResults = computed(
  () => matchStr.value.match(reg.value)?.filter(v => v) || []
)
// 匹配结果格式化
const matchingFormat = computed(() => {
  let res = '',
    str = matchStr.value
  let n = 1
  matchingResults.value.forEach(v => {
    if (n > 4) n = 1
    let matchStr = str.substr(0, v.length + str.indexOf(v))
    str = str.substr(v.length + str.indexOf(v))
    res += matchStr.replace(
      v,
      `<span class="matching matching${n}">${v}</span>`
    )
    n++
  })

  return res + str
})

// 可视化
const visualization = ref(true)
// 可视化组件实例
const regVisualizationRef = ref(null)
// 是否是黑暗模式
const isDark = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: 'light',
  initialValue: currentMode.value?.name,
  storageKey: null
})
// 当前颜色模式
const mode = computed(() => {
  if (currentMode.value?.name == 'auto') {
    return isDark.value ? 'dark' : 'light'
  }
  return currentMode.value?.name
})
// 导出正则可视化图片
const exportRegVisualizationToImg = () => {
  regVisualizationRef.value && regVisualizationRef.value?.exportImage()
}

const { copy, text, isSupported } = useClipboard({ source: reg })
// Copy正则到剪贴板
const regCopy = async () => {
  if (!isSupported.value) return AMessage.info('不支持复制')
  await copy()
  AMessage.success('复制成功：' + text.value)
}
</script>
<template>
  <div class="max-w-1200px w-full p-20px box-border">
    <div class="flex justify-start items-center">
      <a-tooltip
        :content="`点击${auto ? '关闭' : '开启'}预设正则自动匹配`"
        position="bottom"
      >
        <a-button :size="size" @click="auto = !auto">
          <template #icon>
            <icon-material-symbols-astrophotography-auto
              :class="auto ? 'text-[rgb(var(--arcoblue-6))]' : ''"
            />
          </template>
        </a-button>
      </a-tooltip>

      <a-auto-complete
        class="ml-10px"
        v-model="regStr"
        :data="regPresets"
        @search="regPresetMatch"
        @select="regPresetSelect"
        :placeholder="`请输入正则表达式${
          auto ? '或输入文字选择自动匹配的预设正则' : ''
        }`"
        allow-clear
        :size="size"
      >
        <template #prepend>
          <a-tooltip
            :content="reg ? '正则表达式正确' : '正则表达式有误'"
            position="bottom"
            mini
          >
            <icon-jam-triangle-danger-f
              class="text-[rgb(var(--orange-6))]"
              v-if="!reg"
            />
            <icon-mdi-hand-okay class="text-[rgb(var(--green-6))]" v-else />
          </a-tooltip>

          <span class="ml-5px">/</span>
        </template>
        <template #append>
          <span> /{{ reg?.flags || regFlag?.join('') }}</span>
        </template>
      </a-auto-complete>

      <a-popover title="选择修饰符" position="bl">
        <a-button :size="size" class="ml-10px">
          <template #icon>
            <icon-mdi-filter-multiple
              :class="regFlag.length > 0 ? 'text-[rgb(var(--arcoblue-6))]' : ''"
            />
          </template>
        </a-button>
        <template #content>
          <div class="min-w-200px">
            <a-checkbox-group
              :size="size"
              v-model="regFlag"
              direction="vertical"
            >
              <a-checkbox value="g"> -g：全局匹配 </a-checkbox>
              <a-checkbox value="i"> -i：忽略大小写</a-checkbox>
              <a-checkbox value="m"> -m：多行匹配</a-checkbox>
              <a-checkbox value="s"> -s：特殊字符. 包含换行符</a-checkbox>
            </a-checkbox-group>
          </div>
        </template>
      </a-popover>

      <a-tooltip
        :content="`点击${visualization ? '关闭' : '开启'}可视化解析`"
        position="bottom"
      >
        <a-button
          :size="size"
          class="ml-10px"
          @click="visualization = !visualization"
        >
          <template #icon>
            <icon-ic-sharp-visibility
              class="text-[rgb(var(--arcoblue-6))]"
              v-if="visualization"
            />
            <icon-ic-sharp-visibility-off v-else />
          </template>
        </a-button>
      </a-tooltip>

      <a-tooltip content="下载解析图片" position="bottom">
        <a-button
          :size="size"
          class="ml-10px"
          v-if="visualization && reg"
          @click="exportRegVisualizationToImg"
        >
          <template #icon>
            <icon-icon-park-outline-down-picture />
          </template>
        </a-button>
      </a-tooltip>

      <a-tooltip content="点击 copy 正则表达式" position="bottom">
        <a-button :size="size" class="ml-10px" v-if="reg" @click="regCopy">
          <template #icon>
            <icon-icon-park-solid-copy />
          </template>
        </a-button>
      </a-tooltip>
    </div>

    <div class="mt-20px bg-[var(--color-fill-2)]">
      <RegularVisualization
        ref="regVisualizationRef"
        v-if="visualization"
        v-model="reg"
        :mode="mode"
      />
    </div>

    <div class="w-full mt-20px">
      <a-textarea
        v-model="matchStr"
        default-value=""
        placeholder="请输入要匹配的字符串"
        :auto-size="{
          minRows: 3,
          maxRows: 6
        }"
      />

      <div
        class="w-full min-h-100px bg-[var(--color-fill-2)] whitespace-pre-wrap break-words indent-0 leading-22px mt-20px px-12px py-4px box-border"
        v-html="matchingFormat || '无匹配结果'"
      ></div>

      <div
        v-if="matchingResults.length > 0"
        class="w-full min-h-100px bg-[var(--color-fill-2)] whitespace-pre-wrap break-words indent-0 leading-22px mt-20px px-12px py-4px box-border"
      >
        <div>共 {{ matchingResults.length }} 处匹配：</div>
        <div v-for="(res, i) of matchingResults" :key="i">{{ res }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.matching {
  @apply px-0px rounded-4px box-border;
}
.matching1 {
  @apply bg-[rgb(var(--arcoblue-2))];
}
.matching2 {
  @apply bg-[rgb(var(--green-2))];
}
.matching3 {
  @apply bg-[rgb(var(--orange-2))];
}
.matching4 {
  @apply bg-[rgb(var(--red-2))];
}
</style>
