<template>
  <div id="activities">
    {{activities}}
  </div>
</template>

<script>
import {setDocumentTitle} from '../../utils/interaction'

export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params
    return {
      activities: 'activities'
    }
  },
  ready () {
    setDocumentTitle('activities')
  }
}
</script>

<style lang="less">
@import './activities';
</style>
