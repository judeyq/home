(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{575:function(t,n,s){"use strict";s.r(n);var a=s(2),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("俗话说：“工欲善其事，必先利其器”。还记得在函数专题里面讲过的“轮子”的概念吗？在日常开发中，有一些较为通用的函数，这些函数通常被各种项目使用以实现一些通用的功能。")]),t._v(" "),n("p",[t._v("这些功能有的是Go语法并未直接提供的，比如递归列出/删除文件夹中的子文件夹和文件；也有一些是公司的固定业务，比如从公司固定的服务器上获取特定的数据等等。")]),t._v(" "),n("p",[t._v("对于这些函数而言，都放在一个Go源码文件中显然是不太合适的，因为它们涉及不同的功能。特别是如果代码量太大的话，不便于日后的查找和维护。")]),t._v(" "),n("p",[n("strong",[t._v("一种更好的做法便是实现多个“小轮子”，再把这些小轮子分门别类地放在“工具箱”中。如此，我们便可根据分类，快速地找到当前最需要的“轮子”了。这些“小轮子”指的就是函数，“工具箱”指的是组织函数源码的包。")])]),t._v(" "),n("p",[t._v("本讲将手把手地带大家实现实时天气数据的包，在实现这个包的过程中，我会介绍Go语言中自定义包的声明和导入以及相关的注意事项。")]),t._v(" "),n("p",[t._v("为方便大家实操，本讲源码工程位于"),n("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgitee.com%2Fwh1990xiao2005%2Fgo-juejin-weather",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee.com/wh1990xiao2…"),n("OutboundLink")],1),t._v(" ，感兴趣的朋友可自行下载，运用到实际项目中，没有版权限制。")]),t._v(" "),n("h2",{attrs:{id:"封装包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#封装包"}},[t._v("#")]),t._v(" 封装包")]),t._v(" "),n("p",[t._v("Go语言借助文件系统树形结构来组织包。具体来说，")]),t._v(" "),n("ul",[n("li",[t._v("虽然"),n("strong",[t._v("Go语法没有强制要求包名与其所在的目录名相同，但习惯上我们还是会保持这二者相同")]),t._v(" ；")]),t._v(" "),n("li",[t._v("包"),n("strong",[t._v("可以定义在多层级的目录中")]),t._v("；")]),t._v(" "),n("li",[n("strong",[t._v("单个包的所有源码应存在相同的目录下")]),t._v("，不同目录通常包含不同的包源码；")]),t._v(" "),n("li",[t._v("包名一般开头是小写的，"),n("strong",[t._v("采用小驼峰式命名法")]),t._v("；")]),t._v(" "),n("li",[t._v("多个类似业务的公司可能会封装相同名称的包，为了确保唯一性，建议大家"),n("strong",[t._v("使用域名作为目录结构的一部分")]),t._v(" 。")])]),t._v(" "),n("p",[t._v("对应到本例，首先新建一个工程，工程名称为go-juejin-weather，创建好后，依次创建juejin.cn（此为域名）目录，再进入该目录，创建weather（此为包名）目录。既然我们要封装获取实时天气的包，便可将包的源码命名为weather.go，放置在该目录下。如此一通操作后，整个工程的结构如下图所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5cceaec11390407baacc5913fa0b8cf1~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?",alt:"image-20220328092833793.png"}})]),t._v(" "),n("p",[t._v("打开weather.go源码，分别使用Go SDK中的net包和io包中的函数进行网络数据请求和请求结果的解析，完整的代码如下：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v("\n复制代码"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" weather\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io/ioutil"')]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net/http"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CurrentWeather")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cityCode "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用net包发起Get请求")]),t._v("\n   resp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://devapi.qweather.com/v7/weather/now?location="')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cityCode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&key=[您自己申请的AppKey]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP请求失败："')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("panic")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用断言关闭网络请求")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" resp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用ioutil工具包获取服务端响应数据")]),t._v("\n   body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ioutil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"读取网络响应失败："')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("panic")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("上述代码中，一上来便声明了这个源码文件属于weather包，接着导入了fmt、io和net包。最后的部分是名为CurrentWeather()函数，该函数需要一个表示城市代码的string类型值作为参数，并返回了最终的网络响应数据。这个函数是大写字母开头的，只有这样才能被其它的go源码调用。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("💡 提示：有关net包和io包的更多内容将在下一讲中详述。\n❗️ 注意：本示例使用了和风天气提供的天气数据API。通常来说，若要使用某个公共数据平台的服务，都要先申请AppKey。AppKey简称API接口验证序号，相当于一个ID，用于验证API接入合法性的。它代表一个应用程序，便于区分和管理。只有通过申请的合法AppKey才能合法地获取数据，像百度/高德地图等API，若要正常使用都需要申请AppKey，且过程都是类似的。强烈建议大家自行登录和风天气开发者网站，注册开发者账户，体验一次完整的AppKey申请和使用的过程。\n")])])]),n("p",[t._v("到此，一个简单的weather包的封装就结束了。")]),t._v(" "),n("h2",{attrs:{id:"使用包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用包"}},[t._v("#")]),t._v(" 使用包")]),t._v(" "),n("p",[t._v("回到main.go中，尝试调用weather包中的函数——CurrentWeather()。")]),t._v(" "),n("p",[t._v("如果各位使用的是GoLand，在main函数中只需输入Cur三个字母，便可在代码提示中看到CurrentWeather()函数了。选中它并敲回车键，函数的调用会被自动补全，同时，weather包也会自动导入。")]),t._v(" "),n("p",[t._v("由于CurrentWeather()函数最终将返回string类型的数据，因此我们声明一个名为result的变量，并将函数的返回值赋给这个变量。整个main.go的代码如下所示：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v("\n复制代码"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go_juejin_weather/juejin.cn/weather"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" weather"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CurrentWeather")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"101010100"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("运行后，控制台将输出：")]),t._v(" "),n("blockquote",[n("p",[t._v('{"code":"200","updateTime":"2022-03-28T09:02+08:00","fxLink":"'),n("a",{attrs:{href:"https://link.juejin.cn/?target=http%3A%2F%2Fhfx.link%2F2ax1%22%2C%22now%22%3A%7B%22obsTime%22%3A%222022-03-28T08%3A47%2B08%3A00%22%2C%22temp%22%3A%2210%22%2C%22feelsLike%22%3A%226%22%2C%22icon%22%3A%22100%22%2C%22text%22%3A%22%E6%99%B4%22%2C%22wind360%22%3A%22225%22%2C%22windDir%22%3A%22%E8%A5%BF%E5%8D%97%E9%A3%8E%22%2C%22windScale%22%3A%222%22%2C%22windSpeed%22%3A%2211%22%2C%22humidity%22%3A%2231%22%2C%22precip%22%3A%220.0%22%2C%22pressure%22%3A%221018%22%2C%22vis%22%3A%2230%22%2C%22cloud%22%3A%220%22%2C%22dew%22%3A%22-5%22%7D%2C%22refer%22%3A%7B%22sources%22%3A%5B%22QWeather%22%2C%22NMC%22%2C%22ECMWF%22%5D%2C%22license%22%3A%5B%22no",target:"_blank",rel:"noopener noreferrer"}},[t._v('hfx.link/2ax1","now"…'),n("OutboundLink")],1),t._v(' commercial use"]}}')]),t._v(" "),n("p",[t._v("Process finished with the exit code 0")])]),t._v(" "),n("p",[t._v("我是怎么知道请求地址的呢？城市代码又是什么意思呢？上述数据结果又该如何解读呢？")]),t._v(" "),n("p",[t._v("实际上，这些内容都可以在和风天气开发者网站找到。我们使用任何一个公共数据服务平台时，都可以阅读它的开发者文档找到该平台所能提供的一切能力，以及请求返回结果的解读方法。")]),t._v(" "),n("p",[t._v("本例中的实时天气的获取和解读方法就是从："),n("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fdev.qweather.com%2Fdocs%2Fapi%2Fweather%2Fweather-now%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("dev.qweather.com/docs/api/we…"),n("OutboundLink")],1),t._v(" 找到的。")]),t._v(" "),n("p",[t._v("本例中的城市代码使用了“101010100”，这个代码表示中国北京市。这个代码在开发者网站并没有直接提供，但可以通过“城市信息查询API（"),n("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fdev.qweather.com%2Fdocs%2Fapi%2Fgeo%2Fcity-lookup%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("dev.qweather.com/docs/api/ge…"),n("OutboundLink")],1),t._v(" ）”获取答案。")]),t._v(" "),n("h2",{attrs:{id:"思考题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思考题"}},[t._v("#")]),t._v(" 思考题")]),t._v(" "),n("p",[t._v("最后，我们来继续完善这个示例。")]),t._v(" "),n("p",[t._v("既然我们可以通过城市信息查询API获取代码，不妨在weather包中在添加一个go源码，用于获取城市代码。最终的效果就是在main()函数中调用一次函数，然后自动获取城市代码，再通过城市代码获取该城市的天气情况。")]),t._v(" "),n("p",[t._v("欢迎大家到 "),n("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgitee.com%2Fwh1990xiao2005%2Fgo-juejin-weather",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee.com/wh1990xiao2…"),n("OutboundLink")],1),t._v(" 一起讨论解决方案。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("🎉 恭喜，您完成了本次课程的学习！")]),t._v(" "),n("p",[t._v("📌 以下是本次课程的重点内容总结：")]),t._v(" "),n("ul",[n("li",[t._v("自定义包的声明与导入")])]),t._v(" "),n("p",[t._v("本讲是包系列的第二篇，介绍了封装包意义以及如何使用包。")]),t._v(" "),n("p",[t._v("封装可以"),n("strong",[t._v("对外隐藏实现细节")]),t._v("，保证内部"),n("strong",[t._v("数据安全")]),t._v("。")]),t._v(" "),n("p",[t._v("本讲通过"),n("strong",[t._v("对函数和包进行封装")]),t._v("，掌握了如何在Go语言中自定义包以及如何使用自定义包。")]),t._v(" "),n("p",[t._v("好了，本讲就到这里。")]),t._v(" "),n("p",[t._v("➡️ 在下次课程中，我们会介绍Go语言中包的更多知识，具体内容是：")]),t._v(" "),n("ul",[n("li",[t._v("Go SDK中的常用包一览")])])])}),[],!1,null,null,null);n.default=e.exports}}]);