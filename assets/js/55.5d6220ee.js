(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{267:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"谨慎使用-outfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谨慎使用-outfile","aria-hidden":"true"}},[a._v("#")]),a._v(" 谨慎使用 "),t("code",[a._v("--outFile")])]),a._v(" "),t("p",[a._v("由于以下几点原因，你应该谨慎使用 "),t("code",[a._v("--outFile")]),a._v(" 选项：")]),a._v(" "),t("ul",[t("li",[a._v("运行时的错误；")]),a._v(" "),t("li",[a._v("快速编译；")]),a._v(" "),t("li",[a._v("全局作用域；")]),a._v(" "),t("li",[a._v("难以分析；")]),a._v(" "),t("li",[a._v("难以扩展；")]),a._v(" "),t("li",[t("code",[a._v("_references")]),a._v("；")]),a._v(" "),t("li",[a._v("代码重用；")]),a._v(" "),t("li",[a._v("多目标；")]),a._v(" "),t("li",[a._v("单独编译；")])]),a._v(" "),t("h2",{attrs:{id:"运行时的错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行时的错误","aria-hidden":"true"}},[a._v("#")]),a._v(" 运行时的错误")]),a._v(" "),t("p",[a._v("如果你的代码依赖于上文中的 JavaScript，你可能会在运行时得到错误：")]),a._v(" "),t("ul",[t("li",[a._v("类的继承在运行时中断。")])]),a._v(" "),t("p",[a._v("有如下 "),t("code",[a._v("foo.ts")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("以及 "),t("code",[a._v("bar.ts")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("如果你没有按正确的顺序编译它（例如："),t("code",[a._v("tsc bar.ts foo.ts")]),a._v("），虽然它能够被编译成功，但是会在运行时抛出 "),t("code",[a._v("ReferenceError")]),a._v(" 的错误。")]),a._v(" "),t("ul",[t("li",[a._v("模块拆分在运行时会失败。")])]),a._v(" "),t("p",[t("code",[a._v("foo.ts")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" App "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[t("code",[a._v("bar.ts")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" App "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("456")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("与上文中一致，当你没有用正确的顺序编译它，它会在运行时将 "),t("code",[a._v("NaN")]),a._v(" 赋值给 "),t("code",[a._v("bar")]),a._v("；")]),a._v(" "),t("h2",{attrs:{id:"快速编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速编译","aria-hidden":"true"}},[a._v("#")]),a._v(" 快速编译")]),a._v(" "),t("p",[a._v("如果你使用 "),t("code",[a._v("--out")]),a._v(" 编译选项，而没有使用一些 "),t("code",[a._v("hacks")]),a._v(" 时，单独的 "),t("code",[a._v(".ts")]),a._v(" 文件是不会被编译成单独的 "),t("code",[a._v(".js")]),a._v(" 文件。 "),t("code",[a._v("--out")]),a._v(" 选项实际上使用了较慢的构建方式。")]),a._v(" "),t("p",[a._v("此外，由于 source map 基于长度编码，且对位置信息敏感，因此，大部分 source map 都会在编译时重新构建（如果你使用 source map）。")]),a._v(" "),t("h2",{attrs:{id:"全局作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局作用域","aria-hidden":"true"}},[a._v("#")]),a._v(" 全局作用域")]),a._v(" "),t("p",[a._v("当然，你可以使用命名空间，但是它仍然在 "),t("code",[a._v("window")]),a._v(" 上（如果你在浏览器中打开），命名空间仅仅是一个临时的解决方式。"),t("code",[a._v("///<reference")]),a._v(" 也不例外，它会引入一个难以维护的全局上下文。")]),a._v(" "),t("p",[a._v("如果你的公司有多个独立工作的团队，当有人决定尝试集成两个程序编写 app 时，则很可能存在命名冲突。")]),a._v(" "),t("h2",{attrs:{id:"难以分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#难以分析","aria-hidden":"true"}},[a._v("#")]),a._v(" 难以分析")]),a._v(" "),t("p",[a._v("我们希望提供更多代码分析工具。如果你提供调用链的依赖关系，这些将会变得简单。")]),a._v(" "),t("h2",{attrs:{id:"难以扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#难以扩展","aria-hidden":"true"}},[a._v("#")]),a._v(" 难以扩展")]),a._v(" "),t("p",[a._v("实际上这是运行时的随机错误 + 编译时间时间慢 + 难以理解的代码的结果。")]),a._v(" "),t("h2",{attrs:{id:"references-ts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references-ts","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("code",[a._v("_references.ts")])]),a._v(" "),t("p",[a._v("它并没有被 "),t("code",[a._v("tsconfig.json")]),a._v(" 支持："),t("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/2472#issuecomment-85330803",target:"_blank",rel:"noopener noreferrer"}},[a._v("Comment"),t("OutboundLink")],1),a._v("，你需要手动对文件排序。")]),a._v(" "),t("h2",{attrs:{id:"代码重用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码重用","aria-hidden":"true"}},[a._v("#")]),a._v(" 代码重用")]),a._v(" "),t("p",[a._v("如果你想在另一个项目中重用存在隐式依赖关系的代码，如果没有错误提示，很难移植它。")]),a._v(" "),t("h2",{attrs:{id:"多目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多目标","aria-hidden":"true"}},[a._v("#")]),a._v(" 多目标")]),a._v(" "),t("p",[a._v("如果你想在 nodejs 之类的环境下重用在浏览器中的代码（如：testing APIS），你将不得不将其转换到新的模块系统或者使用不好的 "),t("code",[a._v("hacks")]),a._v("，让 nodejs 的 "),t("code",[a._v("global")]),a._v(" 成为你的新的全局变量（如："),t("code",[a._v("window")]),a._v("）。")]),a._v(" "),t("h2",{attrs:{id:"单独编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单独编译","aria-hidden":"true"}},[a._v("#")]),a._v(" 单独编译")]),a._v(" "),t("p",[a._v("文件无法被单独编译，如 "),t("code",[a._v("a.ts")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("M")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" s "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("根据不同的 "),t("code",[a._v("b.ts")]),a._v(" 的形式，它将有不同的输出：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("M")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" t "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("或者：")]),a._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" t "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("因此 "),t("code",[a._v("a.ts")]),a._v(" 不能被单独编译;")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[t("code",[a._v("--out")]),a._v(" 做的是一些构建工具的工作，这些构建工具也可以受益于外部模块所提供的依赖，因此如果你愿意，我们推荐你使用外部模块，让构建工具创建单文件的 "),t("code",[a._v(".js")]),a._v("。")])])},[],!1,null,null,null);s.default=r.exports}}]);