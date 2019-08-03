// miniprogram/pages/collect/extend/index.js
const app = getApp()
var utils = require('../../../libs/util.js');
import Notify from '../../../components/notify/notify.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,
    hint: "",
    placeholder: "",
    title: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.data.type = options.type;
    if (options.type == 0) {
      that.data.hint = "所在部队专业";
      that.data.placeholder = "请填写所在部队专业";
      that.data.title = "部队专业";
      if (!utils.isEmpty(app.globalData.userInfo.buduizhuanye)) {
        that.setData({
          textValue: app.globalData.userInfo.buduizhuanye
        })
      }
    } else if (options.type == 1) {
      that.data.hint = "所在部队特长";
      that.data.placeholder = "请填写所在部队特长";
      that.data.title = "部队特长";
      if (!utils.isEmpty(app.globalData.userInfo.buduitechang)) {
        that.setData({
          textValue: app.globalData.userInfo.buduitechang
        })
      }
    } else if (options.type == 2) {
      that.data.hint = "退役时军种";
      that.data.placeholder = "请填写退役时的军种";
      that.data.title = "军种";
      if (!utils.isEmpty(app.globalData.userInfo.tuiyishijunzhong)) {
        that.setData({
          textValue: app.globalData.userInfo.tuiyishijunzhong
        })
      }
    } else if (options.type == 3) {
      that.data.hint = "意向职业";
      that.data.placeholder = "请填写您的意向职业";
      that.data.title = "意向职业";
      if (!utils.isEmpty(app.globalData.userInfo.yixiangzhiye)) {
        that.setData({
          textValue: app.globalData.userInfo.yixiangzhiye
        })
      }
    }


    wx.setNavigationBarTitle({
      title: that.data.title,
    })

    that.setData({
      hint: that.data.hint,
      placeholder: that.data.placeholder,
    })
  },


  /**`
   * input输入监听
   */
  onInputListener: function(e) {
    var that = this;
    var value = e.detail.value;

    if (that.data.type == 0) {
      app.globalData.userInfo.buduizhuanye = value;
    } else if (that.data.type == 1) {
      app.globalData.userInfo.buduitechang = value;
    } else if (that.data.type == 2) {
      app.globalData.userInfo.tuiyishijunzhong = value;
    } else if (that.data.type == 3) {
      app.globalData.userInfo.yixiangzhiye = value;
    }
  },

  /**
   * 身份证号码提交
   */
  onIDCardSubmit: function() {
    var that = this;

    if (that.data.type == 0) {
      if (utils.isEmpty(app.globalData.userInfo.buduizhuanye)) {
        app.showToastError("请先填写部队专业信息!")
        return;
      }
    } else if (that.data.type == 1) {
      if (utils.isEmpty(app.globalData.userInfo.buduitechang)) {
        app.showToastError("请先填写部队特长信息!")
        return;
      }
    } else if (that.data.type == 2) {
      if (utils.isEmpty(app.globalData.userInfo.tuiyishijunzhong)) {
        app.showToastError("请先填写退役时兵种信息!")
        return;
      }
    } else if (that.data.type == 3) {
      if (utils.isEmpty(app.globalData.userInfo.yixiangzhiye)) {
        app.showToastError("请先填写意向职业信息!")
        return;
      }
    }
    wx.navigateBack({
      delta: 1
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
  onShow: function() {

  },

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