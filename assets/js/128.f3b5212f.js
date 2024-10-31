(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{561:function(a,t,s){"use strict";s.r(t);var n=s(2),c=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("在上一讲中，我们学会了如何构建和使用“轮子”。本讲我们进一步深入，介绍如何构建会自转的轮子。这种会自转的轮子在调用时，通过在函数内部调用自身，实现“自转”。在编程领域，这种自己调用自己的方式通常被称为“递归”调用。")]),a._v(" "),t("p",[a._v("然而，递归说起来容易，但要理解并正确使用它并非易事。所以本讲将会史无前例地只讲述这一个知识点，并使用两个实例帮大家学好递归。好了，废话不多说，让我们正式开始吧！")]),a._v(" "),t("h2",{attrs:{id:"计算阶乘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算阶乘"}},[a._v("#")]),a._v(" 计算阶乘")]),a._v(" "),t("p",[a._v("我们先来一同解决一个数学问题——计算阶乘。")]),a._v(" "),t("p",[a._v("回顾一下阶乘的概念。所谓阶乘，就是给定一个正整数，然后从0开始，依次将所有小于及等于该数的正整数做乘法运算。举个例子，给定一个正整数5。5的阶乘是1×2×3×4×5，得到结果是120。因此，5的阶乘是120，写为：5!=120。值得注意的是，0的阶乘等于1。")]),a._v(" "),t("p",[a._v("为了便于讲解，本例先祭出完整代码：")]),a._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("go")]),a._v("\n复制代码"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("calcFactorial")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("calcFactorial")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("n "),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("result "),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      result "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("calcFactorial")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" result\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("从宏观上看，上述代码很好解释。main()函数调用了calcFactorial()函数，并传入了int型参数：5，表示要计算5的阶乘。具体的计算工作交给calcFactorial()函数进行。神奇的是，当我们阅读calcFactorial()函数的代码时，发现其中居然再一次调用了calcFactorial()函数。")]),a._v(" "),t("p",[a._v("这样真的可以吗？让我们运行这段代码，可以看到控制台输出了120，结果正确！这到底是怎么一回事呢？")]),a._v(" "),t("p",[a._v("当我们阅读代码时，一种比较好的做法便是放下我们固有的“人类思维”。把自己当作一台电脑，在大脑中运行这段程序。")]),a._v(" "),t("p",[a._v("当向calcFactorial()函数中传入0时，很显然不满足n > 0的条件，直接返回1，即0!=1。这种情况相信大家都能理解吧？")]),a._v(" "),t("p",[a._v("接着，假设向calcFactorial()函数中传入1。此时，n = 1，满足n > 0的条件，开始计算result变量。在这一步，又执行了calcFactorial(n-1)。n-1的结果是0，我们已经知道calcFactorial(0)的结果是1，因此，result变量实际上的计算过程是1 * calcFactorial(0)。所以最终结果是1，即1!=1。")]),a._v(" "),t("p",[a._v("再接着，假设向calcFactorial()函数中传入2。此时，n = 2，满足n > 0的条件，开始计算result变量。在这一步，又执行了calcFactorial(n-1)。n-1的结果是1，我们已经知道calcFactorial(1)的结果是1，因此，result变量的计算过程是1 * calcFactorial(1)。而在执行calcFactorial(1)时，函数内部还执行了calcFactorial(0)。所以在计算result变量的值时，总共分为三步：")]),a._v(" "),t("ol",[t("li",[a._v("2 * calcFactorial(1)")]),a._v(" "),t("li",[a._v("2 * (1 * calcFactorial(0))")]),a._v(" "),t("li",[a._v("2 * (1 * 1)")])]),a._v(" "),t("p",[a._v("所以最终结果是2，即2!=3。")]),a._v(" "),t("p",[a._v("说到这，相信大家已经隐隐约约地觉察到一些规律了。我们不妨再继续做些假设。")]),a._v(" "),t("p",[a._v("假设向calcFactorial()函数中传入3，result的值是如何计算的呢？没错，总共分为四步：")]),a._v(" "),t("ol",[t("li",[a._v("3 * calcFactorial(2)")]),a._v(" "),t("li",[a._v("3 * (2 * calcFactorial(1))")]),a._v(" "),t("li",[a._v("3 * (2 * (1 * calcFactorial(0)))")]),a._v(" "),t("li",[a._v("3 * (2 * (1 * 1))")])]),a._v(" "),t("p",[a._v("最终，3!=6。")]),a._v(" "),t("p",[a._v("注意到每个步骤中的小括号了吗？在程序实际执行时，由于发起调用的一方总是等待被调用的结果，所以计算的顺序便会如此。若要较为完整地描述计算过程，将如下所示：")]),a._v(" "),t("ol",[t("li",[a._v("3 * calcFactorial(2)")]),a._v(" "),t("li",[a._v("3 * (2 * calcFactorial(1))")]),a._v(" "),t("li",[a._v("3 * (2 * (1 * calcFactorial(0)))")]),a._v(" "),t("li",[a._v("3 * (2 * (1 * 1))")]),a._v(" "),t("li",[a._v("3 * (2 * 1)")]),a._v(" "),t("li",[a._v("3 * 2")]),a._v(" "),t("li",[a._v("6")])]),a._v(" "),t("p",[a._v("最后，我们直接尝试向calcFactorial()函数中传入5。这一次，请不要直接往下看，请大家先主动想想result是如何一步一步地算出来的。")]),a._v(" "),t("p",[a._v("答案如下：")]),a._v(" "),t("ol",[t("li",[a._v("5 * calcFactorial(4)")]),a._v(" "),t("li",[a._v("5 * (4 * calcFactorial(3))")]),a._v(" "),t("li",[a._v("5 * (4 * (3 * calcFactorial(2)))")]),a._v(" "),t("li",[a._v("5 * (4 * (3 * (2 * calcFactorial(1))))")]),a._v(" "),t("li",[a._v("5 * (4 * (3 * (2 * (1 * calcFactorial(0)))))")]),a._v(" "),t("li",[a._v("5 * (4 * (3 * (2 * (1 * 1))))")]),a._v(" "),t("li",[a._v("5 * (4 * (3 * (2 * 1)))")]),a._v(" "),t("li",[a._v("5 * (4 * (3 * 2))")]),a._v(" "),t("li",[a._v("5 * (4 * 6)")]),a._v(" "),t("li",[a._v("5 * 24")]),a._v(" "),t("li",[a._v("120")])]),a._v(" "),t("p",[a._v("怎么样？经过这样一番详尽的拆解，相信大家已经可以读懂递归代码了。")]),a._v(" "),t("p",[a._v("接下来，让我们实际动手，逐步实现递归算法。")]),a._v(" "),t("h2",{attrs:{id:"输出斐波那契数列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出斐波那契数列"}},[a._v("#")]),a._v(" 输出斐波那契数列")]),a._v(" "),t("p",[a._v("先解释一下概念：什么是斐波那契数列。")]),a._v(" "),t("blockquote",[t("p",[a._v("斐波那契数列（Fibonacci sequence），又称黄金分割数列、兔子数列。指的是这样一个数列：1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(0)=1，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N）在现代物理、准晶体结构化学等领域，斐波纳契数列都有直接的应用。")]),a._v(" "),t("p",[a._v("摘自百度百科："),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97",target:"_blank",rel:"noopener noreferrer"}},[a._v("斐波那契数列"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("简而言之，斐波那契数列（以下简称“数列”）就是由从1开始的若干正整数构成的数列。其特征是第三个数是前两个数字之和，其中开头的两个数都是1。")]),a._v(" "),t("p",[a._v("本示例要求实现一个名为calcFibonacci()的函数，参数是int型，表示要输出数列中第几个数字。")]),a._v(" "),t("p",[a._v("先来实现最为简单的部分。根据数列的规律，开头的两个数字是1，因此当传入的参数小于或等于2时，直接返回1。")]),a._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("go")]),a._v("\n复制代码"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("calcFibonacci")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("n "),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("result "),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      result "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 递归调用")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" result\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("接下来实现较有挑战的递归调用。我们不妨继续做些假设，当n=3时，result值应如何计算出来呢？")]),a._v(" "),t("p",[a._v("显然，n=3表示列出数列中前3个数字。根据数列的规律，第3个数字应该是前两个数字，也就是第1个和第2个数字之和。因此，当n=3时：")]),a._v(" "),t("p",[a._v("result = calcFibonacci(2) + calcFibonacci(1)。")]),a._v(" "),t("p",[a._v("继续下去，我们会发现如下规律：")]),a._v(" "),t("ul",[t("li",[a._v("当n = 4时，result = calcFibonacci(3) + calcFibonacci(2)；")]),a._v(" "),t("li",[a._v("当n = 5时，result = calcFibonacci(4) + calcFibonacci(3)；")]),a._v(" "),t("li",[a._v("当n = 6时，result = calcFibonacci(5) + calcFibonacci(4)；")]),a._v(" "),t("li",[a._v("……")])]),a._v(" "),t("p",[a._v("可以归纳出：当n > 2时，result = calcFibonacci(n - 1) + calcFibonacci(n - 2)。")]),a._v(" "),t("p",[a._v("使用归纳出的结论补充calcFibonacci()函数，并尝试在main()函数中调用它。完整代码如下：")]),a._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("go")]),a._v("\n复制代码"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("calcFibonacci")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("calcFibonacci")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("n "),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("result "),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      result "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      result "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("calcFibonacci")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("calcFibonacci")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" result\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("如上代码所示，向calcFibonacci()中传入了5。程序运行后，控制台将输出数列中第5个数字：")]),a._v(" "),t("blockquote",[t("p",[a._v("5")])]),a._v(" "),t("p",[a._v("当向calcFibonacci()函数中传入5时，变量result的值计算过程如下：")]),a._v(" "),t("ol",[t("li",[a._v("calcFibonacci(4) + calcFibonacci(3)")]),a._v(" "),t("li",[a._v("(calcFibonacci(3) + calcFibonacci(2)) + (calcFibonacci(2) + calcFibonacci(1))")]),a._v(" "),t("li",[a._v("((calcFibonacci(2) + calcFibonacci(1)) + 1) + (1 + 1)")]),a._v(" "),t("li",[a._v("((1 + 1) + 1) + (1 + 1)")]),a._v(" "),t("li",[a._v("(2 + 1) + 2")]),a._v(" "),t("li",[a._v("3 + 2")]),a._v(" "),t("li",[a._v("5")])]),a._v(" "),t("p",[a._v("请大家尝试向calcFibonacci()函数中传入10，并试着写出result的值计算过程。")]),a._v(" "),t("h2",{attrs:{id:"使用递归的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用递归的注意事项"}},[a._v("#")]),a._v(" 使用递归的注意事项")]),a._v(" "),t("p",[a._v("到此，递归算法的使用已经介绍完毕。通过两个示例的练习，相信大家对递归的使用已经掌握得差不多了。不过，要使用好递归算法，还有几个点需要注意。")]),a._v(" "),t("ul",[t("li",[a._v("若要使用递归算法，务必要确认被解决的问题可以被拆分为多个子问题；")]),a._v(" "),t("li",[a._v("被拆分的子问题及拆分前的原问题除了数据规模有大小区别外，计算的思路是相同的；")]),a._v(" "),t("li",[a._v("递归必须有终止的条件，否则将陷入死循环，程序无法正常结束。")])]),a._v(" "),t("p",[a._v("请大家结合示例体会前两点。")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("🎉 恭喜，您完成了本次课程的学习！")]),a._v(" "),t("p",[a._v("📌 以下是本次课程的重点内容总结：")]),a._v(" "),t("ol",[t("li",[a._v("递归算法")])]),a._v(" "),t("p",[a._v("本讲使用了两个示例来介绍递归算法。在计算阶乘的例子中，使用直接阅读代码的方法深刻体会了递归算法在计算机中的运算步骤；在输出斐波那契数的例子中，我带着各位手把手地实现了递归算法。在这个示例中，calcFibonacci()函数内部调用了两次自身实现了递归。")]),a._v(" "),t("p",[a._v("本讲的最后，还列出了三个使用递归算法的注意事项。")]),a._v(" "),t("p",[a._v("在实际开发中，递归算法通常用于获取某个目录（文件夹）中的所有目录/文件，以及子目录中的目录/文件，从而达到父目录的大小统计、删除等操作。此外，像汉诺塔、归并/分治/快速排序法、解析XML格式文件等等都可使用递归算法实现。感兴趣的朋友可以搜索相关的内容了解更多详情。")]),a._v(" "),t("p",[a._v("➡️ 在下次课程中，我们会继续介绍Go语言中的函数，具体内容是：")]),a._v(" "),t("ul",[t("li",[a._v("匿名函数")])])])}),[],!1,null,null,null);t.default=c.exports}}]);