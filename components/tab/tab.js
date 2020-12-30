// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabData: Array,
    man_price: String,
    children_price: String,
    pon_num_end: Number,
    pon_num_start: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //减少人数
    tdEdd() {
      this.setData({
        pon_num_end: --this.data.pon_num_end
      })
      this.data.pon_num_end < this.data.pon_num_start ? this.setData({
        pon_num_end: this.data.pon_num_start
      }) : this.setData({
        pon_num_end: this.data.pon_num_end--
      });
    },

    //增加人数
    tdAdd() {
      this.setData({
        pon_num_end: ++this.data.pon_num_end
      })
    }
  }
})