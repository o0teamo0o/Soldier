// miniprogram/pages/collect/index.js
const app = getApp()
var dateUtil = require('../../libs/dateUtil.js');
var utils = require('../../libs/util.js');
import Notify from '../../components/notify/notify.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexIndex: 0,
    birthdayStartDate: null,
    birthdayEndDate: null,
    areas: ["请选择您的籍贯", "北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "台湾", "香港", "澳门", "国外"],
    areaIndex: 0,
    educations: ["请选择您的学历", "初中", "中技", "高中", "中专", "大专", "本科", "硕士", "MBA", "EMBA", "博士", "其他"],
    educationIndex: 0,
    collegeIndex: 0, //是否大学入伍 0 是 1 否
    intoDate: "请选择您的入伍时间",
    intoStartDate: null,
    intoEndDate: null,
    leaveDate: "请选择您的退役时间",
    leaveStartDate: null,
    leaveEndDate: null,
    isShowArmyAddressDialog: false,
    armyAddress: null, //退役地址
    isShowLiveAddressDialog: false,
    liveAddress: null, //现居住地
    isShowWorkCityDialog: false,
    workCity: null, //意向城市
    isShowUserInfoDialog: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    app.globalData.userInfo.xingbie = "1";
    app.globalData.userInfo.sfdaxueshengruwu = "0";

    that.setData({
      userInfo: app.globalData.userInfo,
    })
    that.data.userInfo.chushengnianyue = "请选择您的出生日期";

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
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;

    that.setData({
      userInfo: app.globalData.userInfo,
    })
    console.error("userinfo:", that.data.userInfo)
  },

  /**
   * 提交按钮
   */
  onSubmit: function() {
    var that = this;
    if (utils.isEmpty(that.data.userInfo.xingming)) {
      app.showToastError("请先完善姓名信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.shouji)) {
      app.showToastError("请先完善手机信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.weixin)) {
      app.showToastError("请先完善微信号!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.qq)) {
      app.showToastError("请先完善QQ号!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.shenfenzheng)) {
      app.showToastError("请先完善身份证信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.chushengnianyue)) {
      app.showToastError("请先完善出生年月信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.shengao)) {
      app.showToastError("请先完善身高信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.tizhong)) {
      app.showToastError("请先完善体重信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.jiguang)) {
      app.showToastError("请先完善籍贯信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.xueli)) {
      app.showToastError("请先完善学历信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.buduizhuanye)) {
      app.showToastError("请先完善部队专业信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.buduitechang)) {
      app.showToastError("请先完善部队特长信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.tuiyishijunzhong)) {
      app.showToastError("请先完善退役时军种信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.tuiyishizhudi)) {
      app.showToastError("请先完善退役时驻地信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.armyAddressInfo)) {
      app.showToastError("请先完善退役时驻地详细地址信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.ruwushijian)) {
      app.showToastError("请先完善入伍时间信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.tuiwushijian)) {
      app.showToastError("请先完善退伍时间信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.junxian)) {
      app.showToastError("请先完善军衔信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.xianjuzhudi)) {
      app.showToastError("请先完善现居住地信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.liveAddressInfo)) {
      app.showToastError("请先完善现居住地详细地址信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.yixiangzhiye)) {
      app.showToastError("请先完善意向职业信息!")
      return;
    }
    if (utils.isEmpty(that.data.userInfo.yixiangchengshi)) {
      app.showToastError("请先完善意向城市信息!")
      return;
    }
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
  selectedSexListener: function(e) {
    var that = this;
    that.data.userInfo.xingbie = e.currentTarget.dataset.type;
    this.setData({
      sexIndex: e.currentTarget.dataset.type
    })
    console.error("user:", that.data.userInfo)
  },

  /**
   * 手机号码监听
   */
  onInputPhoneListener: function(e) {
    var that = this;
    that.data.userInfo.shouji = e.detail.value;
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
  onInputQQListener: function(e) {
    var that = this;
    that.data.userInfo.qq = e.detail.value;
    console.error("user:", that.data.userInfo)
  },

  /**
   * 身高监听
   */
  onInputShengaoListener: function(e) {
    var that = this;
    that.data.userInfo.shengao = e.detail.value;
    console.error("user:", that.data.userInfo)
  },

  /**
   * 体重监听
   */
  onInputTizhongListener: function(e) {
    var that = this;
    that.data.userInfo.tizhong = e.detail.value;
    console.error("user:", that.data.userInfo)
  },

  /**
   * 籍贯监听
   */
  bindAreaChange: function(e) {
    var that = this;
    that.data.userInfo.jiguang = that.data.areas[e.detail.value];
    this.setData({
      areaIndex: e.detail.value
    })
    console.error("user:", that.data.userInfo)
  },

  /**
   * 学历监听
   */
  bindEducationChange: function(e) {
    var that = this;
    that.data.userInfo.xueli = that.data.educations[e.detail.value];
    this.setData({
      educationIndex: e.detail.value
    })
    console.error("user:", that.data.userInfo)
  },

  /**
   * 出生日期变化监听
   */
  onBirthdayDateDateChange: function(e) {
    var that = this;
    that.data.userInfo.chushengnianyue = e.detail.value;
    this.setData({
      userInfo: that.data.userInfo,
    })
    console.error("user:", that.data.userInfo)
  },

  /**
   * 是否大学生入伍
   */
  selectedCollegeListener: function(e) {
    var that = this;
    that.data.userInfo.sfdaxueshengruwu = e.currentTarget.dataset.type;
    this.setData({
      collegeIndex: e.currentTarget.dataset.type
    })
    console.error("user:", that.data.userInfo)
  },

  /**
   * 入伍时间监听
   */
  bindIntoDateChange: function(e) {
    var that = this;
    that.data.userInfo.ruwushijian = e.detail.value
    this.setData({
      intoDate: e.detail.value,
      leaveStartDate: e.detail.value,
    })
    console.error("user:", that.data.userInfo)
  },

  /**
   * 退役时间监听
   */
  bindLeaveDateChange: function(e) {
    var that = this;
    that.data.userInfo.tuiwushijian = e.detail.value
    this.setData({
      leaveDate: e.detail.value
    })
    console.error("user:", that.data.userInfo)
  },

  /**
   * 军衔监听
   */
  onInputRankListener: function(e) {
    var that = this;
    that.data.userInfo.junxian = e.detail.value;
    console.error("user:", that.data.userInfo)
  },

  /**
   * 退役居住地显示
   */
  showArmyAddressPickerView: function() {
    this.setData({
      isShowArmyAddressDialog: true
    })
  },

  /**
   * 退役居住地监听
   */
  selectArmyAddressListener: function(e) {
    var that = this;
    var province = e.detail.currentTarget.dataset.province;
    var city = e.detail.currentTarget.dataset.city;
    var area = e.detail.currentTarget.dataset.area;

    that.data.userInfo.tuiyishizhudi = province + city + area;
    that.data.armyAddress = province + "-" + city + "-" + area;
    this.setData({
      isShowArmyAddressDialog: false,
      armyAddress: that.data.armyAddress
    })
    console.error("user:", that.data.userInfo)
  },

  /**
   * 退役详细地址监听
   */
  onInputArmyAddressListener: function(e) {
    var that = this;
    that.data.userInfo.armyAddressInfo = e.detail.value;
    console.error("user:", that.data.userInfo)
  },

  /**
   * 现居住地显示
   */
  showLiveAddressPickerView: function() {
    this.setData({
      isShowLiveAddressDialog: true
    })
  },

  /**
   * 现居地址所在区域监听
   */
  selectLiveAddressListener: function(e) {
    var that = this;
    var province = e.detail.currentTarget.dataset.province;
    var city = e.detail.currentTarget.dataset.city;
    var area = e.detail.currentTarget.dataset.area;

    that.data.userInfo.xianjuzhudi = province + city + area;
    that.data.liveAddress = province + "-" + city + "-" + area;
    this.setData({
      isShowLiveAddressDialog: false,
      liveAddress: that.data.liveAddress
    })
    console.error("user:", that.data.userInfo)
  },

  /**
   * 现居住详细地址监听
   */
  onInputLiveAddressListener: function(e) {
    var that = this;
    that.data.userInfo.liveAddressInfo = e.detail.value;
    console.error("user:", that.data.userInfo)
  },

  /**
   * 退役居住地显示
   */
  showWorkCityPickerView: function() {
    this.setData({
      isShowWorkCityDialog: true
    })
  },

  /**
   * 退役居住地监听
   */
  selectWorkCityListener: function(e) {
    var that = this;
    var province = e.detail.currentTarget.dataset.province;
    var city = e.detail.currentTarget.dataset.city;

    that.data.userInfo.yixiangchengshi = city;
    that.data.workCity = city;
    this.setData({
      isShowWorkCityDialog: false,
      workCity: that.data.workCity
    })
    console.error("user:", that.data.userInfo)
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

  jumpExtendPage: function(e) {
    var that = this;
    var type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: './extend/index?type=' + type,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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