<template>
  <div class="body">
    <router-view></router-view>
  </div>
  <hk-footer></hk-footer>
</template>

<style lang="less">
@import '../src/styles/reset';
@import '../src/styles/mixin';
@import '../src/styles/util';

body {
  position: relative;
}

.body {
  padding-bottom: 1.333333rem;
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
