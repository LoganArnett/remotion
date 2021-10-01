(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6658],{3905:function(e,a,t){"use strict";t.r(a),t.d(a,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return v},useMDXComponents:function(){return i},withMDXComponents:function(){return p}});var n=t(2784);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),p=function(e){return function(a){var t=i(a.components);return n.createElement(e,o({},a,{components:t}))}},i=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(m.Provider,{value:a},e.children)},x={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=i(t),c=r,N=p["".concat(s,".").concat(c)]||p[c]||x[c]||o;return t?n.createElement(N,d(d({ref:a},m),{},{components:t})):n.createElement(N,d({ref:a},m))}));function v(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=N;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,s[1]=d;for(var m=2;m<o;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},95530:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var n=t(22122),r=t(19756),o=(t(2784),t(3905)),s=["components"],d={id:"use-video-texture",title:"useVideoTexture()"},l=void 0,m={unversionedId:"use-video-texture",id:"use-video-texture",isDocsHomePage:!1,title:"useVideoTexture()",description:"Allows you to use a video in React Three Fiber that is synchronized with Remotion's useCurrentFrame().",source:"@site/docs/use-video-texture.md",sourceDirName:".",slug:"/use-video-texture",permalink:"/docs/use-video-texture",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/use-video-texture.md",tags:[],version:"current",frontMatter:{id:"use-video-texture",title:"useVideoTexture()"},sidebar:"someSidebar",previous:{title:"<ThreeCanvas />",permalink:"/docs/three-canvas"},next:{title:"getCompositions()",permalink:"/docs/get-compositions"}},p=[{value:"See also",id:"see-also",children:[]}],i={toc:p};function c(e){var a=e.components,t=(0,r.default)(e,s);return(0,o.mdx)("wrapper",(0,n.default)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Allows you to use a video in React Three Fiber that is synchronized with Remotion's ",(0,o.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame()"),"."),(0,o.mdx)("p",null,"To use a video in a Three.JS context, you first have to render it and assign it a ref. If you only want to use it in a React Three Fiber Scene, you can make it invisible by adding a ",(0,o.mdx)("inlineCode",{parentName:"p"},'{position: "absolute", opacity: 0}')," style."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) function useRef<T>(initialValue: T): MutableRefObject<T> (+2 overloads)\nimport useRef"},"useRef"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'react'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Video: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainVideoProps, "key" | ... 268 more ... | keyof RemotionMainVideoProps> & React.RefAttributes<...>>\nimport Video'},"Video"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'remotion'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport src'},"src")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'./vid.mp4'")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoRef: React.MutableRefObject<HTMLVideoElement | null>"},"videoRef")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useRef<HTMLVideoElement | null>(initialValue: HTMLVideoElement | null): React.MutableRefObject<HTMLVideoElement | null> (+2 overloads)\nimport useRef"},"useRef")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"interface HTMLVideoElement"},"HTMLVideoElement")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">("),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Video: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainVideoProps, "key" | ... 268 more ... | keyof RemotionMainVideoProps> & React.RefAttributes<...>>\nimport Video'},"Video"))),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.RefAttributes<HTMLVideoElement>.ref?: React.Ref<HTMLVideoElement> | undefined"},"ref")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoRef: React.MutableRefObject<HTMLVideoElement | null>"},"videoRef"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src?: string | undefined"},"src")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport src'},"src"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: React.CSSProperties | undefined"},"style")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) StandardLonghandProperties<string | number, string & {}>.position?: Property.Position | undefined"},"position")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'absolute'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},", ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) StandardLonghandProperties<string | number, string & {}>.opacity?: Property.Opacity | undefined"},"opacity")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  )")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) function useRef<T>(initialValue: T): MutableRefObject<T> (+2 overloads)\nimport useRef"},"useRef"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'react'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Video: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainVideoProps, "key" | ... 268 more ... | keyof RemotionMainVideoProps> & React.RefAttributes<...>>\nimport Video'},"Video"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'remotion'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport src'},"src")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./vid.mp4'")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoRef: React.MutableRefObject<HTMLVideoElement | null>"},"videoRef")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useRef<HTMLVideoElement | null>(initialValue: HTMLVideoElement | null): React.MutableRefObject<HTMLVideoElement | null> (+2 overloads)\nimport useRef"},"useRef"),"<",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"interface HTMLVideoElement"},"HTMLVideoElement")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"|"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"null"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">("),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"null"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},")")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Video: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainVideoProps, "key" | ... 268 more ... | keyof RemotionMainVideoProps> & React.RefAttributes<...>>\nimport Video'},"Video"))),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.RefAttributes<HTMLVideoElement>.ref?: React.Ref<HTMLVideoElement> | undefined"},"ref")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoRef: React.MutableRefObject<HTMLVideoElement | null>"},"videoRef"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src?: string | undefined"},"src")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport src'},"src"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: React.CSSProperties | undefined"},"style")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) StandardLonghandProperties<string | number, string & {}>.position?: Property.Position | undefined"},"position")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'absolute'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},", ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) StandardLonghandProperties<string | number, string & {}>.opacity?: Property.Opacity | undefined"},"opacity")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"0"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  )")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,o.mdx)("p",null,"To convert the video to a video texture, place the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useVideoTexture()")," hook in the same component."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const useVideoTexture: (videoRef: React.RefObject<HTMLVideoElement>) => VideoTexture | null\nimport useVideoTexture"},"useVideoTexture"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'@remotion/three'")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// ...")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const texture: VideoTexture | null"},"texture")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useVideoTexture(videoRef: React.RefObject<HTMLVideoElement>): VideoTexture | null\nimport useVideoTexture"},"useVideoTexture")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoRef: React.MutableRefObject<HTMLVideoElement | null>"},"videoRef"),")"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const useVideoTexture: (videoRef: React.RefObject<HTMLVideoElement>) => VideoTexture | null\nimport useVideoTexture"},"useVideoTexture"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'@remotion/three'")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// ...")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const texture: VideoTexture | null"},"texture")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useVideoTexture(videoRef: React.RefObject<HTMLVideoElement>): VideoTexture | null\nimport useVideoTexture"},"useVideoTexture"),"(",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoRef: React.MutableRefObject<HTMLVideoElement | null>"},"videoRef"),")")))))),(0,o.mdx)("p",null,"The return type of it is a ",(0,o.mdx)("inlineCode",{parentName:"p"},"THREE.VideoTexture | null")," which you can assign as a ",(0,o.mdx)("inlineCode",{parentName:"p"},"map")," to for example ",(0,o.mdx)("inlineCode",{parentName:"p"},"meshBasicMaterial"),". We recommend to only render the material when the texture is not ",(0,o.mdx)("inlineCode",{parentName:"p"},"null")," to prevent bugs."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoTexture: VideoTexture | null"},"videoTexture")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"?"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.meshBasicMaterial: MeshBasicMaterialProps"},"meshBasicMaterial")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) map: VideoTexture"},"map")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoTexture: VideoTexture"},"videoTexture"),"} />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoTexture: VideoTexture | null"},"videoTexture")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"?"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.meshBasicMaterial: MeshBasicMaterialProps"},"meshBasicMaterial")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) map: VideoTexture"},"map")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const videoTexture: VideoTexture"},"videoTexture"),"} />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},") "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"null"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/three-canvas"},(0,o.mdx)("inlineCode",{parentName:"a"},"<ThreeCanvas />")))))}c.isMDXComponent=!0}}]);