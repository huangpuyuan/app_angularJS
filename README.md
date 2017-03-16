# app_angularJS
using angular JS to design a app~~~~~~~~~
#### 单页应用

* 定义:页面跳转不刷新
* 方法:利用路由控制“页面”跳转 --监控页面的Url的哈希值进行跳转。
* 优点：页面切换流畅、完全的前后端的分离



### 搭建开发环境

* 开发工具 **AngluarJs**

* 构建工具 **Gulp**
	* 优点：基于流、任务化
	* 常用API:
		* `src` 读取文件和文件夹
		* `dest` 生成文件和写文件	
		* `watch` 监控文件
		* `task` 定制任务
		* `pipe` 流的方式处理文件
	* [gulp中文网](http://www.gulpjs.com.cn/) 使用技巧查看
	* 安装gulp插件 gulp-clean gulp-concat gulp-connect gulp-cssmin gulp-imagemin gulp-less gulp-load-plugins gulp-uglify open

* 包(第三方依赖)管理工具 **Bower**
	* 基于**node.js**进行安装
	* 常用的bower命令
		* `bower init` 初始化创建项目生成josn配置文件
		* `bower install` 安装
		* `bower uninstall` 卸载
	* 配置文件
		* `.bowerrc`
		* `bower.json`
	* 安装配置
* 预编译工具 **less**
	* 常用语法
		* 定义变量
		* 后代选择器
		* 文件引用
		* 函数

* Chrome调试插件 **batarang** 主要功能有：
	* batarang 主要功能有：
		* 查看作用域**$scope**
		* 输出调试信息
		* 性能监控


#### Angular基本概念
> Angular Js的常用概念 :  
__module__ __directive__ 表达式 __service__ injector 依赖注入 模型 __filter__ 依赖注入 模型 filter 数据绑定 $scope __controller__ view
	
>* 核心概念：
	* _module_ : “魔法书” ;
	* _directive_: “召唤魔法” ;
	* _controller_: “辅助魔法” ;
	* _service_：“攻击魔法” ;


#### Angular Web App 结构图

* 根模块：_root module_
* 组件：_components_
	* 服务：_service_
	* 指令：_directive_
	* 过滤器：_filter_
	* 控制器：_controller_
* 路由模块：_router module_ ————~~监听浏览器的哈希值变化加载不同的html代码，称之为视图。
* 视图：_view_（ **MVVM机制** ） 和控制器_controller_ 形成双向数据绑定 视图和控制器的数据相互影响机制。
	* 核心是__$scope对象__可以在两边同时进行操作


### 规划目录结构说明

* .git 版本控制
* bower_components bower 依赖
* build 用于调试开发
* dist 代码的压缩,体积最小化.用于生产下的发布
* node_modules 包
* src 文件路径主文件夹
	* data 数据文件夹
		* json文件假数据模拟http后端读取,真正上线后不需要假数据,有后端服务器支持
	* image 图片的存放目录
	* script ————js的存放目录构建后会被整个压缩成一个文件
		* `config`
		* `controller`
		* __`directive`__
		* `filter`
		* `service`
		* __`app.js`__启动文件
	* style 样式文件夹
		* less文件
	* view文件夹
		* template文件夹 模板
		* 所有的html文件的片段
	* 404.html
	* index.html
* `text`文件 单元测试、集成测试
* `.eslintrc`文件 校验JS语法风格是否符合
* `.gitignore`文件 git的忽略文件
* `bower.json`文件 json的配置文件
* `gulpfile.js`文件 构建工具gulp配置文件
* `package.json`文件 node配置文件
* `README.md文件` 项目说明文档



