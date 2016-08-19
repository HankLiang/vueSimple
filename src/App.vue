<template>
  <div class="body">
    <router-view></router-view>
  </div>
  <hk-footer></hk-footer>
</template>

<style lang="less">
@import '../src/styles/reset';
@import '../src/styles/mixin';

.body {
  height: 100%;
}
</style>

<script>
import HkFooter from './components/HkFooter.vue'

export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params
  },
  components: {
    HkFooter
  }
}
</script>
