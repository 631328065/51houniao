// pages/details/details.js

//导入http
let http = require("../../utils/http");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sHeight: "500px",
    isShow: false,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    active: ["", "", ""], //头部类名
    headerNav: ["行程概要", "详细行程", "价格说明"],
    showNav: true,
    pro_pic_url: "",
    pro_title: "",
    product_season: [],
    product_type: [],
    children_price: 0,
    man_price: 0,
    out_time: "",
    routing_dat: 0,
    routing_nigth: 0,
    country: [],
    sellerUserName: "",
    bright: [],
    product_trip_head: [],
    product_trip_details: [],
    pon_num_end: 0,
    pon_num_start: 0,
    include_price: [],
    no_include_price: []
  },

  //展示
  showMore() {
    this.setData({
      sHeight: "auto",
      isShow: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http(`product/product/getProductDetails/${options.productid}`)
      .then(res => {
        let arrNewBright = [];
        let newBright_1 = {
          bright: res.product_base_info.bright_1
        }
        arrNewBright.push(newBright_1);

        let newBright_2 = {
          bright: res.product_base_info.bright_2
        }
        arrNewBright.push(newBright_2);

        let newBright_3 = {
          bright: res.product_base_info.bright_3
        }
        arrNewBright.push(newBright_3);

        let newBright_4 = {
          bright: res.product_base_info.bright_4
        }
        arrNewBright.push(newBright_4);
        this.setData({
          pro_pic_url: res.product_base_info.pro_pic_url, //头部图片
          pro_title: res.product_base_info.pro_title, //标题
          product_season: res.product_base_info.product_season, //季节
          product_type: res.product_base_info.product_type, //主题
          children_price: res.product_base_info.children_price, //儿童价
          man_price: res.product_base_info.man_price, //成人价
          out_time: res.product_base_info.out_time, //日期
          routing_dat: res.product_base_info.routing_dat, //多少天
          routing_nigth: res.product_base_info.routing_nigth, //多少晚
          country: res.product_base_info.product_country, //国家
          sellerUserName: options.sellerUserName, //商家
          bright: arrNewBright, //行程亮点
          product_trip_head: res.product_base_info.product_trip_head, //行程概要,
          product_trip_details: res.product_details_info.product_trip_details, //行程详情
          pon_num_end: res.product_details_info.pon_num_end, //最多人数
          pon_num_start: res.product_details_info.pon_num_start, //最少人数
          include_price: res.product_details_info.product_price.include_price, //价格包括
          no_include_price: res.product_details_info.product_price.no_include_price //价格不包括
        });
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

  },

  onPageScroll: function (e) { // 获取滚动条当前位置
    if (e.scrollTop >= 800 && e.scrollTop < 1100) {
      this.setData({
        active: ["active", "", ""],
        showNav: false
      });
    } else if (e.scrollTop >= 1100 && e.scrollTop < 1900) {
      this.setData({
        active: ["", "active", ""],
        showNav: false
      });
    } else if (e.scrollTop >= 1900) {
      this.setData({
        active: ["", "", "active"],
        showNav: false
      });
    } else {
      this.setData({
        showNav: true
      });
    }
  }
})