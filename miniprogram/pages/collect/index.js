// miniprogram/pages/collect/index.js
const app = getApp()
var dateUtil = require('../../libs/dateUtil.js');
var utils = require('../../libs/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexs: ["请选择性别", "男", "女"],
    sexIndex: 0,
    birthdayStartDate: null,
    birthdayEndDate: null,
    areas: ["请选择您的籍贯", "北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "台湾", "香港", "澳门", "国外"],
    areaIndex: 0,
    educations: ["请选择您的学历", "初中", "中技", "高中", "中专", "大专", "本科", "硕士", "MBA", "EMBA", "博士", "其他"],
    educationIndex: 0,
    intoDate: "请选择您的入伍时间",
    intoStartDate: null,
    intoEndDate: null,
    leaveDate: "请选择您的退役时间",
    leaveStartDate: null,
    leaveEndDate: null,
    isShowAddressMask: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    that.setData({
      userInfo: app.globalData.userInfo,
    })
    that.data.userInfo.shengri = "请选择您的出生日期";

    that.data.birthdayStartDate = dateUtil.fromToday(-36500, "-"); //100岁
    that.data.birthdayEndDate = dateUtil.fromToday(-5110, "-"); //14岁

    that.data.intoEndDate = dateUtil.fromToday(0, "-");
    that.data.intoStartDate = dateUtil.fromToday(-21900, "-"); // 60岁

    that.setData({
      birthdayStartDate: that.data.birthdayStartDate,
      birthdayEndDate: that.data.birthdayEndDate,
      intoStartDate: that.data.intoStartDate,
      intoEndDate: that.data.intoEndDate,
    })
  },

  /**
   * 姓名输入监听
   */
  onInputNameListener: function(e) {
    var that = this;
    that.data.userInfo.xingming = e.detail.value;
    console.error("user:", that.data.userInfo)
  },

  /**
   * 性别监听
   */
  bindSexChange: function(e) {
    var that = this;
    that.data.userInfo.xingbie = (e.detail.value - 1);
    that.setData({
      sexIndex: e.detail.value,
    })
    console.error("user:", that.data.userInfo)
  },

  /**
   * 手机号码监听
   */
  onInputPhoneListener: function(e) {
    var that = this;
    that.data.userInfo.dianhua = e.detail.value;
    console.error("user:", that.data.userInfo)
  },

  /**
   * 微信号码监听
   */
  onInputWeixinListener: function(e) {
    var that = this;
    that.data.userInfo.weixin = e.detail.value;
    console.error("user:", that.data.userInfo)
  },

  /**
   * QQ号码监听
   */
  onInputQQListener: function (e) {
    var that = this;
    that.data.userInfo.qq = e.detail.value;
    console.error("user:", that.data.userInfo)
  },

  bindAreaChange: function(e) {
    this.setData({
      areaIndex: e.detail.value
    })
  },

  bindEducationChange: function(e) {
    this.setData({
      educationIndex: e.detail.value
    })
  },

  /**
   * 出生日期变化监听
   */
  onBirthdayDateDateChange: function(e) {
    var that = this;
    that.data.userInfo.shengri = e.detail.value,
      this.setData({
        userInfo: that.data.userInfo,
      })
  },


  bindIntoDateChange: function(e) {
    this.setData({
      intoDate: e.detail.value,
      leaveStartDate: e.detail.value,
    })
  },

  bindLeaveDateChange: function(e) {
    this.setData({
      leaveDate: e.detail.value
    })
  },

  /**
   * 显示所在区域对话框
   */
  showAddressPickerView: function() {
    this.setData({
      isShowAddressMask: true
    })
  },


  /**
   * 选择所在区域监听
   */
  selectAreaListener: function(e) {
    var that = this;
    var province = e.detail.currentTarget.dataset.province;
    var city = e.detail.currentTarget.dataset.city;
    var area = e.detail.currentTarget.dataset.area;

    that.data.province = province;
    that.data.city = city;
    that.data.area = area;

    this.data.address = province + "-" + city + "-" + area;
    this.setData({
      isShowAddressMask: false,
      address: this.data.address
    })
  },

  bindPoliticsChange: function(e) {
    this.setData({
      politicsIndex: e.detail.value
    })
  },

  /**
   * 跳转到身份证页面
   */
  jumpIDPage: function() {
    var that = this;
    wx.navigateTo({
      url: './IDCard/index',
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
    var that = this;

    that.setData({
      userInfo: app.globalData.userInfo,
    })
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