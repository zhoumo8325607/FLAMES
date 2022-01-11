/**
 * @author: wang.weili
 * @since : 2020/11/25
 */
process.env.VUE_APP_DEV = "http://10.12.5.188:20003/"
process.env.VUE_APP_PRO = "http://10.12.5.188:20008/"
process.env.VUE_APP_LOCAL = "http://127.0.0.1:10020/"

process.env.VUE_APP_PREFIXTYPE = "Flames.Web"

module.exports = {
    publicPath: "flames-web",
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/user/*': {
                target: process.env.VUE_APP_DEV,
                ws: true,
                changeOrigin: true
            },
            '/zatanna/*': {
                target: process.env.VUE_APP_DEV,
                changeOrigin: true
            },
            // '/zatanna/*': {
            //     target: process.env.VUE_APP_LOCAL,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         "^/zatanna": '/'
            //     }
            // }
        }
    }
}