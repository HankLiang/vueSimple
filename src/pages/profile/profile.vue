<template>
  <div id="profile">
    <div class="header">
      <div class="info centered">
        <img class="avatar" :src="avatar">
        <div>{{name}}</div>
      </div>

      <div class="sign" v-link="{ name: 'signin'}">注册</div>
    </div>
  </div>
</template>

<script>
import {setDocumentTitle} from '../../utils/interaction'

export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params

    return {
      name: 'Hank shuaiguo',
      avatar: 'https://o5wtsnvqp.qnssl.com/9798a7d2fed617e072ee94d6.jpg'
    }
  },
  methods: {
    jump() {
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5b38a65a0b95a857&redirect_uri=http%3A%2F%2Fdianyuanjiangli.com%2Fxyjl%2Fyx%2Fappeal%2Fappeal%21toAppealOfccPage.action&response_type=code&scope=snsapi_base&state=12#wechat_redirect'
    }
  },
  ready () {
    setDocumentTitle('我的信息')
  }
}
</script>

<style lang="less">
@import './profile';
</style>
