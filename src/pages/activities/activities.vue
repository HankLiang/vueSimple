<template>
  <div class="clearfix" id="activities">
    <section>
      <h3>为什么选择微信</h3>
      <article>
        <p>1.微信已覆盖95%以上的智能手机，并成为人们生活中不可或缺的日常使用工具。</p>
        <p>2.微信用户普遍年轻，平均年龄在28岁。97.7%的用户在50岁以下。86.2%的用户在18-36岁。</p>
        <p>从上面的数据不难看出微信拥有大量的用户群, 不同年龄,不同职业的人每时每刻都在使用着微信。 最重要的是从微信上获取用户的成本很低，可以这么说，没有成本。只需要点击一个链接，或者扫描一下二维码我们就可以引导他成为我们自己的用户。 同时微信也提供接口让我们获取微信用户的基本数据，是不是很心动，有了数据就有了资源，有了资源一切就有啦～</p>
      </article>
    </section>

    <section>
      <h3>那我们需要做什么</h3>
      <article>
        <p>1.首先您需要在微信公众平台申请一个微信公众号，具体怎么申请，在微信公众平台网站介绍的很清楚，如果您已经拥有微信公众号那最好不过啦～</p>
        <p>2.然后呢我们还需要一台服务器，难道我们要买一台服务器吗？ No，不需要！ 国内阿里云服务器已经很棒棒的啦， 我们只需要在阿里租服务器就好啦，当然要有一定的成本，但是成本绝对不高，完全不用担心。如果您已经租用服务器或者让我们帮你租用服务器都是可以的。</p>
        <p>3.最后就是域名的备案,由于我国对互联网管理比较严格，使用国内服务器和域名必须到工信部备案。当然这个事情我们可以帮您做，您只需要提供一些材料即可。</p>
      </article>
    </section>

    <section>
      <h3>我们可以做什么呢</h3>
      <article>
        <p>1.我们可以通过微信公众号发推送消息，介绍我们的活动之类的，营销嘛～</p>
        <p>2.我们可以在公众号菜单里配置我们自己的页面，点击菜单微信用户就可以看到我们的活动啦。</p>
        <p>3.当然啦，最重要的微信用户可以通过平台使用微信支付来购买我们的产品和服务！</p>
      </article>
    </section>

    <section>
      <h3>我们的宗旨</h3>
       <article>
        <p>您的需求就是我们的目标，我们提供定制服务，您提需求，我们尽最大的努力满足你的业务需求，我们也会提供后期的维护！ 做到双赢就是我们的宗旨～</p>
      </article>
    </section>

    <section>
      <h3>案例</h3>
      <div class="centered">
        <div class="pic1">
        </div>
        <div class="pic2">
        </div>
        <div class="pic3">
        </div>
        <p>仅供参考</p>
      </div>
    </section>

  </div>
</template>

<script>
import {setDocumentTitle, showToast} from '../../utils/interaction'

export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params

    return {
      activities: 'activities'
    }
  },
  ready () {
  }
}
</script>

<style lang="less">
@import './activities';
</style>
