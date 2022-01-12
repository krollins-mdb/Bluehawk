"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[648],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},555:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={id:"ActionArgs",title:"Interface: ActionArgs",sidebar_label:"ActionArgs",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"api/interfaces/ActionArgs",id:"api/interfaces/ActionArgs",isDocsHomePage:!1,title:"Interface: ActionArgs",description:"Hierarchy",source:"@site/docs/api/interfaces/ActionArgs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ActionArgs",permalink:"/Bluehawk/api/interfaces/ActionArgs",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ActionArgs",title:"Interface: ActionArgs",sidebar_label:"ActionArgs",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"RootParser",permalink:"/Bluehawk/api/classes/RootParser"},next:{title:"AnyCommand",permalink:"/Bluehawk/api/interfaces/AnyCommand"}},p=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"waitForListeners",id:"waitforlisteners",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],u={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ActionArgs"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"CheckArgs"},(0,a.kt)("inlineCode",{parentName:"a"},"CheckArgs"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"CopyArgs"},(0,a.kt)("inlineCode",{parentName:"a"},"CopyArgs"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"ListStatesArgs"},(0,a.kt)("inlineCode",{parentName:"a"},"ListStatesArgs"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"ListCommandArgs"},(0,a.kt)("inlineCode",{parentName:"a"},"ListCommandArgs"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"SnipArgs"},(0,a.kt)("inlineCode",{parentName:"a"},"SnipArgs"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"waitforlisteners"},"waitForListeners"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"waitForListeners"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mongodb-university/Bluehawk/blob/4be53da/src/bluehawk/actions/ActionArgs.ts#L2"},"src/bluehawk/actions/ActionArgs.ts:2")))}f.isMDXComponent=!0}}]);