<template>
  <div class="footer">
    <ul>
      <li v-for="menu in menus" v-on:click="jumpPage($index)">{{menu.name}}</li>
    </ul>
  </div>
</template>

<style lang="less">
@import '../styles/mixin.less';

.footer {
  .font-size(18px);
  .fixed-bottom();
  .centered();
  color: red;
  height: 1.333333rem; //100
  line-height: 1.333333rem; //100

  ul {
    .flex();
  }

  li {
    .flex-item(1);
    border: 1px solid #ddd;
  }
}

</style>

<script>
export default {
  data () {
    this.query = this.$route.query
    this.params = this.$route.params
    return {
      menus: [
        {
          name: '关于我们',
          router: 'contect'
        },
        {
          name: '介绍',
          router: 'activities'
        },
        {
          name: '小游戏',
          router: 'game'
        },
        {
          name: '我的',
          router: 'profile'
        }
      ]
    }
  },
  methods: {
    jumpPage (idx) {
      this.$router.go({
        name: this.menus[idx].router,
        query: this.query
      })
    }
  }
}

</script>
