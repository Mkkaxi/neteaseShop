// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */

  changeLeft: function (e) {
    this.setData({
      lineLeft: e.detail.scrollLeft / 355 * 55 * 0.55
    })
  },

  changeMenu: function(e) {
    console.log(e.currentTarget.id);
    this.setData({
      selectId: e.currentTarget.id
    })
  },

  data: {
    sort: [{
        imgUrl: 'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
        title: '新品首发'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
        title: '居家生活'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png',
        title: '新品首发'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
        title: '服饰鞋包'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png',
        title: '美食酒水'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png',
        title: '个护清洁'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png',
        title: '母婴亲子'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png',
        title: '运动旅行'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png',
        title: '数码家电'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png',
        title: '全球特色'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif',
        title: '好货抄底'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
        title: '新品首发'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
        title: '居家生活'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png',
        title: '新品首发'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
        title: '服饰鞋包'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png',
        title: '美食酒水'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png',
        title: '个护清洁'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png',
        title: '母婴亲子'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png',
        title: '运动旅行'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png',
        title: '数码家电'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png',
        title: '全球特色'
      },
      {
        imgUrl: 'https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif',
        title: '好货抄底'
      }
    ],

    menu: [{
        id: "jingxuan",
        title: '精选',
        text: '入门推荐'
      },
      {
        id: "kaimenhong",
        title: '开门红',
        text: '88爆款'
      },
      {
        id: "tehui",
        title: '特惠',
        text: '今日折扣'
      },
      {
        id: "fushi",
        title: '服饰',
        text: '品质好物'
      },
      {
        id: "dianqi",
        title: '电器',
        text: '智能生活'
      },
      {
        id: "yundong",
        title: '运动',
        text: '热爱生活'
      },
      {
        id: "muying",
        title: '母婴',
        text: '爱的呵护'
      },
      {
        id: "meishi",
        title: '美食',
        text: '吃货必看'
      },
      {
        id: "quanqiu",
        title: '全球',
        text: '进口好货'
      },
      {
        id: "jvjia",
        title: '居家',
        text: '温暖的家'
      },
      {
        id: "xihu",
        title: '洗护',
        text: '日常必备'
      }
    ],

    goods: [{
        id: "jingxuan",
        good: [{
          imgUrl: "https://yanxuan-item.nosdn.127.net/abe1cbd870e6788978fa56a4f033db39.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "D.va 可动人偶，守望先锋",
          eval: "98%",
          price: "427"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/32c2e79c69bea7ab55b9eb0fcc58de9c.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "耐穿又耐看，男式基础休闲牛津纺衬衫",
          eval: "98%",
          price: "99.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/32c2e79c69bea7ab55b9eb0fcc58de9c.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "耐穿又耐看，男式基础休闲牛津纺衬衫",
          eval: "98%",
          price: "99.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/32c2e79c69bea7ab55b9eb0fcc58de9c.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "耐穿又耐看，男式基础休闲牛津纺衬衫",
          eval: "98%",
          price: "99.9"
        }
      ]
      },
      {
        id: "kaimenhong",
        good: [
          {
            imgUrl: "https://yanxuan-item.nosdn.127.net/950f49bd47c615e774fcfdae2fe9f3c0.png?type=webp&imageView&quality=65&thumbnail=330x330",
            title: "【丁磊直播款】全净皓齿变速声波电动牙刷",
            eval: "99%",
            price: "189"
          },
          {
            imgUrl: "https://yanxuan-item.nosdn.127.net/950f49bd47c615e774fcfdae2fe9f3c0.png?type=webp&imageView&quality=65&thumbnail=330x330",
            title: "【丁磊直播款】全净皓齿变速声波电动牙刷",
            eval: "99%",
            price: "189"
          },
          {
            imgUrl: "https://yanxuan-item.nosdn.127.net/950f49bd47c615e774fcfdae2fe9f3c0.png?type=webp&imageView&quality=65&thumbnail=330x330",
            title: "【丁磊直播款】全净皓齿变速声波电动牙刷",
            eval: "99%",
            price: "189"
          },
          {
            imgUrl: "https://yanxuan-item.nosdn.127.net/950f49bd47c615e774fcfdae2fe9f3c0.png?type=webp&imageView&quality=65&thumbnail=330x330",
            title: "【丁磊直播款】全净皓齿变速声波电动牙刷",
            eval: "99%",
            price: "189"
          }
        ]
      },
      {
        id: "tehui",
        good: [{
          imgUrl: "https://yanxuan-item.nosdn.127.net/924117a25d62974fc7f9810d7df56e57.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "夏季不闷热，毛毛虫儿童网眼运动鞋 26-35码",
          eval: "97%",
          price: "129"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/924117a25d62974fc7f9810d7df56e57.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "夏季不闷热，毛毛虫儿童网眼运动鞋 26-35码",
          eval: "97%",
          price: "129"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/924117a25d62974fc7f9810d7df56e57.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "夏季不闷热，毛毛虫儿童网眼运动鞋 26-35码",
          eval: "97%",
          price: "129"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/924117a25d62974fc7f9810d7df56e57.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "夏季不闷热，毛毛虫儿童网眼运动鞋 26-35码",
          eval: "97%",
          price: "129"
        }]
      },
      {
        id: "fushi",
        good: [{
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        }]
      },
      {
        id: "dianqi",
        good: [{
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        }]
      },
      {
        id: "yundong",
        good: [{
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/65d63870ad2199963aa84f01f2d22ffd.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "上脚无负担，儿童EVA四季拖鞋 25-36码",
          eval: "97%",
          price: "16.9"
        },]
      },
      {
        id: "muying",
        good: [{
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        }]
      },
      {
        id: "meishi",
        good: [{
          imgUrl: "https://yanxuan-item.nosdn.127.net/0a0803cfaec309d0e3b26735e4067db9.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "运动健身补蛋白，低脂纯牛奶250毫升*24盒",
          eval: "99%",
          price: "88"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/0a0803cfaec309d0e3b26735e4067db9.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "运动健身补蛋白，低脂纯牛奶250毫升*24盒",
          eval: "99%",
          price: "88"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/0a0803cfaec309d0e3b26735e4067db9.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "运动健身补蛋白，低脂纯牛奶250毫升*24盒",
          eval: "99%",
          price: "88"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/0a0803cfaec309d0e3b26735e4067db9.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "运动健身补蛋白，低脂纯牛奶250毫升*24盒",
          eval: "99%",
          price: "88"
        }]
      },
      {
        id: "quanqiu",
        good: [{
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        }]
      },
      {
        id: "jvjia",
        good: [{
          imgUrl: "https://yanxuan-item.nosdn.127.net/0a0803cfaec309d0e3b26735e4067db9.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "运动健身补蛋白，低脂纯牛奶250毫升*24盒",
          eval: "99%",
          price: "88"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/0a0803cfaec309d0e3b26735e4067db9.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "运动健身补蛋白，低脂纯牛奶250毫升*24盒",
          eval: "99%",
          price: "88"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/0a0803cfaec309d0e3b26735e4067db9.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "运动健身补蛋白，低脂纯牛奶250毫升*24盒",
          eval: "99%",
          price: "88"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/0a0803cfaec309d0e3b26735e4067db9.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "运动健身补蛋白，低脂纯牛奶250毫升*24盒",
          eval: "99%",
          price: "88"
        }]
      },
      {
        id: "xihu",
        good: [{
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        },
        {
          imgUrl: "https://yanxuan-item.nosdn.127.net/6c403d249129a804814d362de68fda2e.png?type=webp&imageView&quality=65&thumbnail=330x330",
          title: "银离子抗菌还防螨，日式格纹可机洗夏凉被",
          eval: "99%",
          price: "259"
        }]
      },
    ],
    navBarHeight: 210,
    searchWidth: 700,
    lineLeft: '',
    isShowIcon: true,
    background: 0,
    selectId: 'jingxuan'
  },

  onPageScroll: function (e) {
    console.log(e);
    if (e.scrollTop > 0) {
      this.setData({
        isShowIcon: false
      })
    } else {
      this.setData({
        isShowIcon: true
      })
    }

    if (e.scrollTop > 0) {
        this.setData({
          navBarHeight: 130,
          searchWidth: 500,
        })
      
    } 
    else {
      this.setData({
        navBarHeight: 210,
        searchWidth: 710,
      })
    }
    


  },
  changegoods:function(e){
    // console.log(e);
    if(e.currentTarget.dataset.index === 0){
      wx.navigateTo({
        url:'/pages/goods/goods'
      })
    }
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