(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{619:function(e,v,t){"use strict";t.r(v);var _=t(2),a=Object(_.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),v("p",[e._v("我还是那句话，工具永远是服务于需求的。纵观整个前端生态的项目构建工具，有服务于 "),v("code",[e._v("React")]),e._v(" 生态的 "),v("code",[e._v("create-react-app")]),e._v("、"),v("code",[e._v("umi")]),e._v("、"),v("code",[e._v("Next.js")]),e._v(" 等。服务于 "),v("code",[e._v("Vue")]),e._v(" 生态的 "),v("code",[e._v("Vue CLI")]),e._v("、"),v("code",[e._v("Vite")]),e._v("、"),v("code",[e._v("Nuxt.js")]),e._v(" 等。它们都是耳熟能详的团队和大佬，为了解决各自需求而研发出来的前端构建工具。而我们要做的其实就是根据项目的需求，进行合理的选择和学习。说白了，在你没有决定权的时候，公司用什么，你就学什么。在你有话语权，能自己抉择的时候，哪个让你开发起来比较舒服，就用哪个。")]),e._v(" "),v("p",[e._v("这些构建工具中，有一个比较特殊，那就是 "),v("code",[e._v("Vite")]),e._v("，它是尤雨溪在发布 "),v("code",[e._v("Vue 3.0")]),e._v(" 时，同步推出的一款前端构建工具。它不光服务于 "),v("code",[e._v("Vue")]),e._v("，同时也对其他的框架如 "),v("code",[e._v("React")]),e._v("、"),v("code",[e._v("Svelte")]),e._v("、"),v("code",[e._v("Preact")]),e._v(" 都有一定的支持，我们本着学新不学旧的理念，在项目中引进了 "),v("code",[e._v("Vite")]),e._v(" 作为构建工具。")]),e._v(" "),v("p",[e._v("在开始使用 "),v("code",[e._v("Vite")]),e._v(" 之前，我们来认识一下它。")]),e._v(" "),v("h4",{attrs:{id:"知识点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[e._v("#")]),e._v(" 知识点")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("Vite")]),e._v(" 是什么。")]),e._v(" "),v("li",[v("code",[e._v("Vite")]),e._v(" 与 "),v("code",[e._v("Webpack")]),e._v(" 相比优势在哪里。")]),e._v(" "),v("li",[v("code",[e._v("Vite")]),e._v(" 的构建原理。")])]),e._v(" "),v("h2",{attrs:{id:"vite-是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vite-是什么"}},[e._v("#")]),e._v(" Vite 是什么")]),e._v(" "),v("p",[e._v("我们引用官方的一句话来介绍它，“下一代前端开发与构建工具”。")]),e._v(" "),v("p",[e._v("它有以下几个特点：")]),e._v(" "),v("p",[e._v("1、 快速启动，"),v("code",[e._v("Vite")]),e._v(" 会在本地启动一个开发服务器，来管理开发环境的资源请求。")]),e._v(" "),v("p",[e._v("2、相比 "),v("code",[e._v("Webpack")]),e._v(" 的开发环境打包构建，它在开发环境下是无需打包的，热更新相比 "),v("code",[e._v("Webpack")]),e._v(" 会快很多。")]),e._v(" "),v("p",[e._v("3、原生 "),v("code",[e._v("ES Module")]),e._v("，要什么就当场给你什么。而 "),v("code",[e._v("Webpack")]),e._v(" 则是先将资源构建好之后，再根据你的需要，分配给你想要的资源。")]),e._v(" "),v("p",[e._v("尤雨溪在发布 "),v("code",[e._v("Vite")]),e._v(" 前，发过这么一条微博。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b6344806ae94c96b9060fb0a3b13381~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[e._v("从话语间可以看出，尤雨溪团队对该打包工具也是报以厚望，所以这里大家可以不必担心后续它们会放弃维护这个项目，当然也不能打包票。")]),e._v(" "),v("h2",{attrs:{id:"vite-与-webpack-相比优势在哪里"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vite-与-webpack-相比优势在哪里"}},[e._v("#")]),e._v(" Vite 与 Webpack 相比优势在哪里")]),e._v(" "),v("p",[e._v("接下来我们来聊聊，为什么说它是下一代前端开发与构建工具。是不是当代构建工具出了什么问题？")]),e._v(" "),v("p",[e._v("我们知道当代的前端构建工具有很多，比较受欢迎的有 "),v("code",[e._v("Webpack")]),e._v("、"),v("code",[e._v("Rollup")]),e._v("、"),v("code",[e._v("Parcel")]),e._v("等，绝大多数脚手架工具都是使用 "),v("code",[e._v("Webpack")]),e._v(" 作为构建工具，如 "),v("code",[e._v("Vue-CLI")]),e._v("。")]),e._v(" "),v("p",[e._v("在利用 "),v("code",[e._v("Webpack")]),e._v(" 作为构建工具时，开发过程中，每次修改代码，都会导致重新编译，随着项目代码量的增多，热更新的速度也随之变慢，甚至要几秒钟才能看到视图的更新。")]),e._v(" "),v("p",[e._v("生产环境下，它将各个模块之间通过编码的方式联系在一起，最终生成一个庞大的 "),v("code",[e._v("bundle")]),e._v(" 文件。")]),e._v(" "),v("p",[e._v("导致这些问题出现的原因，有以下几点：")]),e._v(" "),v("p",[e._v("1、"),v("code",[e._v("HTTP 1.1")]),e._v(" 时代，各个浏览器资源请求并发是有上限的（如谷歌浏览器为 6 个，这导致你必须要减少资源请求数）。")]),e._v(" "),v("p",[e._v("2、浏览器并不支持 "),v("code",[e._v("CommonJS")]),e._v(" 模块化系统（它不能直接运行在浏览器环境下，它是 "),v("code",[e._v("Node")]),e._v(" 提出的模块化规范，所以需要经过 "),v("code",[e._v("Webpack")]),e._v(" 的打包，编译成浏览器可识别的 JS 脚本）")]),e._v(" "),v("p",[e._v("3、模块与模块之间的依赖顺序和管理问题（文件依赖层级越多，静态资源也就变得越多，如果一个资源有 100 个依赖关系，可能需要加载 100 个网络请求，这对生产环境可能是灾难，所以在生产环境最终会打包成一个 "),v("code",[e._v("bundle")]),e._v(" 脚本，会提前进行资源按需加载的配置。）")]),e._v(" "),v("h4",{attrs:{id:"那么为什么现在又出现了不打包的构建趋势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#那么为什么现在又出现了不打包的构建趋势"}},[e._v("#")]),e._v(" 那么为什么现在又出现了不打包的构建趋势？")]),e._v(" "),v("p",[e._v("1、工程越来越庞大，热更新变得缓慢，十分影响开发体验。推动着我们不断地去创新，不断地尝试着去突破瓶颈。")]),e._v(" "),v("p",[e._v("2、各大浏览器已经开始慢慢的支持原生 "),v("code",[e._v("ES Module")]),e._v(" (谷歌、火狐、"),v("code",[e._v("Safari")]),e._v("、"),v("code",[e._v("Edge")]),e._v(" 的最新版本，都已支持。这让我们看到了希望)。")]),e._v(" "),v("p",[e._v("3、"),v("code",[e._v("HTTP 2.0")]),e._v(" 采用的多路复用。不用太担心请求并发量的问题。")]),e._v(" "),v("p",[e._v("4、越来越多的 "),v("code",[e._v("npm")]),e._v(" 包开始采用了原生 "),v("code",[e._v("ESM")]),e._v(" 的开发形式。虽然还有很多包不支持，但是我相信这将会是趋势。")]),e._v(" "),v("p",[e._v("我们通过表格的形式，对比一下 "),v("code",[e._v("bundle")]),e._v(" 和 "),v("code",[e._v("bundleless")]),e._v(" 的区别。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff916f65816b469989198bdc2ec18fd1~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("h2",{attrs:{id:"vite-构建原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vite-构建原理"}},[e._v("#")]),e._v(" Vite 构建原理")]),e._v(" "),v("p",[e._v("众所周知，"),v("code",[e._v("Vite")]),e._v(" 的生产模式和开发模式是不同的概念。我们先聊聊，"),v("code",[e._v("Vite")]),e._v(" 的开发模式。")]),e._v(" "),v("p",[e._v("首先要明确一点，"),v("code",[e._v("Vite")]),e._v(" 在开发模式下，有一个 依赖预构建 的概念。")]),e._v(" "),v("h4",{attrs:{id:"什么是依赖预构建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是依赖预构建"}},[e._v("#")]),e._v(" 什么是依赖预构建")]),e._v(" "),v("p",[e._v("在 "),v("code",[e._v("Vite")]),e._v(" 启动开发服务器之后，它将第三方依赖的多个静态资源整合为一个，比如 "),v("code",[e._v("lodash")]),e._v("、"),v("code",[e._v("qs")]),e._v("、"),v("code",[e._v("axios")]),e._v(" 等这类资源包，存入 ·node_modules/.vite 文件下。")]),e._v(" "),v("h4",{attrs:{id:"为什么需要依赖预构建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要依赖预构建"}},[e._v("#")]),e._v(" 为什么需要依赖预构建")]),e._v(" "),v("p",[e._v("如果直接采用 "),v("code",[e._v("ES Module")]),e._v(" 的形式开发代码，会产生一大串依赖，就好像俄罗斯套娃一样，一层一层的嵌套，在浏览器资源有限的情况下，同时请求大量的静态资源，会造成浏览器的卡顿，并且资源响应的时间也会变慢。")]),e._v(" "),v("p",[e._v("我们先不通过 "),v("code",[e._v("Vite")]),e._v("，而是手动搭建原生 "),v("code",[e._v("ES Module")]),e._v(" 开发形式，通过引入 "),v("code",[e._v("lodash-es")]),e._v(" 包，实现一个数组去重的小例子，来详细分析为什么需要依赖预构建。")]),e._v(" "),v("p",[e._v("新建 "),v("code",[e._v("test1")]),e._v(" 文件夹，通过 "),v("code",[e._v("npm init -y")]),e._v(" 初始化了一个前端工程：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eabc5b637e734347b8e7965496669fee~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[e._v("手动新建 "),v("code",[e._v("index.html")]),e._v("，通过 "),v("code",[e._v("script")]),e._v(" 标签，引入 "),v("code",[e._v("main.js")]),e._v("。这里注意，需要将 "),v("code",[e._v("type")]),e._v(" 属性设置为 "),v("code",[e._v("module")]),e._v("，这样才能支持 "),v("code",[e._v("ES Module")]),e._v(" 模块化开发。")]),e._v(" "),v("p",[e._v("通过 "),v("code",[e._v("npm")]),e._v(" 安装 "),v("code",[e._v("lodash-es")]),e._v("，这里我们之所以不使用 "),v("code",[e._v("lodash")]),e._v("，是因为 "),v("code",[e._v("lodash")]),e._v(" 不是通过 "),v("code",[e._v("ES Module")]),e._v(" 形式开发的，直接通过相对路径引入会报错，需要通过 "),v("code",[e._v("Webpack")]),e._v(" 打包构建。")]),e._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i lodash-es\n")])])]),v("p",[e._v("新建 "),v("code",[e._v("main.js")]),e._v(" 添加去重逻辑：")]),e._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" uniq "),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./node_modules/lodash-es/uniq.js'")]),e._v("\n\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" arr "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\nconsole"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("uniq")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("arr"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),v("p",[e._v("这里我们采用 "),v("code",[e._v("VSCode")]),e._v(" 的插件，"),v("code",[e._v("Live Server")]),e._v("，来启动项目。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30054fefbeaf485a96db8d4a4d8f5aad~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[e._v("安装完之后，在项目中双击 "),v("code",[e._v("index.html")]),e._v("，找到右下角的 「Go Live」，如下所示：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64858bc1bd3e4206a4b996c8ba4f5d74~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[e._v("点击后，自动启动一个 "),v("code",[e._v("Web")]),e._v(" 服务，浏览器自动打开，如下所示：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3858ec887f744781b6c45fadad638c2c~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[e._v("结果正确，数组中的 3 被去除了，接下来关键的一个点，我们点击 "),v("code",[e._v("Network")]),e._v(" 查看，资源引入情况：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b9e60c097184e20a78cb8198968b199~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[e._v("我们只是获取去重方法，却意外引入了 59 资源，这是为什么呢？")]),e._v(" "),v("p",[e._v("我们先查看 "),v("code",[e._v("main.js")]),e._v(" 内的代码，如下所示：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f001d806817f4ed5a9ad521c9a91a6d5~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[e._v("代码中只有在首行通过 "),v("code",[e._v("import")]),e._v(" 引入了 "),v("code",[e._v("./node_modules/lodash-es/uniq.js")]),e._v("，所以 "),v("code",[e._v("uniq.js")]),e._v(" 被作为资源引入进来，我们再看 "),v("code",[e._v("uniq.js")]),e._v(" 的情况：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b21e238127c47ec8f69b16775b4bb08~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[v("code",[e._v("uniq.js")]),e._v(" 中，首行通过 "),v("code",[e._v("import")]),e._v(" 引入了 "),v("code",[e._v("_baseUniq.js")]),e._v("，我们继续：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6392953fd6b043ea99355687a5569763~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[v("code",[e._v("_baseUniq.js")]),e._v(" 中，引入了上图箭头中的一些脚本，不用往下看，我盲猜这种俄罗斯套娃的模式，会一直引用到 "),v("code",[e._v("uniq.js")]),e._v(" 相关的所有脚本代码。")]),e._v(" "),v("p",[e._v("这只是一个 "),v("code",[e._v("uniq")]),e._v(" 方法，足足就引入了 59 个资源，这仿佛是在军训浏览器，也就是谷歌能跟它博弈几个回合，引入的包再多几个，我估计也是顶不住的。")]),e._v(" "),v("p",[e._v("所以这时候 "),v("code",[e._v("Vite")]),e._v(" 便引入了「依赖预构建」的概念。")]),e._v(" "),v("h4",{attrs:{id:"依赖现预构建浅析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#依赖现预构建浅析"}},[e._v("#")]),e._v(" 依赖现预构建浅析")]),e._v(" "),v("p",[e._v("同样的，再通过 "),v("code",[e._v("Vite")]),e._v(" 构建出一个 "),v("code",[e._v("React")]),e._v(" 项目，去实现上述逻辑，我们观察 "),v("code",[e._v("Vite")]),e._v(" 是怎么作的。")]),e._v(" "),v("p",[e._v("首先通过 "),v("code",[e._v("Vite")]),e._v(" 指令生成项目：")]),e._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" init @vitejs/app test2 "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--template")]),e._v(" react\n")])])]),v("p",[e._v("并安装 "),v("code",[e._v("lodash-es")]),e._v("，修改入口脚本 "),v("code",[e._v("main.jsx")]),e._v("：")]),e._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" uniq "),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[e._v("'lodash-es/uniq.js'")]),e._v("\n\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" arr "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\nconsole"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("uniq")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("arr"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),v("p",[e._v("我们观察浏览器的 "),v("code",[e._v("Network")]),e._v("，如下所示：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dce2afc266e84fa79ee8c9a0c0266c85~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[e._v("注意上图，执行 "),v("code",[e._v("npm run dev")]),e._v(" 后，脚本中引用 "),v("code",[e._v("lodash-es/uniq")]),e._v(" 的路径是在 "),v("code",[e._v("/node_modules/.vite")]),e._v(" 文件夹下，并且左下角的请求资源数，也没有我们之前原生 "),v("code",[e._v("ES Module")]),e._v(" 时的多，少了足足 3/4 还多。")]),e._v(" "),v("p",[e._v("再观察文件目录：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/715c51aaea93420dac55e3ccca003222~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"img"}})]),e._v(" "),v("p",[v("code",[e._v("lodash-es/uniq")]),e._v(" 已经被 "),v("code",[e._v("Vite")]),e._v(" 提前预编译到了 "),v("code",[e._v(".vite")]),e._v(" 文件夹下，这样代码中直接去这个文件夹拿现成的包，就不必再递归地去加载很多静态资源脚本。")]),e._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),v("p",[e._v("本章节，通过实例分析，对 "),v("code",[e._v("Vite")]),e._v(" 有了初步的了解。那么下一章节，我将带大家通过 "),v("code",[e._v("Vite")]),e._v(" 去搭建一个 "),v("code",[e._v("React")]),e._v(" 的完整开发环境。")])])}),[],!1,null,null,null);v.default=a.exports}}]);