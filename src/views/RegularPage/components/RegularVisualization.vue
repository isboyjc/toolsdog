<script setup>
// 注意需全局引入regulex.js
defineExpose({
  exportImage
})

const props = defineProps({
  // 正则表达式对象
  modelValue: {
    type: [Object, null],
    required: true
  },
  // 主题明暗模式
  mode: {
    type: String,
    required: true
  }
})

watch(
  [() => props.modelValue, () => props.mode],
  () => {
    nextTick(() => init(props.modelValue))
  },
  { immediate: true }
)

// 导出图片
function exportImage() {
  let ratio = window.devicePixelRatio || 1
  // 获取SVG画布元素
  let svg = window.graphCt.getElementsByTagName('svg')[0]
  // 获取SVG画布宽高
  let w = svg.clientWidth
  let h = svg.clientHeight
  // 创建Image对象
  let img = new Image()
  img.width = w
  img.height = h
  img.setAttribute('src', svgToBase64(svg))

  // 创建Canvas对象
  let canvas = document.createElement('canvas')

  canvas.width = w * ratio
  canvas.height = h * ratio
  let ctx = canvas.getContext('2d')
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

  // Image对象onload事件
  img.onload = function () {
    // 给一个背景颜色，不然导出的图片是透明的
    let bgColor = props.mode === 'dark' ? '#2e2e31' : '#f2f3f5'
    ctx.fillStyle = bgColor

    // 绘制Image对象到canvas画布
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0)

    // canvas画布转 Base64 并导出 png
    canvasToPictureDownload(canvas, `regexp_visualization_${Date.now()}`)
  }
}

// canvas转图片下载
function canvasToPictureDownload(canvas, name) {
  let a = document.createElement('a')
  // 将画布内的信息导出为png图片数据 Base64
  a.href = canvas.toDataURL('image/png')
  // 设定下载名称
  a.download = name
  // 点击触发下载
  a.click()
}

// 将svg转换为base64
function svgToBase64(svg) {
  return 'data:image/svg+xml,' + encodeURIComponent(svg.outerHTML)
}

// 初始化方法
function init(reg) {
  if (!reg) return
  document.getElementById('graphCt').innerHTML = ''
  let { parse, visualize, Raphael } = require('regulex')
  // 创建 Raphael 实例
  let paper = Raphael('graphCt', 0, 0)
  // 清空画布
  paper.clear()
  try {
    // 渲染正则图表
    visualize(parse(reg.source), reg.flags, paper, props.mode)
  } catch (e) {
    if (e instanceof parse.RegexSyntaxError) {
      let msg = ['Error:' + e.message, '']
      if (typeof e.lastIndex === 'number') {
        msg.push(reg)
        msg.push(new Array(e.lastIndex).join('-') + '^')
      }
      console.error(msg.join('\n'))
    } else {
      throw e
    }
  }
}
</script>

<template>
  <div
    v-if="props.modelValue"
    id="graphCt"
    class="w-full overflow-x-auto overflow-y-hidden"
  ></div>
</template>
