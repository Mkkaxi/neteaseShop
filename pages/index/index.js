// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [{
        title: '精选',
        text: '入门推荐'
      },
      {
        title: '开门红',
        text: '88爆款'
      },
      {
        title: '特惠',
        text: '今日折扣'
      },
      {
        title: '服饰',
        text: '品质好物'
      },
      {
        title: '电器',
        text: '智能生活'
      },
      {
        title: '运动',
        text: '热爱生活'
      },
      {
        title: '母婴',
        text: '爱的呵护'
      },
      {
        title: '美食',
        text: '吃货必看'
      },
      {
        title: '全球',
        text: '进口好货'
      },
      {
        title: '居家',
        text: '温暖的家'
      },
      {
        title: '洗护',
        text: '日常必备'
      }
    ],

    navBarHeight: 190,
    searchWidth: 700





  },

  onPageScroll: function (e) {
    console.log(e.scrollTop);

    this.setData({
      navBarHeight: 190 - 2*e.scrollTop,
      searchWidth: 700 - 6*e.scrollTop
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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