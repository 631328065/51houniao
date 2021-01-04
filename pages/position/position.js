// pages/position/position.js
const http = require("../../utils/http");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    country_bg: [{
        width: "376rpx",
        height: "206rpx",
        pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/ouzhou.png) 0 0/376rpx no-repeat",
        positon_y: "-214rpx",
        size: "376rpx",
        zIndex: 6,
        left: 0,
        top: 0,
        country: "欧洲",
        pinyin: "ouzhou",
        textLeft: "146rpx",
        textTop: "84rpx",
        suf: "Europe"
      },
      {
        width: "152rpx",
        height: "164rpx",
        pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/feizhou.png) 0 -168rpx/152rpx no-repeat",
        positon_y: "-168rpx",
        size: "152rpx",
        zIndex: 7,
        left: "-18rpx",
        top: "168rpx",
        country: "非洲",
        pinyin: "feizhou",
        color: "#445356",
        textLeft: "46rpx",
        textTop: "36rpx",
        suf: "Africa"
      },
      {
        width: "188rpx",
        height: "160rpx",
        pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/yazhou.png) 0 -160rpx/188rpx no-repeat",
        positon_y: "-160rpx",
        size: "188rpx",
        zIndex: 8,
        left: "122rpx",
        top: "122rpx",
        country: "亚洲",
        pinyin: "yazhou",
        color: "#445356",
        textLeft: "46rpx",
        textTop: "42rpx",
        suf: "Asia"
      },
      {
        width: "304rpx",
        height: "248rpx",
        pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/beimei.png) 0 -244rpx/304rpx no-repeat",
        positon_y: "-244rpx",
        size: "304rpx",
        zIndex: 9,
        left: "376rpx",
        top: "-24rpx",
        country: "北美洲",
        pinyin: "beimei",
        color: "#445356",
        textLeft: "88rpx",
        textTop: "118rpx",
        suf: "NorthAmerica"
      },
      {
        width: "164rpx",
        height: "230rpx",
        pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/nanmei.png) 0 -226rpx/164rpx no-repeat",
        positon_y: "-226rpx",
        size: "164rpx",
        zIndex: 10,
        left: "482rpx",
        top: "190rpx",
        country: "南美洲",
        pinyin: "nanmei",
        color: "#445356",
        textLeft: "88rpx",
        textTop: "76rpx",
        suf: "SouthAmerica"
      },
      {
        width: "112rpx",
        height: "94rpx",
        pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/dayangzhou.png) 0 -104rpx/112rpx no-repeat",
        positon_y: "-104rpx",
        size: "112rpx",
        zIndex: 11,
        left: "230rpx",
        top: "286rpx",
        country: "大洋洲",
        pinyin: "dayangzhou",
        color: "#445356",
        textLeft: "0",
        textTop: "18rpx",
        suf: "Oceania"
      }
    ],
    hot_country_list: [],
    other_country_list: [],
    hot_country: '欧洲'
  },

  //改变国家数据
  hangdelCountry(e) {
    let country_bg_new = this.data.country_bg;
    let countryName = e.currentTarget.dataset.country;
    let suf = e.currentTarget.dataset.suf;
    country_bg_new.forEach(item => {
      if (item.country == countryName) {
        item.pic = `url(http://www.51houniao.com/wx/customer/classic/lib/images/${item.pinyin}.png) 0px 0px/${item.size} no-repeat`;
        item.color = "#cbcaca";
      } else {
        item.pic = `url(http://www.51houniao.com/wx/customer/classic/lib/images/${item.pinyin}.png) 0px ${item.positon_y}/${item.size} no-repeat`;
        item.color = "#445356";
      }
    });
    this.setData({
      country_bg: country_bg_new,
      hot_country: countryName
    });
    http(`product/desc/CountryList/${countryName}/${suf}`)
      .then(res => {
        this.setData({
          hot_country_list: res.hot_country_list,
          other_country_list: res.other_country_list
        });
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http("product/desc/CountryList/欧洲/Europe")
      .then(res => {
        this.setData({
          hot_country_list: res.hot_country_list,
          other_country_list: res.other_country_list
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

  }
})