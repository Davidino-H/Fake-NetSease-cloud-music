import request from '../../utils/request'
// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerList: [], // 轮播图数据
        recommendList: [], // 推荐歌单
        topList: [], //排行榜数据
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        let bannerListData = await request('/banner', {type: 2}); // 0为pc 1为android 2为iphone
        this.setData({
            bannerList: bannerListData.banners
        })
        // 获取推荐歌曲数据
        let recommendListData = await request('/personalized', {limit: 10})
        this.setData({
            recommendList: recommendListData.result
        })


        // 获取排行榜数据
        /* 
        * 需求分析:
        *   1.需要根据idx的值获取相对应的数据
        *   2.idx的取值范围是0～20，我们需要0～4 
        *   3.需要发送五次请求 
        * 
        *  */
        let index = 0;
        let resultArr = [];
        while (index < 5) {
            let topListData = await request('/top/list', {idx: index++});
            // splice(会修改原数组，可以对原数组进行增删改) slice(不会修改原数组)
            let topListItem = {name: topListData.playlist.name, tracks: topListData.playlist.tracks.slice(0, 3)};
            resultArr.push(topListItem);
            // 不需要等待五次请求才更新，用户体验好，但是渲染次数多
            this.setData({
                topList: resultArr
            })
        }
        // 更新topList的状态值,放在此处更新会导致发送请求过程中长时间白屏，用户体验差
        // this.setData({
        //     topList: resultArr
        // })
    },

    // 跳转至recommend回调
    toRecommendSong() {
        wx.navigateTo({
          url: '/pages/recommendSong/recommendSong',
        })
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