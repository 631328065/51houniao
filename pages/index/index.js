// pages/index/index.js
//引入http
const http = require('../../utils/http');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    recomList: [],
    activityList: [],
    youLike: [],
    sure: ['不用懂外语', '不用懂攻略', '没有购物坑', '不用折腾自己']
  },

  //跳转详情页
  toDetails: (e) => {
    wx.navigateTo({
      url: `../details/details?productid=${e.currentTarget.dataset.productid}&sellerUserName=${e.currentTarget.dataset.sellerusername}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取轮播图
    //头部轮播图
    http('product/banner/getBySeller/4bc4027c645343f09a964b5c2e9f875b')
      .then((res) => {
        this.setData({
          swiperList: res
        });
      }, (res) => {
        console.log('失败了');
      });

    //招募活动轮播图
    http('requirement/request/getMatchedProducts', "POST", {
      desc: false,
      orderBy: "outtime",
      pageSize: 100,
      product_type: 2
    }).then((res) => {
      this.setData({
        activityList: res.matchedProducts
      })
    }, (res) => {
      console.log('失败了');
    });

    //获取recom数据
    http("product/product/getProductRecommendUser", "POST", {
      desc: false,
      orderBy: "top",
      pageNow: 1,
      pageSize: 20,
      seller_user_id: "4bc4027c645343f09a964b5c2e9f875b"
    }).then((res) => {
      this.setData({
        recomList: res,
      });
    }, (res) => {
      console.log('失败了');
    });

    //猜你喜欢
    http("product/product/guessYouLike")
      .then((res) => {
        this.setData({
          youLike: res
        });
      }, (res) => {
        console.log('失败了');
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  }
})