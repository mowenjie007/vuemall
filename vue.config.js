module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      // 配置资源路径别名
      alias: {
        'assets': '@/assets', 
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }  
    }  
  }  
}