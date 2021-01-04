// pages/sreach/sreach.js
const http = require('../../utils/http');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sreachInpValue: '',
    tab_active: "tab_active",
    click_season: "click_season",
    continents: ["欧洲", "亚洲", "大洋洲", "非洲", "北美洲", "南美洲"],
    c_ul_tab_active: ["ul_tab_active", "", "", "", "", ""],
    s_ul_tab_active: ["ul_tab_active", "", "", "", "", ""],
    continentsCountry: [],
    season: ["春意阑珊", "盛夏果实", "秋来秋去", "冬之恋曲"],
    matchedProducts: []
  },

  //洲
  hangdelZhou() {
    this.setData({
      tab_active: "tab_active",
      click_season: "click_season",
      continents: ["欧洲", "亚洲", "大洋洲", "非洲", "北美洲", "南美洲"]
    });
  },

  //季节
  hangdelJijie() {
    this.setData({
      tab_active: "click_season",
      click_season: "tab_active",
      continents: [],
    });
  },

  //各大洲
  hangdelContinents(e) {
    let continentsid = e.currentTarget.dataset.continentsid;
    let continents = e.currentTarget.dataset.continents;
    let new_c_ul_tab_active = ["", "", "", "", "", ""];
    new_c_ul_tab_active[continentsid] = "ul_tab_active";
    this.setData({
      c_ul_tab_active: new_c_ul_tab_active
    });
    http(`requirement/destination/countries/${continents}`)
      .then(res => {
        this.setData({
          continentsCountry: res
        });
      });
  },

  //各季节
  hangdelSeason(e) {
    let seasonid = e.currentTarget.dataset.seasonid;
    let season = e.currentTarget.dataset.season;
    let new_s_ul_tab_active = ["", "", "", "", "", ""];
    new_s_ul_tab_active[seasonid] = "ul_tab_active";
    this.setData({
      s_ul_tab_active: new_s_ul_tab_active
    });

    http("requirement/request/getMatchedProducts", "post", {
        product_type: 1,
        request_season: [season]
      })
      .then(res => {
        this.setData({
          matchedProducts: res.matchedProducts
        });
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //首次获取欧洲国家数据
    http("requirement/destination/countries/欧洲")
      .then(res => {
        this.setData({
          continentsCountry: res
        });
      });

    //首次获取季节数据
    http("requirement/request/getMatchedProducts", "post", {
        product_type: 1,
        request_season: ["春意阑珊"]
      })
      .then(res => {
        this.setData({
          matchedProducts: res.matchedProducts
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
    return {
      title: 'tabs',
      path: 'page/weui/example/tabs/tabs'
    }
  }
})