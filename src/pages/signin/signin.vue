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

    <button class="default-button submit">提交</button>
  </div>
</template>

<script>
import {setDocumentTitle} from '../../utils/interaction'

export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params

    return {
      signin: 'signin'
    }
  },
  ready () {
    setDocumentTitle('注册')
  }
}
</script>

<style lang="less">
@import './signin';
</style>
