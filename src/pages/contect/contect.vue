<template>
  <div id="contect">
    <div class="introduce">
      我们是一群充满活力的90后! <br/>
      我们是一群喜欢编程的程序猿! <br/>
      我们是一个有梦想的团队!
    </div>
    <div class="contact-way">
      <div class="title centered">联系我</div>
      <div class="qrcode"> </div>
      <div class="email centered">Email: ly604547351@163.com</div>
      <div class="github centered"><i></i><a href="https://github.com/HankLiang">GitHub</a></div>
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
    }
  },

  ready () {
    setDocumentTitle('contect')
  }
}
</script>

<style lang="less">
@import './contect';
</style>
