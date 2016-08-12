<template>
  <div class="slide" @touchmove="swipeMove" @touchstart="swipeStart" @touchend="swipeEnd" @mousedown="swipeStart" @mouseup="swipeEnd" @mousemove="swipeMove">
    <div v-for="item in pages" class="slide-item" :style="{ backgroundImage: 'url(' + item.img + ')', transform: 'translateX(' + item.translateX + '%)'}"></div>
  </div>
  <div v-if="pages.length > 1" class="num">{{ slide.init.currentPage }}/{{ pages.length }}</div>
</template>

<style scoped lang="less">
@import '../styles/variables.less';
.slide {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.slide-item {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  background-size: cover;
  /*transition-duration: .3s;*/
}

.num {
  background-image: url('../images/pic_number_icon.png');
  background-repeat: no-repeat;
  background-size: .32rem;
  background-position: .133333rem center;
  padding: .133333rem .133333rem .133333rem .533333rem;
  position: absolute;
  top: .4rem;
  right: .4rem;
  border-radius: 4px;
  color: @white;
  background-color: rgba(0, 0, 0, .5);
}
</style>

<script>
export default {
  props: {
    slide: {
      type: Object,
      required: true
    },
    pages: {
      type: Array,
      required: true
    }
  },
  ready () {
    this.$on('slideTo', (num) => {
      this.turnTo(num)
    })

    this.$on('slideNext', () => {
      this.next()
    })

    this.$on('slidePre', () => {
      this.pre()
    })
  },
  methods: {
    reset () {
      let slideTmp = this.pages
      for (let page of slideTmp) {
        page.current = 0
        this.styleCompute(page)
      }
    },
    checkState () {
      this.slide.init.canNext = true
      this.slide.init.canPre = true

      const len = this.pages.length
      if (this.pages[len - 2].origin + this.pages[len - 2].current === -100) {
        this.slide.init.canNext = false
      }
      if (this.pages[1].origin + this.pages[1].current === 100) {
        this.slide.init.canPre = false
      }
    },
    swipeStart (e) {
      if (e.type === 'touchstart') {
        if (e.touches.length > 1) {
          this.slide.init.tracking = false
          return
        } else {
          this.slide.init.tracking = true
          /* Hack - would normally use e.timeStamp but it's whack in Fx/Android */
          this.slide.init.start.t = new Date().getTime()
          this.slide.init.start.x = e.targetTouches[0].clientX
          this.slide.init.start.y = e.targetTouches[0].clientY
        }
      } else {
        this.slide.init.tracking = true
        /* Hack - would normally use e.timeStamp but it's whack in Fx/Android */
        this.slide.init.start.t = new Date().getTime()
        this.slide.init.start.x = e.clientX
        this.slide.init.start.y = e.clientY
      }
    },
    swipeMove (e) {
      if (this.slide.init.tracking) {
        if (e.type === 'touchmove') {
          e.preventDefault()
          this.slide.init.end.x = e.targetTouches[0].clientX
          this.slide.init.end.y = e.targetTouches[0].clientY
        } else {
          e.preventDefault()
          this.slide.init.end.x = e.clientX
          this.slide.init.end.y = e.clientY
        }
      }
    },
    swipeEnd (e) {
      this.slide.init.tracking = false
      const now = new Date().getTime()
      const deltaTime = now - this.slide.init.start.t
      const deltaX = this.slide.init.end.x - this.slide.init.start.x
      const deltaY = this.slide.init.end.y - this.slide.init.start.y
      /* work out what the movement was */
      if (deltaTime > this.slide.init.thresholdTime) {
        /* gesture too slow */
        return
      } else {
        if ((deltaX > this.slide.init.thresholdDistance) && (Math.abs(deltaY) < this.slide.init.thresholdDistance)) {
          // swipe right
          this.pre()
        } else if ((-deltaX > this.slide.init.thresholdDistance) && (Math.abs(deltaY) < this.slide.init.thresholdDistance)) {
          // swipe left
          this.next()
        } else if ((deltaY > this.slide.init.thresholdDistance) && (Math.abs(deltaX) < this.slide.init.thresholdDistance)) {
          // swipe down
        } else if ((-deltaY > this.slide.init.thresholdDistance) && (Math.abs(deltaX) < this.slide.init.thresholdDistance)) {
          // swipe up
        } else {
          // nothing
        }
      }
    },
    pre () {
      if (!this.slide.init.canPre) return
      if (this.pages.length === 1) return

      for (const page of this.pages) {
        this.currentCompute(page, false)
      }

      this.slide.init.currentPage--
      this.checkState()
    },
    next () {
      if (!this.slide.init.canNext) return
      if (this.pages.length === 1) return

      for (const page of this.pages) {
        this.currentCompute(page, true)
      }

      this.slide.init.currentPage++
      this.checkState()
    },
    turnTo (num) {
      let index = Math.ceil(num) - 1
      const len = this.pages.length
      let step = 0
      if (index > this.pages.length - 1) {
        console.error('there are no more pages')
        return false
      }
      this.slide.init.currentPage = Math.ceil(num)

      for (let i = 0; i < len; i++) {
        if (this.pages[i].current + this.pages[i].origin === 0) {
          step = index - i
          break
        }
      }

      for (let page of this.pages) {
        page.current = page.current - step * 100
        this.styleCompute(page)
      }

      this.checkState()
    },
    currentCompute (obj, next) {
      if (next) {
        obj.current = obj.current - 100
      } else {
        obj.current = obj.current + 100
      }
      this.styleCompute(obj)
    },
    styleCompute (obj) {
      // let opacityValue = 0
      // if ((obj.origin + obj.current) === 0) opacityValue = 1
      obj.translateX = obj.origin + obj.current
    }
  }
}
</script>
