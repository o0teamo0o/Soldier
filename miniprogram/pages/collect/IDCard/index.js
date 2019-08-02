// miniprogram/pages/collect/IDCard/index.js
const app = getApp()
var utils = require('../../../libs/util.js');
import Notify from '../../../components/notify/notify.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    idNumber: null, //身份证号码
    birthday: null, //出生日期
    sex: null, //性别
    numList: [], //身份证数组
    isIDCardError: true, //身份证验证是否有误
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**`
   * input输入监听
   */
  onInputListener: function(e) {
    var that = this;
    var value = e.detail.value;
    that.data.idNumber = value;
    that.data.isIDCardError = utils.checkIdcard(value);

    if (!that.data.isIDCardError) {
      //获取出生日期
      that.data.birthday = utils.getIDCardBirthday(value);
      that.data.sex = utils.maleOrFemalByIdCard(value);
    }

    that.data.numList = value.split('');
    that.setData({
      isIDCardError: that.data.isIDCardError,
      numList: that.data.numList,
    })
  },

  /**
   * 身份证号码提交
   */
  onIDCardSubmit: function() {
    var that = this;
    if (utils.isEmpty(that.data.idNumber)) {
      app.showToastError("请先输入身份证!")
      return;
    }

    if (that.data.isIDCardError) {
      app.showToastError("请输入正确的身份证号码!")
      return;
    }

    if (utils.isEmpty(app.globalData.userInfo)) {
      app.globalData.userInfo = {};
    }
    app.globalData.userInfo.shenfenzheng = that.data.idNumber;
    app.globalData.userInfo.chushengnianyue = that.data.birthday;
    // app.globalData.userInfo.xingbie = that.data.sex;

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