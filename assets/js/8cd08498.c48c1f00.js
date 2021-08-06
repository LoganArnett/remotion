(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5677],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return d},kt:function(){return N}});var n=t(2784);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=i(t),N=s,k=m["".concat(o,".").concat(N)]||m[N]||c[N]||l;return t?n.createElement(k,r(r({ref:a},d),{},{components:t})):n.createElement(k,r({ref:a},d))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=m;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var i=2;i<l;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2850:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return d},default:function(){return m}});var n=t(2122),s=t(9756),l=(t(2784),t(3905)),r=["components"],p={id:"delay-render",title:"delayRender() and continueRender()",sidebar_label:"delayRender()"},o=void 0,i={unversionedId:"delay-render",id:"delay-render",isDocsHomePage:!1,title:"delayRender() and continueRender()",description:"By calling delayRender, you are signaling that a frame should not be immediately rendered and instead should wait on an asynchronous task to complete.",source:"@site/docs/delay-render.md",sourceDirName:".",slug:"/delay-render",permalink:"/docs/delay-render",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/delay-render.md",version:"current",frontMatter:{id:"delay-render",title:"delayRender() and continueRender()",sidebar_label:"delayRender()"},sidebar:"someSidebar",previous:{title:"continueRender()",permalink:"/docs/continue-render"},next:{title:"interpolate()",permalink:"/docs/interpolate"}},d=[{value:"Useful to know",id:"useful-to-know",children:[]},{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:d};function m(e){var a=e.components,t=(0,s.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"By calling ",(0,l.kt)("inlineCode",{parentName:"p"},"delayRender"),", you are signaling that a frame should not be immediately rendered and instead should wait on an asynchronous task to complete."),(0,l.kt)("p",null,"This method is useful if you for example want to call an API to fetch data before you render."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"delayRender")," returns an identifier. Once you have fetched data or finished the asynchronous task, you should call ",(0,l.kt)("inlineCode",{parentName:"p"},"continueRender(identifier)")," to let Remotion know that you are now ready to render."),(0,l.kt)("h2",{id:"useful-to-know"},"Useful to know"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You need to call ",(0,l.kt)("inlineCode",{parentName:"p"},"continueRender()")," within 30 seconds of page load. This is the default timeout of puppeteer and it will throw if you miss to call ",(0,l.kt)("inlineCode",{parentName:"p"},"continueRender()"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For every frame that is rendered, the whole page is reloaded, so the whole lifecycle of ",(0,l.kt)("inlineCode",{parentName:"p"},"delayRender")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"continueRender")," happens on every frame. If you are doing an API request, you can speed up the render and avoid rate limits by caching the request, for example by storing the data in ",(0,l.kt)("inlineCode",{parentName:"p"},"localStorage"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You can call ",(0,l.kt)("inlineCode",{parentName:"p"},"delayRender")," multiple times. The render will be blocked for as long as at least one blocking handle exists and that has not been cleared by ",(0,l.kt)("inlineCode",{parentName:"p"},"continueRender()"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You should put ",(0,l.kt)("inlineCode",{parentName:"p"},"delayRender()")," calls inside your components rather than placing them as a top-level statement, to avoid blocking a render if a different composition is rendered. Also, in the example below the call is wrapped in a ",(0,l.kt)("inlineCode",{parentName:"p"},"useState()")," to avoid creating multiple blocking calls when the component rerenders."))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) function useEffect(effect: EffectCallback, deps?: DependencyList | undefined): void\nimport useEffect"},"useEffect"),", ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] (+1 overload)\nimport useState"},"useState"),"} "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'react'")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) const continueRender: (handle: number) => void\nimport continueRender"},"continueRender"),", ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) const delayRender: () => number\nimport delayRender"},"delayRender"),"} "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'remotion'")),(0,l.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},", "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const setData: React.Dispatch<React.SetStateAction<null>>"},"setData")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"] "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) useState<null>(initialState: (() => null) | null): [null, React.Dispatch<React.SetStateAction<null>>] (+1 overload)\nimport useState"},"useState")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"] "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) useState<number>(initialState: number | (() => number)): [number, React.Dispatch<React.SetStateAction<number>>] (+1 overload)\nimport useState"},"useState")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(() "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) delayRender(): number\nimport delayRender"},"delayRender")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"())")),(0,l.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"async"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"function fetch(input: RequestInfo, init?: RequestInit | undefined): Promise<Response>"},"fetch")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'http://example.com/api'"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const json: any"},"json")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response")),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(method) Body.json(): Promise<any>"},"json")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"()")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const setData: (value: React.SetStateAction<null>) => void"},"setData")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const json: any"},"json"),")")),(0,l.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) continueRender(handle: number): void\nimport continueRender"},"continueRender")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle"),")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,l.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void\nimport useEffect"},"useEffect")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(() "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"()")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }, [])")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      {",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"?"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">This video has data from an API! {"),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"var JSON: JSON"},"JSON")),(0,l.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const data: null"},"data"),")}</"),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      ) "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  )")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) function useEffect(effect: EffectCallback, deps?: DependencyList | undefined): void\nimport useEffect"},"useEffect"),", ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] (+1 overload)\nimport useState"},"useState"),"} "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'react'")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) const continueRender: (handle: number) => void\nimport continueRender"},"continueRender"),", ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) const delayRender: () => number\nimport delayRender"},"delayRender"),"} "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'remotion'")),(0,l.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},", "),(0,l.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const setData: React.Dispatch<React.SetStateAction<null>>"},"setData")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"] "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) useState<null>(initialState: (() => null) | null): [null, React.Dispatch<React.SetStateAction<null>>] (+1 overload)\nimport useState"},"useState"),"("),(0,l.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"null"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"] "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) useState<number>(initialState: number | (() => number)): [number, React.Dispatch<React.SetStateAction<number>>] (+1 overload)\nimport useState"},"useState"),"(() "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) delayRender(): number\nimport delayRender"},"delayRender"),"())")),(0,l.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData")," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"async"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"function fetch(input: RequestInfo, init?: RequestInit | undefined): Promise<Response>"},"fetch"),"("),(0,l.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'http://example.com/api'"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const json: any"},"json")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"const response: Response"},"response")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},".",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(method) Body.json(): Promise<any>"},"json"),"()")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const setData: (value: React.SetStateAction<null>) => void"},"setData"),"(",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const json: any"},"json"),")")),(0,l.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) continueRender(handle: number): void\nimport continueRender"},"continueRender"),"(",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const handle: number"},"handle"),")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  }")),(0,l.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void\nimport useEffect"},"useEffect"),"(() "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const fetchData: () => Promise<void>"},"fetchData"),"()")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  }, [])")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    <"),(0,l.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"      {",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const data: null"},"data")," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},"?"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        <"),(0,l.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},">This video has data from an API! {"),(0,l.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"var JSON: JSON"},"JSON")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},".",(0,l.kt)("data-lsp",{parentName:"span",lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify"),"(",(0,l.kt)("data-lsp",{parentName:"span",lsp:"const data: null"},"data"),")}</"),(0,l.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"      ) "),(0,l.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"null"),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    </"),(0,l.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,l.kt)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  )")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/data-fetching"},"Data fetching"))))}m.isMDXComponent=!0}}]);