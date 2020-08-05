// pages/shoppingcart/shoppingcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paycolor:"red",
    nums:1,
    price:427,
    ischeck:"true",
    sum:427
  },
  reducenum:function(e){
    let nums = this.data.nums
    console.log(this);
    console.log(e);
    if(nums>0){
      nums--
    }
    this.setData({
      nums:nums
    })
    this.getsum()
    
  },
  addnums:function(){
    let nums = this.data.nums
    nums++
    this.setData({
      nums:nums
    })
    this.getsum()
  },
  ischeck:function(){
    let ischeck = this.data.ischeck
    ischeck = !ischeck
    if(ischeck){
      this.getsum()
      this.setData({
        paycolor:"red"
      })
    }else{
      this.setData({
        sum:0,
        paycolor:"#336699"
      })
    }
    this.setData({
      ischeck,
    })
  },
  getsum:function(){
    let nums = this.data.nums
    let price = this.data.price
    let sum = this.data.sum
    sum = nums * price
    this.setData({
      sum
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _obj=options.nums;
    var price = options.price
    console.log(_obj)
    console.log(price);
    this.setData({
      nums:_obj,
      price:price
    })
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