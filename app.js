//app.js
App({
  onLaunch: function () {
    wx.setStorageSync("ADDRESS", [])
    
  },
  globalData: {
    userInfo: null,
  }
})