//导入开发域名
const baseUrl = require('./config').dev.baseUrl;

module.exports = function (url, method = 'get', params = {}) {
  let fullUrl = baseUrl + url;
  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: fullUrl,
      method: method,
      data: params,
      success: function (res) {
        resolve(res.data);
        wx.hideLoading();
      },
      fail: function (res) {
        reject(res);
        wx.hideLoading();
      }
    })
  });
}