
Page({
  data: {
    picture:1
  },

  onLoad: function() {
  },
  navToPre(){
    wx.navigateTo({
      url: '/pages/experience/swidata/swidata',
    })
  },
  submit:function(){
    var that=this
    let i = that.data.picure
    if(i==1){
      wx.navigateTo({
        url: '/pages/experience/details/details?index=1',
      })
    }
    if(i==3){
      wx.navigateTo({
        url: '/pages/experience/details/details?index=3',
      })
    }
    if(i==4){
      wx.navigateTo({
        url: '/pages/experience/details/details?index=4',
      })
    } 
    if(i==5){
      wx.navigateTo({
        url: '/pages/experience/details/details?index=5',
      })
    } 
    if(i==6){
      wx.navigateTo({
        url: '/pages/experience/details/details?index=6',
      })
    } 
    if(i==9){
      wx.navigateTo({
        url: '/pages/experience/details/details?index=9',
      })
    } 
  },
  btp:function(e){
    var that=this
    that.setData({
      picure:e.detail.value
    })
  }

})
