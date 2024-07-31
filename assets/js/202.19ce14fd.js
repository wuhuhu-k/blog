(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{726:function(s,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"npm-与-yarn-与-pnpm-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-与-yarn-与-pnpm-区别"}},[s._v("#")]),s._v(" npm 与 yarn 与 pnpm 区别")]),s._v(" "),a("p",[s._v("npm 和 yarn 都是 node 的包管理工具， 它们都用于管理 node 项目的依赖包。 它们之间有一些区别， 下面是它们的区别：")]),s._v(" "),a("ol",[a("li",[s._v("安装速度：npm 的安装速度比 yarn 慢， 因为 npm 需要从远程仓库下载依赖包， 而 yarn 则可以从本地缓存中获取依赖包。")]),s._v(" "),a("li",[s._v("依赖包管理：npm 和 yarn 都支持依赖包的管理， 但是 npm 的依赖包管理相对简单， 而 yarn 的依赖包管理更加复杂。")]),s._v(" "),a("li",[s._v("依赖包扁平化：npm 和 yarn 都支持依赖包扁平化， 即把依赖包平铺展示在 node_module 中， 这样可以减少重复依赖包的数量。")]),s._v(" "),a("li",[s._v("依赖包版本管理：npm 和 yarn 都支持依赖包版本管理， 即可以使用不同的版本号来管理依赖包。")]),s._v(" "),a("li",[s._v("依赖包安装方式：npm 和 yarn 都支持依赖包的安装， 即可以使用 npm install 或 yarn install 命令来安装依赖包。")]),s._v(" "),a("li",[s._v("依赖包更新方式：npm 和 yarn 都支持依赖包的更新， 即可以使用 npm update 或 yarn upgrade 命令来更新依赖包。")]),s._v(" "),a("li",[s._v("依赖包卸载方式：npm 和 yarn 都支持依赖包的卸载， 即可以使用 npm uninstall 或 yarn remove 命令来卸载依赖包。")]),s._v(" "),a("li",[s._v("依赖包锁定方式：npm 和 yarn 都支持依赖包的锁定， 即可以使用 npm shrinkwrap 或 yarn.lock 文件来锁定依赖包的版本号。")]),s._v(" "),a("li",[s._v("依赖包发布方式：npm 和 yarn 都支持依赖包的发布， 即可以使用 npm publish 或 yarn publish 命令来发布依赖包。")]),s._v(" "),a("li",[s._v("依赖包搜索方式：npm 和 yarn 都支持依赖包的搜索， 即可以使用 npm search 或 yarn search 命令来搜索依赖包。")])]),s._v(" "),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("p",[s._v("npm 和 yarn 的依赖包都会在 node_module 中平铺展示， 通过扁平的这种方式导致在项目中可以使用未声明的依赖（即项目本身没有在 package.json 中声明的依赖）会有幽灵依赖问题，同一个依赖不同版本，npm 和 yarn 只能将其中的一个版本放在 node_module 中，其他的版本还是只能安装在对应依赖包的依赖中")]),s._v(" "),a("p",[s._v("pnpm 完美的解决了这些问题，node_module 中只有项目本身对的依赖，且全部是通过链接的方式指向.pnpm 中的对应依赖包，速度快且节省了大量的磁盘空间，并支持离线下载，缺点是时间久了 pnpm store 会越来越大，需要定期的清理 pnpm store prune")]),s._v(" "),a("h2",{attrs:{id:"package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[s._v("#")]),s._v(" package.json")]),s._v(" "),a("p",[s._v("项目的配置文件")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xhfblog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kong"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev . --temp .temp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build ."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build && gh-pages -d public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deployed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gh-pages -d public"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"async-validator"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.11.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node-sass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.12.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sass-loader"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^7.1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.9.7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-plugin-dynamic-title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-plugin-go-top"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.0.4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-plugin-ribbon-animation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.1.3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-plugin-sakura"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.2.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-theme-jabinblog"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gh-pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue-class-component"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^7.2.3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-plugin-helper-live2d"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.0.2"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h2",{attrs:{id:"package-lock-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json"}},[s._v("#")]),s._v(" package-lock.json")]),s._v(" "),a("p",[s._v("为什么要使用 package-lock.json？为了在不同的环境下能生成相同的 node_modules")]),s._v(" "),a("p",[s._v("因为 npm 不同版本的下载依据不同，有些依赖可能已经发了新版本，依赖的依赖也更新了版本，可能会导致依赖的变更从而导致项目环境不同，会出现一些奇怪的问题")]),s._v(" "),a("h2",{attrs:{id:"npm-install-做了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-做了什么"}},[s._v("#")]),s._v(" npm install 做了什么?")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("1.检查 npm config 信息")])]),s._v(" "),a("li",[a("p",[s._v("2.判断是否存在 lockfile，如果存在，要判断 lockfile 和 package.json 的依赖信息是否一致，不同版本的 npm 下载的依据不同,npm5.0 是直接根据 lockfile 下载，5.1-5.4.2 是根据 package.json 下载，然后更新 lockfile，5.4.2 以上是当 lockfile 和 package.json 版本有兼容时根据 lockfile 文件下载，否则根据 package.json 下载然后更新 lockfile")])]),s._v(" "),a("li",[a("p",[s._v("3.如果不存在，需要读取 package.json 中的依赖信息，构建版本依赖树，依赖关系扁平化处理，去重")])]),s._v(" "),a("li",[a("p",[s._v("4.判断是否有依赖缓存，没有的话，从 config 配置的源中下载依赖包并检查完整性，如果有缓存，就直接使用缓存，解压到 node_modules 中")])]),s._v(" "),a("li",[a("ol",{attrs:{start:"5"}},[a("li",[s._v("生成/更新 lockfile")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);