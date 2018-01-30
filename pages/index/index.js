//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '你好，汪云强',
    home: '大殿',
    map:'地图',
    store:'人才',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toMap:function(){
    wx.navigateTo({
      url:'../map/map'
    })
  },
  toHome:function(){
    wx.navigateTo({
      url:'../home/home'
    })
  },
  toStore:function(){
    wx.navigateTo({
      url:'../store/store'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady:function(options){
    // 页面渲染完成
    console.log("index--onReady")
  },
  onShow:function(options){
    // 页面显示
    console.log("index--onShow")
  },
  onHide:function(options){
    // 页面隐藏
    console.log("index--onHide")
  },
  onUnload:function(options){
    // 页面关闭
    console.log("index--onUnload")
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
