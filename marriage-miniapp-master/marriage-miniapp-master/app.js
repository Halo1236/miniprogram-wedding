// app.js
App({
  onLaunch: function() {
    //var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      // wx.login({
      //     success: function () {
      //         wx.getUserInfo({
      //             success: function (res) {
      //                 //console.info(res);
      //                 that.globalData.userInfo = res.userInfo;
      //                 typeof cb == "function" && cb(that.globalData.userInfo)
      //             }
      //         })
      //     }
      // });
    }

  },
  onHide: function() {
    wx.pauseBackgroundAudio();
  },
  onShow: function() {
    wx.playBackgroundAudio()
  },
  globalData: {
    userInfo: null,
    // 下面填写酒店相关信息
    lat: 30.0000,
    lon: 120.000000,
    addressName: "希尔顿大酒店",
    appid: 'wx3031c76f756f07a6', //此处改成您自己的小程序appid
    uid: 1,
    server: 'https://wx.qiaker.cn/api',
    music_url: 'https://6861-halo-j1k6s-1301153955.tcb.qcloud.la/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%BD%A9%E8%99%B9.mp3?sign=bdfb104e682efc52bae005295e440e35&t=1579578584'
  }
});