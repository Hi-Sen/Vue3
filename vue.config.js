module.exports = {
  lintOnSave: false,
  productionSourceMap: false
}

// module.exports = { 
//   publicPath: "", // 子目录配置，如：http://www.baidu.com/a/  则 publicPath: '/a/'
//   outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
//   assetsDir: 'public', // 放置生成的静态资源(js、css、img、fonts) - (相对于 outputDir 的)目录(默认'')
//   indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
//   lintOnSave: true, // 是否在保存的时候检查 // 禁用 eslint  process.env.NODE_ENV !== 'production'
//   productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
//   transpileDependencies: [], // 通过 Babel 显式转译依赖，es6转es5 , 需要转移的依赖名
//   // css: {
//   //   extract: true, // 是否使用css分离插件 ExtractTextPlugin
//   //   sourceMap: false, // 开启 CSS source maps
//   //   loaderOptions: {}, // css预设器配置项
//   //   modules: false // 启用 CSS modules for all css / pre-processor files.
//   // },
//   //反向代理
//   // devServer: {
//   //   port: 8080, // 端口
//   //   progress: true,  // 显示打包的进度条
//   //   contentBase: "",  // 根目录
//   //   open: true,  // 自动打开浏览器
//   //   compress: true,  // 启动 gzip 压缩
//   //   // 设置代理
//   //   proxy: {
//   //     // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
//   //     '/api': 'http://localhost:3000',

//   //     // 将本地 /api2/xxx 代理到 localhost:3000/xxx
//   //     '/api2': {
//   //       target: 'http://localhost:8000',
//   //       pathRewrite: {
//   //         '/api2': ''
//   //       }
//   //     }
//   //   }
//   // },
//   // pluginOptions: {
//   //   // 第三方插件配置
//   //   // ...
//   // }
// }
