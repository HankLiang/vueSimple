<template>
  <div id="home">
    {{home}}
    <p> lalalalala</p>
  </div>
</template>

<script>
import {setDocumentTitle} from '../../utils/interaction'

export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params
    return {
      home: '首页'
    }
  },
  ready () {
    setDocumentTitle('home')
  }
}
</script>

<style lang="less">
@import './home';
</style>
