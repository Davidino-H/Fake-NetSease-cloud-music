// pages/other/other.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        person: {
            username: 'David',
            age: 33
        }
    },
    // 获取用户openId的回调
    handleGetOpendId() {
        // 1.获取登陆凭证
        wx.login({
            success: (res) => {
                console.log(res);
                let code=res.code;
                // 2.将登陆凭证发给服务器
                
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})