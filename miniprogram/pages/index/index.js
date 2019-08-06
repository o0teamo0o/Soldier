//index.js
const app = getApp()
var utils = require('../../libs/util.js');
import Notify from '../../components/notify/notify.js';

import {
  qrySoldirerinfo, //获取用户信息
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
        // res = "o5xTE5Mgm_sXOx1Va3AJGGRlO7pa";
        that.data.openId = res;
        app.globalData.userInfo.openid = res
        that.loadUserInfo();
      })
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
    qrySoldirerinfo("?openid=" + that.data.openId, true)
      .then(result => {
        if (result.resCode == "00000") {
          // if (utils.isEmpty(result.data)) {
          //   wx.navigateTo({
          //     url: '../collect/index',
          //   })
          // } else {
          //   app.showToastError("您已经填写过信息,请勿重复填写!")
          // }
          wx.navigateTo({
            url: '../collect/index',
          })
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
      url: '../introduction/index',
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