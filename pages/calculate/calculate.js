//index.js
//获取应用实例
const app = getApp()

Page({
  bmr:function(e){
    wx.navigateTo({
      url: '../calculate/bmr/bmr',
    })
  },
  bmr2: function (e) {
    wx.navigateTo({
      url: '../calculate/bmr2/bmr2',
    })
  },
  distribution: function (e) {
    wx.navigateTo({
      url: '../calculate/distribution/distribution',
    })
  }
})
