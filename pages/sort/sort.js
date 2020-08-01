// pages/sort/sort.js
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