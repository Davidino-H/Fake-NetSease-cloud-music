// 发送ajax请求
/*
* 1. 封装功能函数
*   1.功能明确
*   2.函数内部应保留固定代码（静态的）
*   3.将动态的数据抽取形成参数，由使用者根据自身的情况动态分布的传入实参
* 2. 封装功能组建
*   1.功能明确
*   2.组件内部保留静态的代码
*   3.将动态的数据抽取形成props参数，由使用者根据自身的情况以标签形式动态的传入props
*   4.一个良好的组件应该设置组件的必要性及数据类型
*   props: {
*       msg: {
*           required: true,
*           default: 默认值，
*           type: String
*       }
*   }
*/
// 封装功能函
import config from './config'
export default(url, data={}, method='GET') => {
    return new Promise((resolve, reject) => {
        // new Promise初始化promise实例的状态为peding
        wx.request({
            url: config.host + url,
            data, 
            method,
            header: {
                cookie: wx.getStorageSync('cookies') ? wx.getStorageSync('cookies').find(item => item.indexOf('MUSIC_U') !== -1):''
            },
            success: (res) => {
                if (data.isLogin) { //登陆请求
                    //将用户的cookie存入至本地
                    wx.setStorage({
                        key: 'cookies',
                        data: res.cookies,
                    })
                }
                resolve(res.data); // resolve修改promise的状态为成功状态resolved
            },
            fail: (err) => {
                reject(err); // reject修改promise的状态为失败状态rejected
            } 
        })
    })
}