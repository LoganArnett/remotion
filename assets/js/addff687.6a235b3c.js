(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7249],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return N}});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),N=r,k=m["".concat(s,".").concat(N)]||m[N]||c[N]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},615:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(2122),r=a(9756),i=(a(2784),a(3905)),l=["components"],o={id:"gif",sidebar_label:"API - @remotion/gif",title:"@remotion/gif"},s=void 0,p={unversionedId:"gif",id:"gif",isDocsHomePage:!1,title:"@remotion/gif",description:"You can install this package from NPM to get a component for displaying GIFs that synchronize with Remotions useCurrentFrame().",source:"@site/docs/gif.md",sourceDirName:".",slug:"/gif",permalink:"/docs/gif",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/gif.md",version:"current",frontMatter:{id:"gif",sidebar_label:"API - @remotion/gif",title:"@remotion/gif"},sidebar:"someSidebar",previous:{title:"bundle()",permalink:"/docs/bundle"},next:{title:"getAudioData()",permalink:"/docs/get-audio-data"}},d=[{value:"Props",id:"props",children:[{value:"<code>src</code>",id:"src",children:[]},{value:"<code>width</code>",id:"width",children:[]},{value:"<code>height</code>",id:"height",children:[]},{value:"<code>fit</code>",id:"fit",children:[]},{value:"<code>onLoad</code>",id:"onload",children:[]},{value:"<code>style</code>",id:"style",children:[]}]},{value:"Example",id:"example",children:[]}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can install this package from NPM to get a component for displaying GIFs that synchronize with Remotions ",(0,i.kt)("a",{parentName:"p",href:"use-current-frame"},(0,i.kt)("inlineCode",{parentName:"a"},"useCurrentFrame()")),"."),(0,i.kt)("div",{className:"shiki-twoslash-fragment"},(0,i.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,i.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,i.kt)("div",{parentName:"pre",className:"code-container"},(0,i.kt)("code",{parentName:"div"},(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm i @remotion/gif"))))),(0,i.kt)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,i.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,i.kt)("div",{parentName:"pre",className:"code-container"},(0,i.kt)("code",{parentName:"div"},(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"npm i @remotion/gif")))))),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"src"},(0,i.kt)("inlineCode",{parentName:"h3"},"src")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"required")),(0,i.kt)("p",null,"The source of the GIF. Can be an URL or a local image - see ",(0,i.kt)("a",{parentName:"p",href:"assets"},"Importing assets"),"."),(0,i.kt)("h3",{id:"width"},(0,i.kt)("inlineCode",{parentName:"h3"},"width")),(0,i.kt)("p",null,"The display width."),(0,i.kt)("h3",{id:"height"},(0,i.kt)("inlineCode",{parentName:"h3"},"height")),(0,i.kt)("p",null,"The display height."),(0,i.kt)("h3",{id:"fit"},(0,i.kt)("inlineCode",{parentName:"h3"},"fit")),(0,i.kt)("p",null,"Must be one of these values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'fill'"),": The GIF will completely fill the container, and will be stretched if necessary. (",(0,i.kt)("em",{parentName:"li"},"default"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'contain'"),": The GIF is scaled to fit the box, while aspect ratio is maintained."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'cover'"),": The GIF completely fills the container and maintains it's aspect ratio. It will be cropped if necessary.")),(0,i.kt)("h3",{id:"onload"},(0,i.kt)("inlineCode",{parentName:"h3"},"onLoad")),(0,i.kt)("p",null,"Callback that gets called once the GIF has loaded and finished processing. As its only argument, the callback gives the following object:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loaded"),": Will be always ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width"),": Width of the GIF file in pixels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height"),": Height of the GIF file in pixels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delays"),": Array of timestamps of type ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," containing position of each frame."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"frames"),": Array of frames of type ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/ImageData"},(0,i.kt)("inlineCode",{parentName:"a"},"ImageData")))),(0,i.kt)("h3",{id:"style"},(0,i.kt)("inlineCode",{parentName:"h3"},"style")),(0,i.kt)("p",null,"Allows to pass in custom CSS styles."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("div",{className:"shiki-twoslash-fragment"},(0,i.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,i.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,i.kt)("div",{parentName:"pre",className:"code-container"},(0,i.kt)("code",{parentName:"div"},(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,i.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Gif: (props: RemotionGifProps) => JSX.Element\nimport Gif"},"Gif"),"} "),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'@remotion/gif'")),(0,i.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"const MyComponent: React.FC<{}>"},"MyComponent")),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React")),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"."),(0,i.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"type React.FC<P = {}> = React.FunctionComponent<P>"},"FC")),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {"),(0,i.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"const width: number"},"width")),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},", "),(0,i.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"const height: number"},"height")),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"(alias) useVideoConfig(): VideoConfig\nimport useVideoConfig"},"useVideoConfig")),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"()")),(0,i.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,i.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Gif: (props: RemotionGifProps) => JSX.Element\nimport Gif"},"Gif"))),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,i.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src: string"},"src")),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"https://media.giphy.com/media/3o72F7YT6s0EMFI0Za/giphy.gif"')),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,i.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width?: number | undefined"},"width")),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,i.kt)("data-lsp",{parentName:"span",lsp:"const width: number"},"width"),"}")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,i.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height?: number | undefined"},"height")),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,i.kt)("data-lsp",{parentName:"span",lsp:"const height: number"},"height"),"}")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,i.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:'(JSX attribute) fit?: "contain" | "fill" | "cover" | undefined'},"fit")),(0,i.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"fill"')),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    />")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  )")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,i.kt)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,i.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,i.kt)("div",{parentName:"pre",className:"code-container"},(0,i.kt)("code",{parentName:"div"},(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,i.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Gif: (props: RemotionGifProps) => JSX.Element\nimport Gif"},"Gif"),"} "),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,i.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'@remotion/gif'")),(0,i.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,i.kt)("data-lsp",{parentName:"span",lsp:"const MyComponent: React.FC<{}>"},"MyComponent")),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,i.kt)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React"),".",(0,i.kt)("data-lsp",{parentName:"span",lsp:"type React.FC<P = {}> = React.FunctionComponent<P>"},"FC")," "),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {"),(0,i.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"const width: number"},"width")),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},", "),(0,i.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"const height: number"},"height")),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"} "),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,i.kt)("data-lsp",{parentName:"span",lsp:"(alias) useVideoConfig(): VideoConfig\nimport useVideoConfig"},"useVideoConfig"),"()")),(0,i.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    <"),(0,i.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,i.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Gif: (props: RemotionGifProps) => JSX.Element\nimport Gif"},"Gif"))),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"      ",(0,i.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src: string"},"src")),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},'"https://media.giphy.com/media/3o72F7YT6s0EMFI0Za/giphy.gif"')),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"      ",(0,i.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width?: number | undefined"},"width")),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,i.kt)("data-lsp",{parentName:"span",lsp:"const width: number"},"width"),"}")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"      ",(0,i.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height?: number | undefined"},"height")),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,i.kt)("data-lsp",{parentName:"span",lsp:"const height: number"},"height"),"}")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"      ",(0,i.kt)("data-lsp",{parentName:"span",lsp:'(JSX attribute) fit?: "contain" | "fill" | "cover" | undefined'},"fit")),(0,i.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,i.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},'"fill"')),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    />")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  )")),(0,i.kt)("div",{parentName:"code",className:"line"},(0,i.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))))}m.isMDXComponent=!0}}]);