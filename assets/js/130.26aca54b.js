(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{564:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在之前的三次课程中，我们分别介绍了Go语言中普通函数的定义和调用、匿名函数的定义和调用、递归算法以及回调式编程。在本次课中，我们将介绍有关函数的最后一个典型的用法，它就是："),s("strong",[t._v("使用闭包实现工厂模式")]),t._v("。")]),t._v(" "),s("p",[t._v("很明显，本讲内容将为大家讲述两个重要的概念："),s("strong",[t._v("闭包")]),t._v("和"),s("strong",[t._v("工厂模式")]),t._v("。")]),t._v(" "),s("p",[t._v("闭包在某些编程语言（如Java）中还被称为Lambda表达式；工厂模式则是编程领域中设计模式的其中一种。")]),t._v(" "),s("p",[t._v("是不是听上去似乎有点摸不着头脑，感觉很深奥？其实它并不像想象中的那么难，我们还是用实际的示例来介绍什么叫做工厂模式，以及什么是闭包。")]),t._v(" "),s("h2",{attrs:{id:"创建角色-工厂模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建角色-工厂模式"}},[t._v("#")]),t._v(" 创建角色（工厂模式）")]),t._v(" "),s("p",[t._v("看到这个标题，相信各位的第一反应是：网络游戏？没错，我们在玩网络游戏的时候免不了要创建一个游戏角色。但不知大家有没有想过，无论游戏中承载了多少个玩家，每个角色都是由既定的"),s("strong",[t._v("属性")]),t._v("以及不确定的"),s("strong",[t._v("属性值")]),t._v("排列组合而成的。")]),t._v(" "),s("p",[t._v("举例而言，下面是两个简化的游戏角色，他们都有角色名、职业、性别组成。")]),t._v(" "),s("ol",[s("li",[t._v("角色名：狂斩天下；职业：战士；性别：男")]),t._v(" "),s("li",[t._v("角色名：温玉琳琅；职业：法师；性别：女")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("💡 提示：在实际游戏中，还会有更多的属性和属性值，如皮肤、坐骑等等。这里为了讲解方便，简化了其它属性。\n")])])]),s("p",[t._v("如果要用Go语言编程的方式，可以按照如下方式创建这两个角色：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v("\n复制代码"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 游戏角色创建器，传入角色名、职业和性别")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" career "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" career "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"战士"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),t._v("\n      mp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" career "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"法师"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n      mp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 闭包")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" career"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mp\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   playerA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"狂斩天下"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"战士"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"男"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   nameA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" careerA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" genderA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hpA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mpA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("playerA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("genderA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" careerA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nameA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hpA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mpA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n   playerB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"温玉琳琅"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"法师"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"女"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   nameB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" careerB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" genderB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hpB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mpB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("playerB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("genderB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" careerB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nameB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hpB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mpB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("直接运行上述代码，控制台将输出如下结果：")]),t._v(" "),s("blockquote",[s("p",[t._v("男 战士 狂斩天下 150 100")]),t._v(" "),s("p",[t._v("女 法师 温玉琳琅 100 200")])]),t._v(" "),s("p",[t._v("从结果处可以看到，两个角色已经被创建好了，且拥有不同的血量值（hp）和魔法值（mp）。")]),t._v(" "),s("p",[t._v("从createPlayer()函数入手，可以看到：该函数最终的返回值类型为func() (string, string, string, int, int)，这是一个匿名函数，包含了传入的角色名、职业、性别。此外，在createPlayer()函数体内还根据不同的职业给了不同的血量值和魔法值，这两个值也会一并作为返回值返回。")]),t._v(" "),s("p",[t._v("再从main()函数入手，看到函数体中的空行了吗？这是我故意为之的。这个空行将整个main()函数分成了上下两个相似的部分，每个部分都有三行代码。以上半部分为例：")]),t._v(" "),s("ul",[s("li",[t._v("第一行声明了变量playerA，它将表示一个游戏角色。并调用了createPlayer()函数，向其中传入了角色名、职业和性别（像不像在游戏一开始的时候创建角色的过程？）。最后，将函数赋值给了playerA；")]),t._v(" "),s("li",[t._v("第二行声明了多个变量，并通过playerA调用了createPlayer()函数，并将函数运行后的结果一一对应地赋值给了多个变量；")]),t._v(" "),s("li",[t._v("第三行则是向控制台输出了上一行声明并赋值的变量。")])]),t._v(" "),s("p",[t._v("main()函数的下半部分无需多做解释，和上半部分执行了类似的逻辑，只不过是传入的参数不同，得到的结果便会随时变化。")]),t._v(" "),s("p",[t._v("以此类推，无论创建多少个角色，只需要如法炮制即可。")]),t._v(" "),s("p",[t._v("简单地说，像这种"),s("strong",[t._v("通过输入不同参数自动地生成不同数据对象的设计模式就可以被称为工厂模式")]),t._v("了。它就像一座工厂那样，"),s("strong",[t._v("将不同的输入经过一系列标准化的流程，最终产出独具特色的数据对象")]),t._v("。")]),t._v(" "),s("p",[t._v("使用工厂模式是很有优势的，比如当我想创建一个数据对象的时候，我只要知道它的名字就行了，比如本例中的createPlayer()。而创建对象的细节被封装在createPlayer()函数之中，因此在创建对象的时候便无需关注具体的过程细节了。")]),t._v(" "),s("p",[t._v("但工厂模式带来的弊端也很明显，在使用时，每次创建一个数据对象都要声明一个新的变量，并将createPlayer()赋值给这个变量。因此，createPlayer()函数也会随之增加，对性能多多少少是会有一定影响的。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("💡 提示：严格意义上说，设计模式中的工厂模式又可分为简单工厂模式、工厂方法模式和抽象工厂模式。篇幅所限，此处不再展开讲解。\n")])])]),s("h2",{attrs:{id:"角色的动作-闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#角色的动作-闭包"}},[t._v("#")]),t._v(" 角色的动作（闭包）")]),t._v(" "),s("p",[t._v("接下来，进入游戏，便会发生战斗了。")]),t._v(" "),s("p",[t._v("我们知道，每个角色的动作、血量值和魔法值都是独立存在的，它们互不影响。")]),t._v(" "),s("p",[t._v("假设现在playerA和playerB狭路相逢，要打架了。playerB是法师，擅长远程攻击，消耗了15点魔法值来打playerA。playerA只能近战，这时候playerA还没走到playerB跟前，只能挨打，损失掉20点血量。")]),t._v(" "),s("p",[t._v("如此描述的过程可使用代码如下实现：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v("\n复制代码"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发生战斗，B消耗15点魔法值")]),t._v("\nmpB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发生战斗，A失去20点血量值")]),t._v("\nhpA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\nfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nameB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hpB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mpB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nameA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hpA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mpA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("将这段代码片段添加到main()函数末尾，并运行程序，可得如下输出：")]),t._v(" "),s("blockquote",[s("p",[t._v("男 战士 狂斩天下 150 100")]),t._v(" "),s("p",[t._v("女 法师 温玉琳琅 100 200")]),t._v(" "),s("p",[t._v("温玉琳琅 100 185")]),t._v(" "),s("p",[t._v("狂斩天下 130 100")])]),t._v(" "),s("p",[t._v("很明显，名为温玉琳琅的法师的魔法值由200变为185，名为狂斩天下的战士的血量值由150变为130。可见，这两个角色的属性各自“持有”，改变某个角色的属性值并不会影响到另一个角色对应的属性值。")]),t._v(" "),s("p",[t._v("代表两个角色的playerA和playerB变量分别“"),s("strong",[t._v("持有")]),t._v("”不同的变量，这些变量相互不会影响。这便是“"),s("strong",[t._v("闭包")]),t._v("”的意义，这种相互不会影响的现象称为闭包的“"),s("strong",[t._v("记忆效应")]),t._v("”。")]),t._v(" "),s("p",[t._v("总地来说，闭包是匿名函数（本例中createPlayer()函数的返回值）与匿名函数所引用环境（createPlayer()函数的返回值中所使用的变量）的"),s("strong",[t._v("组合")]),t._v("。playerA和playerB不仅存储了createPlayer()函数的返回值，还存储了闭包的状态（hp、mp及其它变量）。")]),t._v(" "),s("h2",{attrs:{id:"闭包的意义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的意义"}},[t._v("#")]),t._v(" 闭包的意义")]),t._v(" "),s("p",[t._v("通过前面的例子，介绍了闭包的使用方法和特性。那么，为何要使用闭包呢？它和普通函数有何区别呢？")]),t._v(" "),s("p",[t._v("其实，使用闭包和使用普通函数的最大区别在于：")]),t._v(" "),s("ol",[s("li",[t._v("如果是普通函数，那就是一次性买卖，函数执行完毕后就"),s("strong",[t._v("无法再更改函数中变量的值")]),t._v("；")]),t._v(" "),s("li",[t._v("使用闭包，函数就成为了一个变量的值。只要变量还在，函数就会一直处于存活并独享内部状态。方便后期"),s("strong",[t._v("更改函数中变量的值")]),t._v("。")])]),t._v(" "),s("p",[t._v("另外，使用闭包还能起到一定的"),s("strong",[t._v("数据保护")]),t._v("作用。比如本讲示例中的hp、mp值，如果不在闭包内来维护它们的话，值很可能会被错误地修改。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("🎉 恭喜，您完成了本次课程的学习！")]),t._v(" "),s("p",[t._v("📌 以下是本次课程的重点内容总结：")]),t._v(" "),s("ol",[s("li",[t._v("闭包")])]),t._v(" "),s("p",[t._v("闭包可以看成函数的高阶应用，是Go语言高级开发的必备技能。")]),t._v(" "),s("p",[t._v("本讲通过模拟游戏中创建角色和角色之间战斗的过程介绍了Go语言中闭包的使用。")]),t._v(" "),s("p",[t._v("同时，通过与普通函数对比，闭包可以更方便地修改函数中变量的值，并可在一定程度上保护数据不被意外篡改。")]),t._v(" "),s("p",[t._v("本讲是最后一个关于函数的课程，下一讲我们会一同进入新的模块——结构体。")]),t._v(" "),s("p",[t._v("有C语言编程经验的朋友对结构体一定不会感到陌生。Go语言的整体设计基于C语言，并做了完善，吸收了C语言及其它编程语言的优势。因此，Go语言中的结构体不仅可实现类似C语言中结构体的作用，还可实现类似面向对象语言中的的构造函数、方法、继承（包括嵌套）。这些内容我们都会在后续的课程中逐一介绍，让我们拭目以待吧！")]),t._v(" "),s("p",[t._v("➡️ 在下次课程中，我们会介绍Go语言中的结构体，具体内容是：")]),t._v(" "),s("ul",[s("li",[t._v("结构体的定义和使用")]),t._v(" "),s("li",[t._v("匿名结构体的定义和使用")])])])}),[],!1,null,null,null);s.default=r.exports}}]);