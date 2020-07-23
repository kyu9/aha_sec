module.exports = {
    devServer: {
        proxy: {
            '/' : {
                target: 'http://ec2-52-79-228-191.ap-northeast-2.compute.amazonaws.com:4000/',
                changeOrigin: true
            }
        }
    },
    publicPath: "./",
    outputDir: "../src/public"
}