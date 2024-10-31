(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{635:function(r,e,t){"use strict";t.r(e);var o=t(2),v=Object(o.a)({},(function(){var r=this,e=r._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h2",{attrs:{id:"router-link和router-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-link和router-view"}},[r._v("#")]),r._v(" router-link和router-view")]),r._v(" "),e("p",[r._v("router-link:导航作用(声明式导航)。")]),r._v(" "),e("p",[r._v("router-view:内容渲染作用")]),r._v(" "),e("blockquote",[e("p",[r._v("router-link默认生成一个a标签，设置to属性定义跳转的path。实际上也可以通过custom和插槽自定义最终的展现形式。router-view是要显示组件的占位组件，可以嵌套，对应路由配置的嵌套关系，配合name可以显示具名组件，起到更强的布局作用。")]),r._v(" "),e("p",[r._v("router-link组件内部根据custom属性判断如何渲染最终生成节点，内部提供导航方法navigate，用户点击之后实际调用的是该方法，此方法最终会修改响应式的路由变量，然后重新去routes匹配出数组结果，router-view则根据其所处深度deep在匹配数组结果中找到对应的路由并获取组件，最终将其渲染出来。")])]),r._v(" "),e("p",[r._v("Vue实现跳转的方式：声明式导航router-link）\\ 编程式导航 router.push({path:''})")]),r._v(" "),e("p",[r._v("路由嵌套：")]),r._v(" "),e("blockquote",[e("p",[r._v("平时开发中，应用的有些界面是由多层级组件组合而来的，这种情况下，url各部分通常对应某个嵌套的组件，vue-router中可以使用嵌套路由表示这种关系")])]),r._v(" "),e("blockquote",[e("p",[r._v("表现形式是在两个路由间切换时，它们有公用的视图内容。此时通常提取一个父组件，内部放上，从而形成物理上的嵌套，和逻辑上的嵌套对应起来")])]),r._v(" "),e("blockquote",[e("p",[r._v("定义嵌套路由时使用"),e("code",[r._v("children")]),r._v("属性组织嵌套关系")])]),r._v(" "),e("blockquote",[e("p",[r._v("原理上是在router-view组件内部判断当前router-view处于嵌套层级的深度，讲这个深度作为匹配组件数组matched的索引，获取对应渲染组件，渲染之")])]),r._v(" "),e("p",[e("strong",[r._v("router-view获取自己所在的深度：默认0，加1之后传给后代，同时根据深度获取匹配路由。")])]),r._v(" "),e("p",[r._v("vue-router中保护路由的方法叫做路由守卫，主要用来通过跳转或取消的方式守卫导航。")]),r._v(" "),e("p",[r._v("路由守卫有三个级别："),e("strong",[r._v("全局")]),r._v("，"),e("strong",[r._v("路由独享")]),r._v("，"),e("strong",[r._v("组件级")]),r._v("。影响范围由大到小，例如全局的"),e("strong",[r._v("router.beforeEach()")]),r._v("，可以注册一个全局前置守卫，每次路由导航都会经过这个守卫，因此在其内部可以加入控制逻辑决定用户是否可以导航到目标路由；在路由注册的时候可以加入单路由独享的守卫，例如"),e("strong",[r._v("beforeEnter")]),r._v("，守卫只在进入路由时触发，因此只会影响这个路由，控制更精确；我们还可以为路由组件添加守卫配置，例如"),e("strong",[r._v("beforeRouteEnter")]),r._v("，会在渲染该组件的对应路由被验证前调用，控制的范围更精确了。")]),r._v(" "),e("p",[r._v("用户的任何导航行为都会走navigate方法，内部有个guards队列按顺序执行用户注册的守卫钩子函数，如果没有通过验证逻辑则会取消原有的导航。")])])}),[],!1,null,null,null);e.default=v.exports}}]);