<template>
  <textarea class="autosize-textarea" rows="{{defaultRow}}" v-model="text"></textarea>
</template>

<style scoped lang="less">
@import '../styles/variables.less';
.autosize-textarea {
  width: 100%;
  border: none;
  outline: none;
  line-height: 1.5;
  background-color: @white;
}
</style>

<script>
import autosize from 'autosize'

export default {
  replace: true,
  props: {
    text: {
      required: true,
      twoWay: true
    },
    defaultRow: {
      type: Number,
      required: false,
      default: 1
    }
  },
  ready () {
    autosize(this.$el)
  }
}
</script>
