<template>
  <div id="orders">
    {{orders}}
  </div>
</template>

<script>
import {setDocumentTitle} from '../../utils/interaction'

export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params

    return {
      orders: 'orders'
    }
  },
  ready () {
    setDocumentTitle('orders')
  }
}
</script>

<style lang="less">
@import './orders';
</style>
