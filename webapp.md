### 用AngularJS 开发移动APP(2) --Native APP/Web APP/Hybrid APP.
学习笔记 摘录自 @大漠穷秋
*** ***

> APP 开发方式

* __Native APP__ 原生
	* 优势
		* 运行效率高
		* 可调节各种设备
	* 劣势
		* 人力成本高
		* 发布速度慢AppStore确认时间长
		* 更新版本问题
		* 实现图文混排等功能有各种坑
		* 混乱不堪的Android平台 -- 版本混乱/分辨率/众多厂商
* __Web APP__	网页
	* HTML- CSS - JS语言写 打包工具成 .apk .ipa
	* 常见打包工具
		* [Phonegap](http://phonegap.com/)  可以通过NMP进行安装
		* [Appcan](http://www.appcan.cn/index) 国内工具
		* [appcelerator](http://www.appcelerator.com/)
		* 设计打包开发一体化工具 InterXDK --云打包 node-webkit
    * 打包流程
    	* Android --npm安装Phonegap ,下载ADT ,Phonegap调用ADT打包
		* IOS --nmp 安装Phonegap,升级IOS和XCode,IOS账户和一大堆配置，Phonegap调用Xcode打包，Lisence,审核等等 很矫情
	* Web框架--移动
		* jQuery mobile 技术栈统一学习成本低 运行效率低
		* Sencha Touch 各项技术架构都非常完善ext-core内核，架构复杂
		* zepto.js 衍生自JQuery 性能更好 体积小，只有10K只要内核没有UI
		* GMU 来自百度
		* [__ionic__](http://ionicframework.com) 内核是AngularJS
	* 致命缺陷：运行效率太差！
* __Hybrid APP__ 混合
	* 复合型的应用思想
		* 桌面平台上的Hybrid App --酷我音乐盒,QQ,游戏软件--嵌入了浏览器的内核
		* 移动版嵌入了浏览器
	* Why not HTML5. 长文章	http://div.io/topic/560 
		* 与Native交互29% 
		* APIs 37%
		* 性能 46%
	* Hybrid App
		* Android外壳 -- WebView -- Mobile UI控件库
		* IOS外壳 -- UIWebView -- Mobile UI控件库
		* View切换通讯服务 -- WebKit内核HTML/CSS3 -- 通用控件
		* [移动优先的跨终端Web](http://www.imooc.com/view/43) @鬼道-徐凯
		* 浏览器内核 Webkit内核 | WebView内核
	* 优缺点
		* 综合了开发效率和运行效率
		* 发版本方便
		* 运行效率中等
		* 需要写一点原生代码(至少两个平台)


####　总结

1. 尽量开发原生，局部嵌入WebView 
2. 赶时间进行Demo演示，请用WebApp开发方式
3. Hybrid App最本质的改进在于，使用了多个WebView 实例一个Activity里面嵌入一个
4. Web App 本质上只使用了一个WebView实例
5. Web App 开发并不意味着一点原生代码都不写(至少打包的时候还是需要原生环境的)
6. 最后：__Hybrid__才是王道

> 知道一个东西的优点，你只是入门了，理解一个东西的缺点，说明你精通了！！