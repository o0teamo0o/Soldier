// miniprogram/pages/collect/index.js
var dateUtil = require('../../libs/dateUtil.js');
var util = require('../../libs/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexs: ["男", "女"],
    sexIndex: 0,
    ages: [],
    ageIndex: 0,
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
    politicses: ["请选择政治面貌", "是", "否"],
    politicsIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.data.ages = [];
    that.data.ages.push("请选择您的年龄");
    for (var i = 18; i < 61; i++) {
      that.data.ages.push(i);
    }

    that.data.intoEndDate = dateUtil.fromToday(0, "-");
    that.data.intoStartDate = dateUtil.fromToday(-21900, "-");

    that.setData({
      ages: that.data.ages,
      intoStartDate: that.data.intoStartDate,
      intoEndDate: that.data.intoEndDate,
    })
  },

  bindSexChange: function(e) {
    this.setData({
      sexIndex: e.detail.value
    })
  },

  bindAgeChange: function(e) {
    this.setData({
      ageIndex: e.detail.value
    })
  },

  bindAreaChange: function(e) {
    this.setData({
      areaIndex: e.detail.value
    })
  },

  bindEducationChange: function (e) {
    this.setData({
      educationIndex: e.detail.value
    })
  },

  bindIntoDateChange: function (e) {
    this.setData({
      intoDate: e.detail.value,
      leaveStartDate: e.detail.value,
    })
  },

  bindLeaveDateChange: function (e) {
    this.setData({
      leaveDate: e.detail.value
    })
  },

  /**
   * 显示所在区域对话框
   */
  showAddressPickerView: function () {
    this.setData({
      isShowAddressMask: true
    })
  },


  /**
   * 选择所在区域监听
   */
  selectAreaListener: function (e) {
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

  bindPoliticsChange: function (e) {
    this.setData({
      politicsIndex: e.detail.value
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