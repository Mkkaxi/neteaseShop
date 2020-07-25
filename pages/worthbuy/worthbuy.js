// pages/worthbuy/worthbuy.js
Page({

  /**
   * 页面的初始数据
   */
  changeLeft: function (e) {
    let left = e.detail.scrollLeft/360
    this.setData({
      left: left*100*0.6 + '%'
    })
  },
    
  data: {
    left:'',
    worthBuy: 'https://m.you.163.com/topic/index/img/topic_logo.c2284970.png',
    bgUrl: 'https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png',
    menuList: [{
        imgUrl: 'https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif',
        title: '9.9超值',
        text: '爆品定价直降'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/98f47f438097516c3c4b09adce6f486d.png?imageView&quality=65&thumbnail=120y120',
        title: '员工精选',
        text: '每天1款内部价'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/e92a567f96b94dcea29eafea9ab42440.png?imageView&quality=65&thumbnail=120y120',
        title: '好物大赏',
        text: '官方排名发布'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/1d94b7dcbf10a3e836bab65729eeaaad.png?imageView&quality=65&thumbnail=120y120',
        title: '明星商品',
        text: '百万粉丝之选'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/ee3e05fed85f623c92256d5371087480.png?imageView&quality=65&thumbnail=120y120',
        title: '中国风物志',
        text: '系列微纪录片'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/c1fe06034fb5b4e378277e590d04845c.png?imageView&quality=65&thumbnail=120y120',
        title: '每日穿搭',
        text: '时尚买手力荐'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/2e038945352b0a8e7a339741b8c5f229.png?imageView&quality=65&thumbnail=120y120',
        title: '全球好物',
        text: '0关税即时达'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/321dac9cf0fa0edd8da0092a753531f3.png?imageView&quality=65&thumbnail=120y120',
        title: 'HOME',
        text: '实景家居专栏'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/74db07fdd266ea7282a55f4b1aeaf74c.png?imageView&quality=65&thumbnail=120y120',
        title: '每月好物',
        text: '当季必买清单'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/9d8114ce4ef435ceac5e82120efeec4c.png?imageView&quality=65&thumbnail=120y120',
        title: '晒单',
        text: '入选就有红包'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120y120',
        title: '甄选家',
        text: '爆品免费试用'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/d98cef378330167ef79c5f956814836e.png?imageView&quality=65&thumbnail=120y120',
        title: '选购指南',
        text: '破解选择困难'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120y120',
        title: '好吃研究所',
        text: '时令美食抢先尝'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/17f2bc11d23d2be6b8d8fdf066bb68c9.png?imageView&quality=65&thumbnail=120y120',
        title: '特色系列',
        text: '发现格调好货'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/e29bd9f1a9f61e37b969d59566ea15b2.png?imageView&quality=65&thumbnail=120y120',
        title: '工厂考察团',
        text: '探访严选工厂'
      }

    ],
    goodsListLeft: [{
        imgUrl: 'https://yanxuan.nosdn.127.net/2d9c9301e55fb077121d449b2c3d321b.jpg?imageView&thumbnail=345y345&quality=95',
        desc: '不用咖啡机，1秒喝上堪比现磨的好咖啡',
        userImg: 'http://yanxuan.nosdn.127.net/d4379373d8e5200bdd8430896a6a5fbf.jpg?imageView&quality=65&thumbnail=48y48',
        userName: '网易味央：小周',
        lookNum: '2.0万'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/380d365a0e46f36be6c58bee53913bfc.jpg?imageView&thumbnail=345y345&quality=95',
        desc: '两种意见 | 让你手不沾水，就能把家里拖一遍',
        userImg: 'http://yanxuan.nosdn.127.net/3ba7a99d5b4e18db22696f5293b5daed.jpg?imageView&quality=65&thumbnail=48y48',
        userName: '网易有道：莉莉',
        lookNum: '2713'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/041d52d113c20c2ad6cf6654e4dacb30.jpg?imageView&thumbnail=345y345&quality=95',
        desc: '三伏天必囤，好评率99.9%的清火花茶',
        userImg: 'http://yanxuan.nosdn.127.net/477aa3a42358a58a503602d054646fa4.jpg?imageView&quality=65&thumbnail=48y48',
        userName: '网易云课堂：末末',
        lookNum: '2553'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/e8b865becaa19976e33a591d7bccfa72.jpg?imageView&thumbnail=345y345&quality=95',
        desc: '一键开伞收伞，1秒自动遮风挡雨防晒',
        userImg: 'http://yanxuan.nosdn.127.net/8830006db2f5103f514290f252755f13.JPG?imageView&quality=65&thumbnail=48y48',
        userName: '网易游戏：波涛',
        lookNum: '3779'
      }
    ],
    goodsListRight: [{
      imgUrl: 'https://yanxuan.nosdn.127.net/e6339841a34ef9fa658cacc97f4a8f14.jpg?imageView&thumbnail=345y460&quality=95',
      desc: '严****6的晒图',
      userImg: 'https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png?imageView&quality=65&thumbnail=48y48',
      userName: '严****6',
      lookNum: '10'
    },
    {
      imgUrl: 'https://yanxuan.nosdn.127.net/04bedb659e621e2f1b48f87eebf41c1c.jpg?imageView&thumbnail=345y345&quality=95',
      desc: '爆卖18万盒的除甲醛净化剂，好在哪里？',
      userImg: 'http://yanxuan.nosdn.127.net/d4379373d8e5200bdd8430896a6a5fbf.jpg?imageView&quality=65&thumbnail=48y48',
      userName: '网易味央：小周',
      lookNum: '1481'
    },
    {
      imgUrl: 'https://yanxuan.nosdn.127.net/b0b24976d8956f25091fba6b242379b3.jpg?imageView&thumbnail=345y460&quality=95',
      desc: '1****g的晒图',
      userImg: 'https://yanxuan.nosdn.127.net/25c8c80532c56eac81b6af2197e7d8ba.jpg?imageView&quality=65&thumbnail=48y48',
      userName: '1****g',
      lookNum: '13'
    },
    {
      imgUrl: 'https://yanxuan.nosdn.127.net/4442c4c1daf8a02140c5390c9c781982.jpg?imageView&thumbnail=345y191.66666666666669&quality=95',
      desc: '明星防晒实战篇',
      userImg: 'http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48',
      userName: '选妹',
      lookNum: '3479'
    }]
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