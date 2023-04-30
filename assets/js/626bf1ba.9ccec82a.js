"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[7128],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:1,tags:["Bridge"]},a="Bridge.getInfoLocal",l={unversionedId:"Bridge/getInfoLocal",id:"Bridge/getInfoLocal",title:"Bridge.getInfoLocal",description:"La fonction permet d'obtenir des informations sur un fichier ou un dossier local en sp\xe9cifiant son chemin. La fonction prend deux arguments :",source:"@site/docs/Bridge/getInfoLocal.md",sourceDirName:"Bridge",slug:"/Bridge/getInfoLocal",permalink:"/docs/Bridge/getInfoLocal",draft:!1,tags:[{label:"Bridge",permalink:"/docs/tags/bridge"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Bridge"]},sidebar:"docSidebar",previous:{title:"Bridge.encode",permalink:"/docs/Bridge/encode"},next:{title:"Bridge.getLocalJSON",permalink:"/docs/Bridge/getLocalJSON"}},s={},c=[{value:"Exemple",id:"exemple",level:2},{value:"En r\xe9sum\xe9",id:"en-r\xe9sum\xe9",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bridgegetinfolocal"},"Bridge.getInfoLocal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function(a, b) {\n  var c = {};\n  b = b || function() {};\n  a = k.normalize(g(a));\n  n.lstat(a, (a, e) => {\n    a || !e ? b() : (c.isDir = e.isDirectory(), c.size = e.size, c.modified = e.mtime, c.mode = (e.mode & 1 ? "e" : "") + (e.mode & 2 ? "w" : "") + (e.mode & 4 ? "r" : ""), b(c))\n  })\n}\n')),(0,i.kt)("p",null,"La fonction permet d'obtenir des informations sur un fichier ou un dossier local en sp\xe9cifiant son chemin. La fonction prend deux arguments :"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"a")," : le chemin du fichier ou du dossier local",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"b")," : une fonction de rappel qui sera appel\xe9e une fois que les informations sont r\xe9cup\xe9r\xe9es."),(0,i.kt)("p",null,"La fonction commence par normaliser le chemin d'acc\xe8s au fichier ou dossier avec la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"normalize")," pour s'assurer qu'il est dans un format standardis\xe9. Elle utilise ensuite la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"lstat")," pour obtenir les informations du fichier ou du dossier. Les informations sont stock\xe9es dans un objet ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," qui contient les propri\xe9t\xe9s suivantes :"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isDir")," : un bool\xe9en qui indique si le chemin d'acc\xe8s correspond \xe0 un dossier ou non.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"size")," : la taille en octets du fichier.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"modified")," : la date de derni\xe8re modification du fichier.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," : les permissions du fichier (en lecture, \xe9criture, ex\xe9cution)."),(0,i.kt)("p",null,"Si aucune erreur ne se produit lors de l'appel \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"lstat"),", la fonction de rappel ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," est appel\xe9e avec l'objet ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," contenant les informations r\xe9cup\xe9r\xe9es. Si une erreur se produit, la fonction de rappel est \xe9galement appel\xe9e, mais sans arguments."),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Bridge.getInfoLocal("/path/to/file", function (info) {\n  alert(info);\n});\n')),(0,i.kt)("h2",{id:"en-r\xe9sum\xe9"},"En r\xe9sum\xe9"),(0,i.kt)("p",null,"La fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"getInfoLocal")," renvoie des informations (taille, date de derni\xe8re modification, mode, etc.) sur un fichier ou un dossier local et utilise une fonction de rappel pour retourner les informations r\xe9cup\xe9r\xe9es ou une erreur si elle se produit."))}d.isMDXComponent=!0}}]);