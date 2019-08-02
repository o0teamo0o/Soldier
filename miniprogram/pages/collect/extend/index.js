// miniprogram/pages/collect/extend/index.js
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
    } else if (options.type == 1) {
      that.data.hint = "所在部队特长";
      that.data.placeholder = "请填写所在部队特长";
      that.data.title = "部队特长";
    } else if (options.type == 2) {
      that.data.hint = "退役时军种";
      that.data.placeholder = "请填写退役时的军种";
      that.data.title = "军种";
    } else if (options.type == 3) {
      that.data.hint = "意向职业";
      that.data.placeholder = "请填写您的意向职业";
      that.data.title = "意向职业";
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
      app.globalData.buduizhuanye = e.detail.value;
    } else if (that.data.type == 1) {
      app.globalData.buduitechang = e.detail.value;
    } else if (that.data.type == 2) {
      app.globalData.tuiyishijunzhong = e.detail.value;
    } else if (that.data.type == 3) {
      app.globalData.yixiangzhiye = e.detail.value;
    }
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