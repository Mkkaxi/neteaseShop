
Page({

  /**
   * 页面的初始数据
   */
  kk:function(e) {
    // console.log(e);
    let detailAddress = e.detail.value
    let mydetailAddress = `ADDRESS.detailAddress`
    this.setData({
      [mydetailAddress]:detailAddress
    })
  },
  myinput2:function(e) {
    // console.log(e);
    let Pname = e.detail.value
    let myPname = `ADDRESS.Pname`
    this.setData({
      [myPname]:Pname
    })
  },  
  myinput3:function(e) {
    // console.log(e);
    let phonenumber = e.detail.value
    let myphonenumber = `ADDRESS.phonenumber`
    this.setData({
      [myphonenumber]:phonenumber
    })
  },
  data: {
    color:"gray",
    ADDRESS:{
      bindAddress:'',
      detailAddress:'',
      Pname:'',
      phonenumber:'',
    },
    opacity:1,
    hiddenMyAddress:'none',
    myBlockColor:-1,
    addressInformation: [],
    showCity: "block",
    showBlock: "none",
    mychangeColor: "gray",
    myshowpostage: "none",
    translateX: 0,
    mychangewrapper: true,
    city: [        
      {
        city: '北京市',
        block: ['东城区','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区'],
        isShow: false
      },
      {
        city: '天津市',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '河北省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '山西省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '江西省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '安徽省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '浙江省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '福建省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '河南省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '湖北省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '广东省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '海南省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '云南省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      },
      {
        city: '陕西省',
        isShow: false,
        block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
      }
  ],
  blockList: []
  },
  // 控制3/4屏邮费的显示
  showPostage() {
    if (this.data.myshowpostage == "none") {
      this.setData({
        myshowpostage: "block"
      })
    } else {
      this.setData({
        myshowpostage: "none"
      })
    }
  },
  // 控制3/4屏地址的显示
  hiddenAddress(){
    if (this.data.hiddenMyAddress == "none") {
      this.setData({
        hiddenMyAddress: "block",
        opacity:0.5
      })
    } else {
      this.setData({
        hiddenMyAddress: "none",
        opacity:1
      })
    }

  },
  // 保存city信息
  choseCity(e) {
    let addressInformation = this.data.addressInformation
    let city = this.data.city
    let index = e.currentTarget.dataset.index
    addressInformation.push(city[index].city)
    let temp = this.data.addressInformation
    this.setData({
      showCity: 'none',
      addressInformation: temp,
      showBlock: 'block',
      blockList: city[index].block
    })
  },
  //保存区信息
  choseBlock(e) {
    let addressInformation = this.data.addressInformation
    let blockList = this.data.blockList
    let index = e.currentTarget.dataset.index
    let myBlockColor = index
    if(addressInformation.length === 2){
      addressInformation.pop()
    }
    if(addressInformation.indexOf(blockList[index])=== -1){
      addressInformation.push(blockList[index])
    }

    let temp = this.data.addressInformation
    let mybindAddress = `ADDRESS.bindAddress`
    this.setData({
      addressInformation: temp,
      myBlockColor:myBlockColor,
      mychangeColor:'black',
      [mybindAddress]:temp,
      color:"black"
    })
  },
  // 页面透明度
  pageopacity(){
    let temp = 0
    let opacity = this.data.opacity
    if(opacity==1){
      temp = 0.5
    }else{
      temp = 1
    }
    this.setData({
      opacity:temp
    })
  },
  // 按钮携带数据跳转页面
  buttonListener:function(){
    let that = this
    console.log(that.data.Pname);
    wx.setStorageSync("bindAddress", that.data.ADDRESS.bindAddress)
    wx.setStorageSync("detailAddress", that.data.ADDRESS.detailAddress)
    wx.setStorageSync("Pname", that.data.ADDRESS.Pname)
    wx.setStorageSync("phonenumber", that.data.ADDRESS.phonenumber)
    wx.navigateTo({
      url:'/pages/address/address'
      // url:'/pages/address/address?bindAddress=' + 
      // that.data.bindAddress + '&detailAddressData=' + that.data.detailAddress +
      //  '&PnameData=' + that.data.Pname + 
      // '&phonenumberData=' + that.data.phonenumber,
      // url:`/pages/address/address?bindAddress=${that.data.bindAddress}&detailAddressData=${that.data.detailAddress}&PnameData=${that.data.Pname}&phonenumberData=${that.data.phonenumber}`
      
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