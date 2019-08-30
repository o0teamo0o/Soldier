//app.js
import Notify from './components/notify/notify.js';

App({

  globalData: {
    userInfo: {}, //微信用户信息
    isDebug: false,
    showLog: false,
    debugPath: 'https://jd.yuexintec.com/',
    releasePath: 'https://jd.yuexintec.com/',
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    var that = this;

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'debug-2ppdt',
        traceUser: true,
      })
    }
  },

  /**
   *  获取用户openid
   */
  getOpenid: function() {
    var that = this;
    return new Promise(function(result) {
      wx.cloud.callFunction({
        name: 'login',
        complete: res => {
          if (that.globalData.showLog) {
            console.info("当前用户openId:", res.result.openid)
          }
          that.globalData.openId = res.result.openid;
          result(res.result.openid);
        }
      })
    })
  },

  /**
   * 显示success日志
   */
  showToastSuccess: function(message) {
    Notify({
      text: message,
      duration: 3000,
      selector: '#notify',
      backgroundColor: '#56D176'
    });
  },

  /**
   * 显示错误日志
   */
  showToastError: function(message) {
    Notify({
      text: message,
      duration: 3000,
      selector: '#notify',
      backgroundColor: '#F24439'
    });
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  }
})