export const collapseProps = {
  modelValue: {
    type: Array,
    default: []
  },
  accordion: {
    type: Boolean,
    default: false
  }
}

export const collapseItemProps = {
  name: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

// 这个 key 作为 provide/inject 的 key
export const collapseContextKey = Symbol('collapseContextKey')