前情介绍

	每次开始做一个新的项目 总是需要总结各方资源,才能搭建起一个可用的项目，因为每次webpack版本、react-router版本等等等。。。的变化 导致在配置文件的时候总是影响心情 故作此初始项目 希望帮到能看到的你(或许 永远都是我在看 哈哈哈~~~)

1. 目录结构
/assets/ 存放一些静态资源，比如backgroundImage。

/build/ main.js 是打包的业务代码 vendor.js是打包的框架代码 剩下的chunkOne.js chunkTwo.js是为了按需加载单独打出去的模块

/src/ 源代码存储目录(其中包含的react-router是4.x版本的)

.babelrc是babel转es6代码的配置文件

webpack.config.js 中配置了代码分割、抽离css代码、分割业务代码和框架代码、生成index.html入口文件....同时文件里的配置是基于webpack3.x的(webpack不同版本之间总是存在各种恶心的差异)
 
2. 运行步骤
 2.1 在根目录下打开命令行
 2.2 在命令行里敲“webpack”命令，等待编译打包完成
 2.3 在命令行里敲“node server.js”命令，开启一个本地服务可供您使用


