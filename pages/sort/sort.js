// pages/sort/sort.js
var touchDot = 0;//触摸时的原点

var time = 0;// 时间记录，用于滑动时且时间小于1s则执行左右滑动

var interval = "";// 记录/清理时间记录
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [{
        id: 'tuijian',
        name: '推荐专区'
      },
      {
        id: 'xinpin',
        name: '新品专区'
      },
      {
        id: 'jvjia',
        name: '居家生活'
      },
      {
        id: 'fushi',
        name: '服饰鞋包'
      },
      {
        id: 'meishi',
        name: '美食酒水'
      },
      {
        id: 'gehu',
        name: '个护清洁'
      },
      {
        id: 'muying',
        name: '母婴亲子'
      }
    ],

    pages: [
      {
        /** 页面 **/
        banner: 'https://yanxuan.nosdn.127.net/dec6ff5ae8bae410809598950ba1f5b4.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
        content: [/**obj 为页面中的小块 */  
                    {                                
                      title: '常用分类',

                      /**页面小块中的商品部分 */
                      goods: [ 
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'}
                             ]
                    },
                    {                                
                      title: '常用分类',

                      /**页面小块中的商品部分 */
                      goods: [ 
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'}
                             ]
                    },
                    {                                
                      title: '常用分类',

                      /**页面小块中的商品部分 */
                      goods: [ 
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'}
                             ]
                    },
                    {                                
                      title: '常用分类',

                      /**页面小块中的商品部分 */
                      goods: [ 
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                              {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'}
                             ]
                    }
                  ]
              },
              {
                /** 页面 **/
                banner: 'https://yanxuan.nosdn.127.net/dec6ff5ae8bae410809598950ba1f5b4.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
                content: [/**obj 为页面中的小块 */  
                            {                                
                              title: '常用分类',
        
                              /**页面小块中的商品部分 */
                              goods: [ 
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'}
                                     ]
                            },
                            {                                
                              title: '常用分类',
        
                              /**页面小块中的商品部分 */
                              goods: [ 
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'}
                                     ]
                            },
                            {                                
                              title: '常用分类',
        
                              /**页面小块中的商品部分 */
                              goods: [ 
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'}
                                     ]
                            },
                            {                                
                              title: '常用分类',
        
                              /**页面小块中的商品部分 */
                              goods: [ 
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'},
                                      {imgUrl: 'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView', text: '员工精选'}
                                     ]
                            }
                          ]
              }
            ]
  },
// 触摸开始事件

touchStart: function (e) {

  touchDot = e.touches[0].pageX; // 获取触摸时的原点

  // 使用js计时器记录时间 

  interval = setInterval(function () {

   time++;

  }, 100);

 },

 // 触摸移动事件

 touchMove: function (e) {

  var touchMove = e.touches[0].pageX;

  console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));

  // 向左滑动 

  if (touchMove - touchDot <= -40 && time < 10) {

   wx.switchTab({

    url: '../worthbuy/worthbuy'

   }); 

  }

  // 向右滑动

  if (touchMove - touchDot >= 40 && time < 10) {

   console.log('向右滑动');

   wx.switchTab({

    url: "../worthbuy/worthbuy"

   }); 

  }

 },

 // 触摸结束事件

 touchEnd: function (e) {

  clearInterval(interval); // 清除setInterval

  time = 0;

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