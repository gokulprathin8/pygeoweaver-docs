"use strict";(self.webpackChunkpygeoweaver=self.webpackChunkpygeoweaver||[]).push([[1781],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},6021:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={title:"Retrieving Detailed Information"},i=void 0,s={unversionedId:"user-guide/detailed-info",id:"user-guide/detailed-info",title:"Retrieving Detailed Information",description:"The Pygeoweaver package provides convenient functions to retrieve detailed information about workflows, processes, and hosts. These functions allow you to obtain specific details and configurations related to these components. Let's explore how to use them effectively:",source:"@site/docs/user-guide/detailed-info.md",sourceDirName:"user-guide",slug:"/user-guide/detailed-info",permalink:"/docs/user-guide/detailed-info",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/detailed-info.md",tags:[],version:"current",frontMatter:{title:"Retrieving Detailed Information"},sidebar:"documentationSidebar",previous:{title:"Creating Processes and Workflows",permalink:"/docs/user-guide/process-workflow"},next:{title:"Exporting Workflows",permalink:"/docs/user-guide/export-workflow"}},l={},c=[{value:"Detail Workflow",id:"detail-workflow",level:3},{value:"Detail Process",id:"detail-process",level:3},{value:"Detail Host",id:"detail-host",level:3},{value:"Get Process Code",id:"get-process-code",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Pygeoweaver package provides convenient functions to retrieve detailed information about workflows, processes, and hosts. These functions allow you to obtain specific details and configurations related to these components. Let's explore how to use them effectively:"),(0,n.kt)("h3",{id:"detail-workflow"},"Detail Workflow"),(0,n.kt)("p",null,"To retrieve detailed information about a workflow, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"detail_workflow")," function. Simply provide the workflow ID as a parameter. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'detail_workflow("workflow123")\n')),(0,n.kt)("p",null,"This function will display comprehensive information about the specified workflow."),(0,n.kt)("h3",{id:"detail-process"},"Detail Process"),(0,n.kt)("p",null,"If you need to gather detailed information about a process, the ",(0,n.kt)("inlineCode",{parentName:"p"},"detail_process")," function is what you need. Pass the process ID as a parameter to retrieve the details. Take a look at this example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'detail_process("process123")\n')),(0,n.kt)("p",null,"The function will retrieve and display extensive information about the specified process."),(0,n.kt)("h3",{id:"detail-host"},"Detail Host"),(0,n.kt)("p",null,"To obtain detailed information about a host, you can utilize the ",(0,n.kt)("inlineCode",{parentName:"p"},"detail_host")," function. Provide the host ID as a parameter to retrieve the information. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'detail_host("host123")\n')),(0,n.kt)("p",null,"The function will retrieve and display detailed information about the specified host."),(0,n.kt)("h3",{id:"get-process-code"},"Get Process Code"),(0,n.kt)("p",null,"If you want to retrieve the code of a specific process, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"get_process_code")," function. Provide the process ID as a parameter, and the function will return the code of the process. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'code = get_process_code("process123")\nprint(code)\n')),(0,n.kt)("p",null,"This function will retrieve the code of the specified process and print it for you."),(0,n.kt)("p",null,"These functions make it easy to retrieve detailed information about workflows, processes, and hosts in Pygeoweaver. Use them to enhance your understanding and management of geospatial processing tasks within Pygeoweaver."))}u.isMDXComponent=!0}}]);