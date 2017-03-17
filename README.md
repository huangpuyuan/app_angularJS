# app_angularJS
using angular JS to design a app~~~~~~~~~

### 单页应用

* 定义: 页面跳转不刷新
* 方法: 利用路由控制“页面”跳转 --监控页面的Url的哈希值进行跳转。
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
	* 安装gulp插件 
		* `npm i -g gulp gulp-clean gulp-concat gulp-connect gulp-cssmin gulp-imagemin gulp-less gulp-load-plugins gulp-uglify open`

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
		* 查看作用域 **$scope**
		* 输出调试信息
		* 性能监控



### Angular基本概念
> Angular Js的常用概念 :  
__module__ __directive__ 表达式 __service__ injector 依赖注入 模型 __filter__ 依赖注入 模型 filter 数据绑定 $scope __controller__ view
	
>* 核心概念：
	* _module_ : “魔法书” ;
	* _directive_: “召唤魔法” ;
	* _controller_: “辅助魔法” ;
	* _service_：“攻击魔法” ;


### Angular Web App 结构图

* 根模块：_root module_
* 组件：_components_
	* 服务：_service_
	* 指令：_directive_
	* 过滤器：_filter_
	* 控制器：_controller_
* 路由模块：_router module_ ————~~监听浏览器的哈希值变化加载不同的html代码，称之为视图。
* 视图：_view_（ **MVVM机制** ） 和控制器_controller_ 形成双向数据绑定 视图和控制器的数据相互影响机制。
	* 核心是 __$scope__ 对象可以在两边同时进行操作


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
		* __`app.js`__ 启动文件
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


#### Web App 的模块划分   --招聘Web App 按照模块的顺序进行开发

* 职位
* 搜索
* 用户 

### AngularJS 路由模块总结扩展 ui.router

* ui.router: http://runjs.cn/code/74vszpdz
* 路由参数 ：http://runjs.cn/code/zey9cp7w
* 重要指令和服务： `ui-sref` 、`$state`
	* `'/home'`:只匹配 `'/home'`
	* `/user/:id'`、`'/user/{id}'`:匹配`'/user/1234'`或者`/user/`
	* `/messages?befoer&after`: 非rest传参
	* 跳转方式 如：`<a ui-sref="main({id:1234})"></a>`。或者用js方式实

```javascript
//跳转
$state.go('main',{id:contact.id},{location:'replace'});
$state.params.id <===> $stateParams.id
//参数
```

###数据绑定
* JS代码 `$scope` 
* HTML标签 `{{xxxx}}`

### 指令directive

>定义：通过HTML__标签__、__属性__、__样式__、__注释__使Angular编译器来指定的DOM元素绑定特性的行为，甚至是改变DOM元素和它的子元素

* 内置指令 controller 下定义$scope
	* `ng-model` 变量和元素的value值进行绑定
	* `ng-bind`  变量和元素的innerTest的下的数据
	* `ng-click` 事件的指令`ng-mouse`等等
	* `ng-class` 字符串的className 用于动态改变元素的效果 
	* `ng-if` 条件为真值的是否创建
 	* `ng-hide` `ng-show`隐藏显示
	* `ng-repeat` 循环生成元素 如：item in data。 $first? $last?
	* ...
* 自定义指令常用属性 dirctive下定义
	* `restrict` 有四种方式
		* 元素的方式 `E`
		* 属性的方式 `A` 默认的方式 比较常用-- 后面两种不常用
		* 注释的方式 `M`
		* 样式的方式 `C`
	* `replace` 为__true__的时候替代父元素	
	* `scope`  神奇的scope属性 默认为false  直接用的$scope上的属性值。缺点是不能复用。所以给一个true值。用的最多的是json对象的形式例如 ` scope:{ aa:'@', bb:'=' , cc:'&' }` '@' --直接接收字符串或者转义, 本质是给指令暴露一组接口 '='传入一个变量，'&'传入一个回调函数--注意的一点是传参数。
	* `template` 模板
	* `templateUrl` 指向一个地址静态的。
	* `link` 提供事件的交互 `function(scope,element,attr){ scope. }`
	* `transclude` __true__的时候内嵌HTML模板