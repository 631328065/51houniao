// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //去详情页
    toDetails(e) {
      wx.navigateTo({
        url: `../details/details?productid=${e.currentTarget.dataset.productid}&sellerUserName=${e.currentTarget.dataset.sellerusername}`
      })
    },
  }
})