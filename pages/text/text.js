var touchDot = 0;//触摸时的原点

var time = 0;// 时间记录，用于滑动时且时间小于1s则执行左右滑动

var interval = "";// 记录/清理时间记录

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr:[
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg'
    ]
  },
  previewImg:function(e){
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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

    url: '../text2/text2'

   }); 

  }

  // 向右滑动

  if (touchMove - touchDot >= 40 && time < 10) {

   console.log('向右滑动');

   wx.switchTab({

    url: "../text2/text2"

   }); 

  }

 },

 // 触摸结束事件

 touchEnd: function (e) {

  clearInterval(interval); // 清除setInterval

  time = 0;

 },


})