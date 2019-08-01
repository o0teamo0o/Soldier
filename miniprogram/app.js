//app.js
import Notify from './components/notify/notify.js';

App({
  
  globalData: {
    userInfo: {}, //微信用户信息
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {},

  /**
   * 显示success日志
   */
  showToastSuccess: function (message) {
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
  showToastError: function (message) {
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