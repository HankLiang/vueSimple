<template>
  <div id="profile">
    <section v-show="!isEdit">
      <div class="header">
        <div class="info centered">
          <img class="avatar" :src="avatar">
          <div class="name"> {{name}} </div>
        </div>
        <div class="prop" @click="show()">个人信息</div>
      </div>
    </section>

    <section v-show="isEdit">
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
    </section>
  </div>
</template>

<script>
import {setDocumentTitle, showToast, isEmail, isTel} from '../../utils/interaction'

const getInfo = (vm) => {
  const resource = vm.$resource('/asiainfo_weixin/login/getInfo.jhtml')
  return resource.get().then((resp) => {
    const data = resp.data
    let name, tel, email, avatar
    vm.flag = data.flag
    if (data.flag) {
      name = data.user.name
      tel = data.user.tel
      email = data.user.email
      avatar = data.user.headurl
    }
    return {
      isEdit: !data.flag,
      name: name,
      tel: tel,
      email: email,
      avatar: avatar
    }
  }, (error) =>{
    const message = JSON.parse(error.data.message)
    showToast(message)
  })
}

const checkProperty = (vm) => {
  let str = ''
  if (!vm.email) {
    str = '请输入邮箱'
  }

  if (vm.email && !isEmail(vm.email)) {
    str = '请输入正确的邮箱'
  }

  if (!vm.tel) {
    str = '请输入手机号'
  }

  if (vm.tel && !isTel(vm.tel)) {
    str = '请输入正确的手机号码'
  }

  if (!vm.name) {
    str = '请输入昵称'
  }

  if (vm.name && vm.name.length < 2 || vm.name.length > 10) {
    str = '请输入2-10位的昵称'
  }
  return str
}

export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params
    this.canSubmit = true
    this.flag = false

    return {
      name: '',
      email: '',
      tel: '',
      avatar: '',
      isEdit: false
    }
  },
  route: {
    data (transition) {
      return getInfo(this)
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
      let api = '/asiainfo_weixin/login/register'
      if (this.flag) {
        api= '/asiainfo_weixin/login/updateInfo.jhtml'
      }
      const updateProperty = this.$resource(api)
      this.canSubmit = false
      updateProperty.save(params).then(() => {
        showToast('提交成功')
        this.canSubmit = true
        this.isEdit = false
      }, () => {
        showToast('提交失败')
        this.canSubmit = true
      })
    },
    show () {
      this.isEdit = true
    }
  },
  ready () {
  }
}
</script>

<style lang="less">
@import './profile';
</style>
