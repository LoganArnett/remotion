(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4968],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return d},withMDXComponents:function(){return m}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){return function(n){var t=d(n.components);return r.createElement(e,a({},n,{components:t}))}},d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(t),c=o,f=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function x(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},55276:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(22122),o=t(19756),a=(t(2784),t(3905)),p=["components"],i={title:"getInputProps()",id:"get-input-props"},s={unversionedId:"get-input-props",id:"get-input-props",isDocsHomePage:!1,title:"getInputProps()",description:"Available from v2.0.",source:"@site/docs/get-input-props.md",sourceDirName:".",slug:"/get-input-props",permalink:"/docs/get-input-props",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/get-input-props.md",version:"current",frontMatter:{title:"getInputProps()",id:"get-input-props"},sidebar:"someSidebar",previous:{title:"interpolateColors()",permalink:"/docs/interpolate-colors"},next:{title:"measureSpring()",permalink:"/docs/measure-spring"}},l=[{value:"API",id:"api",children:[]},{value:"See also",id:"see-also",children:[]}],m={toc:l};function d(e){var n=e.components,t=(0,o.default)(e,p);return(0,a.mdx)("wrapper",(0,r.default)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Available from v2.0"),"."),(0,a.mdx)("p",null,"Using this method, you can retrieve inputs that you pass in from the command line using ",(0,a.mdx)("a",{parentName:"p",href:"/docs/cli"},(0,a.mdx)("inlineCode",{parentName:"a"},"--props")),", or the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/ssr#render-a-video-programmatically"},(0,a.mdx)("inlineCode",{parentName:"a"},"inputProps"))," parameter if you are using the Node.JS API."),(0,a.mdx)("p",null,"You should whenever possible prefer to retrieve props directly in your composition, like you would read props from a component if you were to code a React application, but this method is useful if you want to retrieve the input props outside of a composition."),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"This method is not available when inside a Remotion Player. Instead, get the props as React props from the component you passed as the ",(0,a.mdx)("inlineCode",{parentName:"p"},"component")," prop to the player."))),(0,a.mdx)("h2",{id:"api"},"API"),(0,a.mdx)("p",null,"Pass in a ",(0,a.mdx)("a",{parentName:"p",href:"/docs/cli"},"parseable")," JSON representation using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"--props")," flag to either ",(0,a.mdx)("inlineCode",{parentName:"p"},"remotion preview")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"remotion render"),":"),(0,a.mdx)("undefined",null,(0,a.mdx)("pre",{className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,a.mdx)("div",{parentName:"pre",className:"code-container"},(0,a.mdx)("code",{parentName:"div"},'npx remotion render --props=\'{"hello": "world"}\' src/index.tsx my-composition out.mp4'))),(0,a.mdx)("pre",{className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,a.mdx)("div",{parentName:"pre",className:"code-container"},(0,a.mdx)("code",{parentName:"div"},'npx remotion render --props=\'{"hello": "world"}\' src/index.tsx my-composition out.mp4')))),(0,a.mdx)("p",null,"You can then access the props in JavaScript:"),(0,a.mdx)("undefined",null,(0,a.mdx)("pre",{className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,a.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,a.mdx)("div",{parentName:"pre",className:"code-container"},(0,a.mdx)("code",{parentName:"div"},(0,a.mdx)("div",{parentName:"code",className:"line"},(0,a.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,a.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {"),(0,a.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,a.mdx)("data-lsp",{parentName:"span",lsp:'const hello: "world"'},"hello")),(0,a.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,a.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,a.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,a.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,a.mdx)("data-lsp",{parentName:"span",lsp:'const getInputProps: () => {\n    readonly hello: "world";\n}'},"getInputProps")),(0,a.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"() "),(0,a.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},'// "world"'))))),(0,a.mdx)("pre",{className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,a.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,a.mdx)("div",{parentName:"pre",className:"code-container"},(0,a.mdx)("code",{parentName:"div"},(0,a.mdx)("div",{parentName:"code",className:"line"},(0,a.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,a.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {"),(0,a.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,a.mdx)("data-lsp",{parentName:"span",lsp:'const hello: "world"'},"hello")),(0,a.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"} "),(0,a.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,a.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,a.mdx)("data-lsp",{parentName:"span",lsp:'const getInputProps: () => {\n    readonly hello: "world";\n}'},"getInputProps"),"() "),(0,a.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},'// "world"')))))),(0,a.mdx)("p",null,"In this example, the props also get passed to the component of the composition with the id ",(0,a.mdx)("inlineCode",{parentName:"p"},"my-composition"),"."),(0,a.mdx)("h2",{id:"see-also"},"See also"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"dynamic-metadata"},"Dynamic duration, FPS & dimensions"))))}d.isMDXComponent=!0}}]);