//index.js89 
//获取应用实例
const app = getApp()
Page({
  handleJump:function(e){
    var id=e.target.dataset.id;
    if(id==1){
      wx.navigateTo({
        url: '/pages/shoplist/shoplist',
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,img_url:"http://127.0.0.1:3000/img/6.jpg"},
      {id:2,img_url:"http://127.0.0.1:3000/img/5.jpg"},
      {id:3,img_url:"http://127.0.0.1:3000/img/6.jpg"},
      {id:4,img_url:"http://127.0.0.1:3000/img/5.jpg"}
    ],
    navlist:[
      { id: 1, img_url: "http://127.0.0.1:3000/icons/1.png", title: "礼服"},
      { id: 2, img_url: "http://127.0.0.1:3000/icons/2.png", title: "蛋糕"},
      { id: 3, img_url: "http://127.0.0.1:3000/icons/3.png", title: "伴手礼"},
      { id: 4, img_url: "http://127.0.0.1:3000/icons/4.png", title: "婚戒"},
      { id: 5, img_url: "http://127.0.0.1:3000/icons/5.png", title: "捧花"},
      { id: 6, img_url: "http://127.0.0.1:3000/icons/6.png", title: "结婚日"},
      { id: 7, img_url: "http://127.0.0.1:3000/icons/7.png", title: "婚车"},
      { id: 8, img_url: "http://127.0.0.1:3000/icons/8.png", title: "场地" },
      { id: 9, img_url: "http://127.0.0.1:3000/icons/9.png", title: "摄像"}
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