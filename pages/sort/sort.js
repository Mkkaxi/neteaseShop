// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serachWord: '输入你想要的内容，几秒一变',
    myindex: 0,
    myselectbar: [
      { "name": "为你推荐", "index": 1 },
      { "name": "居家生活", "index": 2 },
      { "name": "服饰鞋包", "index": 3 },
      { "name": "美食酒水", "index": 4 },
      { "name": "个人清洁", "index": 5 },
      { "name": "母婴亲子", "index": 6 },
      { "name": "运动旅行", "index": 7 },
      { "name": "数码家电", "index": 8 },
      { "name": "严选全球", "index": 9 },
      { "name": "文娱特色", "index": 10 },
      { "name": "男装专区", "index": 11 },
      { "name": "女装专区", "index": 12 },
      { "name": "床品家具", "index": 13 },
      { "name": "餐厨专区", "index": 14 },
    ],
    pageList: [
      {

        page: [
          {
            "title": "常用分类",
            "content": [{
              "name1": "全部商品",
              "imgUrl": 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView'
            },


            {
              "name2": "热销爆款",
              "img2": 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView'
            }]
          },
          {
            "title": "推荐专区",
            "content": [{
              "name1": "员工精选",
              "imgUrl": 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView'
            },

            {
              "name2": "人气好物",
              "img2": 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView'
            }]
          }
        ]
      },
    ]
  },

  //   "name3":"全球美食",
  //   "name4":"好物上新",
  //   "name5":"家庭清洁",
  //   "name6":"家清用品",
  //   "name7":"减脂必备",
  //   "name8":"女式运动裤装",
  //   "name9":"洗护"
  // }],
  // "img":[{


  //   "img3":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //   "img4":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //   "img5":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //   "img6":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //   "img7":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //   "img8":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //   "img9":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  // }]
  //     },
  //     {"index":2,
  //     "title":"常用分类",
  //     "name":[{
  //       "name1":"全部商品",
  //       "name2":"热销爆款",
  //       "name3":"全球美食",
  //       "name4":"好物上新",
  //       "name5":"家庭清洁",
  //       "name6":"家清用品",
  //       "name7":"减脂必备",
  //       "name8":"女式运动裤装",
  //       "name9":"洗护"
  //     }],
  //     "img":[{
  //       "img1":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //       "img2":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //       "img3":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //       "img4":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //       "img5":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //       "img6":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //       "img7":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //       "img8":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //       "img9":'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView',
  //     }]
  //     },
  //   ],
  // }


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
    this.setData({

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