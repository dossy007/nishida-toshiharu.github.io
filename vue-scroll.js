var vi = new Vue({
  el: '#app',
  data: {
    second: '変数 型',
    third: '演算子 比較演算子',
    forth : 'if文 list dict',
  },
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName]
      el.scrollIntoView({ behavior: 'smooth'})
    }
  }
})