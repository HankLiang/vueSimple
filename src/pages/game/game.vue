<!-- https://github.com/luozhihao/vue-puzzle/blob/master/src/App.vue -->
<template>
  <div class="box clearfix">
  <ul class="puzzle-wrap">
    <li
    :class="{'puzzle': true, 'puzzle-empty': !puzzle}"
    v-for="puzzle in puzzles"
    v-text="puzzle"
    @click="moveFn($index)"
    ></li>
  </ul>
  <div class="centered" >
    <button class="btn btn-reset" @click="render">重置游戏</button>
  </div>
  </div>
</template>

<script>
export default {
  data () {
  return {
    puzzles: []
  }
  },
  methods: {
  // 重置渲染
  render () {
    let puzzleArr = [],
    i = 1
    // 生成包含1 ~ 15数字的数组
    for (i; i < 16; i++) {
    puzzleArr.push(i)
    }
    // 随机打乱数组
    puzzleArr = puzzleArr.sort(() => {
    return Math.random() - 0.5
    });
    // 页面显示
    this.puzzles = puzzleArr
    this.puzzles.push('')
  },
  // 点击方块
  moveFn (index) {
    // 获取点击位置及其上下左右的值
    let curNum = this.puzzles[index],
    leftNum = this.puzzles[index - 1],
    rightNum = this.puzzles[index + 1],
    topNum = this.puzzles[index - 4],
    bottomNum = this.puzzles[index + 4]
    // 和为空的位置交换数值
    if (leftNum === '' && index !== 4 && index !== 8 && index !== 12) {
    this.puzzles.$set(index - 1, curNum)
    this.puzzles.$set(index, '')
    } else if (rightNum === '' && index !== 3 && index !== 7 && index !== 11) {
    this.puzzles.$set(index + 1, curNum)
    this.puzzles.$set(index, '')
    } else if (topNum === '') {
    this.puzzles.$set(index - 4, curNum)
    this.puzzles.$set(index, '')
    } else if (bottomNum === '') {
    this.puzzles.$set(index + 4, curNum)
    this.puzzles.$set(index, '')
    }
    this.passFn()
  },
  // 校验是否过关
  passFn () {
    if (this.puzzles[15] === '') {
    const newPuzzles = this.puzzles.slice(0, 15)
    const isPass = newPuzzles.every((e, i) => e === i + 1)
    if (isPass) {
      window.alert('恭喜，闯关成功！')
    }
    }
  }
  },
  ready () {
    this.render()
  }
}
</script>

<style lang="less">
@import '../../styles/mixin.less';
body {
  font-family: Arial, "Microsoft YaHei";
}
.box {
  width: 5.333333rem;
  margin: 1.333333rem auto;
}
.puzzle-wrap {
  width: 5.333333rem;
  height: 5.333333rem;
  margin-bottom: 0.533333rem;
  padding: 0;
  background: #ccc;
  list-style: none;
}
.puzzle {
  .font-size(16px);
  float: left;
  width: 1.333333rem;
  height: 1.333333rem;
  background: #f90;
  text-align: center;
  line-height: 1.333333rem;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 4px;
  text-shadow: 1px 1px 1px #B9B4B4;
  cursor: pointer;
}
.puzzle-empty {
  background: #ccc;
  box-shadow: inset 2px 2px 18px;
}

.btn {
  .font-size(20px);
  border: 2px solid #ccc;
  color: #6f6f6f;
  background: #f90;
  padding: 0.2rem 0.133333rem;
  border-radius: 18px;
  text-decoration: none;
}

.btn-reset {
  box-shadow: inset 2px 2px 18px;
}
</style>
