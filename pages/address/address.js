// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ADDRESS:[],
    bindAddress:'',
    detailAddress:'',
    Pname:'',
    phonenumber:'',
    addressLength:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let  addressLength = this.data.addressLength

    // that.setData({
    //   bindAddress:options.bindAddressData,
    //   detailAddress:options.detailAddressData,
    //   Pname:options.PnameData,
    //   phonenumber:options.phonenumberData
    // })
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
    let ADDRESS = wx.getStorageSync("ADDRESS");

    console.log(ADDRESS);
    this.setData({
      ADDRESS
    })
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