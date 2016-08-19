<template>
  <div id="signin">
    <form class="clearfix">
      <div class="form-group">
        <label class="form-label">昵称:</label>
        <input class="form-input" v-model="name"/>
      </div>

      <div class="form-group">
        <label class="form-label">手机:</label>
        <input class="form-input" v-model="tel"/>
      </div>

      <div class="form-group">
        <label class="form-label">邮箱:</label>
        <input class="form-input" v-model="email"/>
      </div>
    </form>

    <button class="default-button submit" :class="{'disable': !canSubmit}" @click="submit">提交</button>
  </div>
</template>

<script>
import {setDocumentTitle, showToast} from '../../utils/interaction'

const checkProperty = (vm) => {
  let str = ''
  if (!vm.email) {
    str = '请输入邮箱'
  }
  if (!vm.tel) {
    str = '请输入手机号'
  }
  if (!vm.name) {
    str = '请输入昵称'
  }
  return str
}

export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params
    this.canSubmit = true

    return {
      signin: 'signin'
    }
  },
  methods: {
    submit () {
      if (!this.canSubmit) return
      const checkMessage = checkProperty(this)
      if (checkMessage) {
        showToast(checkMessage)
        return
      }
      const params = {
        name: this.name,
        tel: this.tel,
        email: this.email
      }
      const updateProperty = this.$resource('/asiainfo_weixin/login/register')
      this.canSubmit = false
      updateProperty.save(params).then(() => {
        showToast('注册成功')
        this.canSubmit = true
      }, () => {
        showToast('注册失败')
        this.canSubmit = true
      })
    },
  },
  ready () {
    setDocumentTitle('注册')
  }
}
</script>

<style lang="less">
@import './signin';
</style>
