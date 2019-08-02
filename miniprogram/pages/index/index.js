//index.js
const app = getApp()
import {
  soldirerinfo, //获取用户信息
} from "../../libs/API";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowAnimation: false, //是否显示红旗动画
    openId: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.startAnimation();
  },

  /**
   * 开始动画
   */
  startAnimation: function() {
    var that = this;

    that.setData({
      isShowAnimation: true,
    })
  },

  /**
   * 获取用户信息
   */
  getUserInfo: function(e) {
    var that = this;
    if (e.detail.userInfo) {
      console.error("用户信息:", e)
      app.globalData.userInfo = e.detail.userInfo;

      app.getOpenid().then(function(res) {
        console.error("res:", res)
        that.data.openId = res;
        that.loadUserInfo();
      })

      // wx.navigateTo({
      //   url: '../collect/index',
      // })
    } else {
      //用户按了拒绝按钮
      console.log("用户拒绝了权限");
    }
  },

  /**
   * 获取用户信息
   */
  loadUserInfo: function() {
    var that = this;
    soldirerinfo("?openid=" + that.data.openId, false)
      .then(result => {
        if (result.resCode == "00000") {

        } else {
          app.showToastError(result.resInfo)
        }
      }).catch(e => {
        if (!utils.isEmpty(e.errMsg)) {
          app.showToastError(e.errMsg)
        }
      })
  },

  jumpInfoPage: function() {
    var that = this;
    wx.navigateTo({
      url: '../info/index',
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})