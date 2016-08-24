<template>
  <div id="profile">
    <div class="header">
      <div class="info centered">
        <img class="avatar" :src="avatar">
      </div>
      <div class="centered">
        <h2>Information</h2>
        <div>flag: {{flag}}</div>
        <div>name: {{name}}</div>
        <div>email: {{email}}</div>
        <div>tel: {{email}}</div>
      </div>
      <div class="sign" v-link="{ name: 'signin'}">注册</div>
    </div>
  </div>
</template>

<script>
import {setDocumentTitle, showToast} from '../../utils/interaction'

const getInfo = (vm) => {
  const resource = vm.$resource('/asiainfo_weixin/login/getInfo.jhtml')
  return resource.get().then((resp) => {
    const data = resp.data
    return {
      flag: data.flag,
      name: data.user.name,
      tel: data.user.tel,
      email: data.user.email
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
      name: '',
      avatar: 'https://o5wtsnvqp.qnssl.com/9798a7d2fed617e072ee94d6.jpg'
    }
  },
  route: {
    data (transition) {
      return getInfo(this)
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
