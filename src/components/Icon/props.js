// 该文件负责定义组件的属性 props
export default {
  // 图标
  icon: {
    type: String,
    required: true
  },
  color: String,
  // 旋转
  rotation: {
    type: [Number, String]
  },
  // 翻转
  flip: {
    type: [Number, String]
  },
  // 下面是动画效果相关的属性
  beat: Boolean,
  'beat-fade': Boolean,
  bounce: Boolean,
  fade: Boolean,
  shake: Boolean,
  spin: Boolean,
  'spin-reverse': Boolean,
  'spin-pulse': Boolean,
  // 下面是自定义属性
  type: String,
  // 大小
  size: Number,
}
