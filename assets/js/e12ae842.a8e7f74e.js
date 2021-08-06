(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6303],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return c},kt:function(){return u}});var t=n(2784);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?t.createElement(k,i(i({ref:a},c),{},{components:n})):t.createElement(k,i({ref:a},c))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8935:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var t=n(2122),r=n(9756),o=(n(2784),n(3905)),i=["components"],l={title:"Using legacy Babel transpilation",id:"legacy-babel"},p=void 0,s={unversionedId:"legacy-babel",id:"legacy-babel",isDocsHomePage:!1,title:"Using legacy Babel transpilation",description:"In Remotion 2.0, the traditional transpilation of Javascript and Typescript using the babel-loader has been replaced by the faster esbuild-loader by default.",source:"@site/docs/legacy-babel-loader.md",sourceDirName:".",slug:"/legacy-babel",permalink:"/docs/legacy-babel",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/legacy-babel-loader.md",version:"current",frontMatter:{title:"Using legacy Babel transpilation",id:"legacy-babel"},sidebar:"someSidebar",previous:{title:"Custom Webpack config",permalink:"/docs/webpack"},next:{title:"Environment variables",permalink:"/docs/env-variables"}},c=[{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],d={toc:c};function m(e){var a=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Remotion 2.0, the traditional transpilation of Javascript and Typescript using the ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-loader")," has been replaced by the faster ",(0,o.kt)("inlineCode",{parentName:"p"},"esbuild-loader")," by default."),(0,o.kt)("p",null,"If you for some reason need to go back to the previous behavior, you may ",(0,o.kt)("a",{parentName:"p",href:"webpack"},"override the Webpack configuration"),". Remember that overriding the Webpack configuration works reducer-style, where you get the default configuration in a function argument and you return the modified version of your config."),(0,o.kt)("p",null,"We provide a compatibility package ",(0,o.kt)("inlineCode",{parentName:"p"},"@remotion/babel-loader")," that you can install into your Remotion project and use the function ",(0,o.kt)("inlineCode",{parentName:"p"},"replaceLoadersWithBabel()")," to swap out the ESBuild loader with the old Babel one that was in Remotion 1.0"),(0,o.kt)("p",null,"This should not be necessary in general, it is encouraged to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/remotion-dev/remotion/issues/new"},"report issues")," regarding the new ESBuild loader."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light with-title",style:{backgroundColor:"#ffffff",color:"#24292eff"},title:"Console"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},"Console"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm i @remotion/babel-loader"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki min-dark with-title",style:{backgroundColor:"#1f1f1f",color:"#b392f0"},title:"Console"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},"Console"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"npm i @remotion/babel-loader")))))),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light with-title twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"},title:"remotion.config.ts"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},"remotion.config.ts"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const replaceLoadersWithBabel: (conf: WebpackConfiguration) => WebpackConfiguration\nimport replaceLoadersWithBabel"},"replaceLoadersWithBabel"),"} "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'@remotion/babel-loader'")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Config: {\n    readonly Preview: {\n        readonly setMaxTimelineTracks: (maxTracks: number) => void;\n    };\n    readonly Bundling: {\n        readonly overrideWebpackConfig: (fn: WebpackOverrideFn) => void;\n        readonly setCachingEnabled: (flag: boolean) => void;\n        readonly setPort: (port: number | undefined) => void;\n    };\n    readonly Log: {\n        ...;\n    };\n    readonly Puppeteer: {\n        ...;\n    };\n    readonly Rendering: {\n        ...;\n    };\n    readonly Output: {\n        ...;\n    };\n}\nimport Config"},"Config")),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) Bundling: {\n    readonly overrideWebpackConfig: (fn: WebpackOverrideFn) => void;\n    readonly setCachingEnabled: (flag: boolean) => void;\n    readonly setPort: (port: number | undefined) => void;\n}"},"Bundling")),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) overrideWebpackConfig: (fn: WebpackOverrideFn) => void"},"overrideWebpackConfig")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"((",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(parameter) currentConfiguration: WebpackConfiguration"},"currentConfiguration"),") "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) replaceLoadersWithBabel(conf: WebpackConfiguration): WebpackConfiguration\nimport replaceLoadersWithBabel"},"replaceLoadersWithBabel")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(parameter) currentConfiguration: WebpackConfiguration"},"currentConfiguration"),")")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"})"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki min-dark with-title twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"},title:"remotion.config.ts"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},"remotion.config.ts"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const replaceLoadersWithBabel: (conf: WebpackConfiguration) => WebpackConfiguration\nimport replaceLoadersWithBabel"},"replaceLoadersWithBabel"),"} "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'@remotion/babel-loader'")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Config: {\n    readonly Preview: {\n        readonly setMaxTimelineTracks: (maxTracks: number) => void;\n    };\n    readonly Bundling: {\n        readonly overrideWebpackConfig: (fn: WebpackOverrideFn) => void;\n        readonly setCachingEnabled: (flag: boolean) => void;\n        readonly setPort: (port: number | undefined) => void;\n    };\n    readonly Log: {\n        ...;\n    };\n    readonly Puppeteer: {\n        ...;\n    };\n    readonly Rendering: {\n        ...;\n    };\n    readonly Output: {\n        ...;\n    };\n}\nimport Config"},"Config")),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) Bundling: {\n    readonly overrideWebpackConfig: (fn: WebpackOverrideFn) => void;\n    readonly setCachingEnabled: (flag: boolean) => void;\n    readonly setPort: (port: number | undefined) => void;\n}"},"Bundling")),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},".",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) overrideWebpackConfig: (fn: WebpackOverrideFn) => void"},"overrideWebpackConfig"),"((",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(parameter) currentConfiguration: WebpackConfiguration"},"currentConfiguration"),") "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(alias) replaceLoadersWithBabel(conf: WebpackConfiguration): WebpackConfiguration\nimport replaceLoadersWithBabel"},"replaceLoadersWithBabel"),"(",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(parameter) currentConfiguration: WebpackConfiguration"},"currentConfiguration"),")")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"})")))))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"webpack"},"Custom Webpack config"))))}m.isMDXComponent=!0}}]);