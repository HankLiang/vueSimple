<template>
  <div id="activities">
    {{name}} </br>
    {{password}}
  </div>
</template>

<script>
import {setDocumentTitle, showToast} from '../../utils/interaction'

const callApiDemo = (vm) => {
  const resource = vm.$resource('/asiainfo_weixin/login/login')
  return resource.get().then((resp) => {
    const data = resp.data
    return {
      name: data.name,
      password: data.password
    }
  }, (error) =>{
    const message = JSON.parse(error.data.message)
    showToast(message)
  })
}

export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params

    return {
      activities: 'activities'
    }
  },
  route: {
    data (transition) {
      return callApiDemo(this)
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
