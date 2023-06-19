"use strict";(self.webpackChunkpygeoweaver=self.webpackChunkpygeoweaver||[]).push([[7845],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||g[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Retrieving Process Information"},s=void 0,i={unversionedId:"user-guide/process-info",id:"user-guide/process-info",title:"Retrieving Process Information",description:"Pygeoweaver provides several functions to retrieve process information based on different criteria. These functions allow you to search for processes by name, ID, or programming language. Let's explore each function in detail:",source:"@site/docs/user-guide/process-info.md",sourceDirName:"user-guide",slug:"/user-guide/process-info",permalink:"/docs/user-guide/process-info",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/process-info.md",tags:[],version:"current",frontMatter:{title:"Retrieving Process Information"},sidebar:"documentationSidebar",previous:{title:"Exporting Workflows",permalink:"/docs/user-guide/export-workflow"},next:{title:"Getting Help with Commands",permalink:"/docs/user-guide/getting-help"}},c={},l=[{value:"Get Process by Name",id:"get-process-by-name",level:3},{value:"Get Process by ID",id:"get-process-by-id",level:3},{value:"Get Process by Language",id:"get-process-by-language",level:3}],p={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pygeoweaver provides several functions to retrieve process information based on different criteria. These functions allow you to search for processes by name, ID, or programming language. Let's explore each function in detail:"),(0,o.kt)("h3",{id:"get-process-by-name"},"Get Process by Name"),(0,o.kt)("p",null,"To retrieve processes by their names, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_process_by_name")," function. This function takes a process name as input and returns a DataFrame containing matching processes. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'get_process_by_name("my_process")\n')),(0,o.kt)("p",null,'This will fetch all processes with the name "my_process" and display them in a tabular format.'),(0,o.kt)("h3",{id:"get-process-by-id"},"Get Process by ID"),(0,o.kt)("p",null,"If you know the process ID and want to retrieve the corresponding process information, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_process_by_id")," function. Provide the process ID as input, and the function will return a DataFrame with the matching process details. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'get_process_by_id("process123")\n')),(0,o.kt)("p",null,'This will retrieve the process with the ID "process123" and display its information in a tabular format.'),(0,o.kt)("h3",{id:"get-process-by-language"},"Get Process by Language"),(0,o.kt)("p",null,"If you are interested in processes written in a specific programming language, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_process_by_language")," function. Specify the language as input, and the function will return a DataFrame with the matching processes. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'get_process_by_language("Python")\n')),(0,o.kt)("p",null,"This will retrieve all processes written in Python and display their information in a tabular format."),(0,o.kt)("p",null,"Note: The above functions rely on making requests to the Geoweaver API to retrieve process information. Ensure that the Geoweaver server is accessible and running for successful retrieval."),(0,o.kt)("p",null,"By utilizing these process retrieval functions, you can easily obtain relevant information about processes based on their names, IDs, or programming languages."))}g.isMDXComponent=!0}}]);