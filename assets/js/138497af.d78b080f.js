"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[3159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||c;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const c={},a="mbrApp.loadRecentProject",i={unversionedId:"mbrApp/loadRecentProject",id:"mbrApp/loadRecentProject",title:"mbrApp.loadRecentProject",description:"La fonction loadRecentProject est une fonction qui charge le projet r\xe9cent, ou, en cas d'\xe9chec, cr\xe9e un nouveau projet. Voici une explication plus d\xe9taill\xe9e de chaque partie de cette fonction :",source:"@site/docs/mbrApp/loadRecentProject.md",sourceDirName:"mbrApp",slug:"/mbrApp/loadRecentProject",permalink:"/docs/mbrApp/loadRecentProject",draft:!1,tags:[],version:"current",lastUpdatedAt:1687724591,formattedLastUpdatedAt:"Jun 25, 2023",frontMatter:{},sidebar:"docSidebar",previous:{title:"mbrApp.createProject",permalink:"/docs/mbrApp/createProject"},next:{title:"mbrApp.regExtension",permalink:"/docs/mbrApp/regExtension"}},l={},p=[{value:"Exemple",id:"exemple",level:2},{value:"En r\xe9sum\xe9",id:"en-r\xe9sum\xe9",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mbrapploadrecentproject"},"mbrApp.loadRecentProject"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function(a) {\n  function b(b) {\n    a && a()\n  }\n  var c = this;\n  c.getRecentProject(function(a, d) {\n    d ? (c.fire("loadRecentProject"), c.loadProject(d, a, {\n      noSave: !0,\n      onError: function() {\n        c.createProject("My Site", 0, 0, b)\n      },\n      onDone: function() {\n        c.fire("loadedRecentProject", d);\n        b()\n      }\n    })) : c.createProject("My Site", 0, 0, b)\n  })\n}\n')),(0,o.kt)("p",null,"La fonction ",(0,o.kt)("inlineCode",{parentName:"p"},"loadRecentProject")," est une fonction qui charge le projet r\xe9cent, ou, en cas d'\xe9chec, cr\xe9e un nouveau projet. Voici une explication plus d\xe9taill\xe9e de chaque partie de cette fonction :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'function(a){function b(b){a&&a()}: Ceci d\xe9finit une fonction anonyme qui prend une fonction a en argument, puis d\xe9finit une fonction interne b. Cette fonction b appelle a seulement si a est d\xe9fini.\n\nvar c=this: D\xe9finit une variable c qui fait r\xe9f\xe9rence \xe0 l\'objet courant (this).\n\nc.getRecentProject(function(a,d): Ceci appelle la m\xe9thode getRecentProject sur l\'objet c (qui est l\'objet courant), et lui passe une fonction anonyme qui prend deux arguments : a et d.\n\nd?(c.fire("loadRecentProject"),c.loadProject(d,a,{noSave:!0,...}): Si d est vrai (donc probablement si un projet r\xe9cent a \xe9t\xe9 trouv\xe9), alors cette fonction lance un \xe9v\xe9nement "loadRecentProject" et charge le projet avec certaines options.\n\n:c.createProject("My Site",0,0,b)})}: Si d est faux (donc probablement si aucun projet r\xe9cent n\'a \xe9t\xe9 trouv\xe9), cette fonction cr\xe9e un nouveau projet appel\xe9 "My Site". Il semble que 0,0,b sont des param\xe8tres suppl\xe9mentaires qui pourraient repr\xe9senter des configurations du projet ou des callbacks.\n')),(0,o.kt)("p",null,"Il est important de noter que la compr\xe9hension pr\xe9cise de cette fonction pourrait d\xe9pendre du contexte plus large du code dans lequel elle est ins\xe9r\xe9e, car Mobirise est un outil de construction de site web et cette fonction fait probablement partie d'un ensemble plus large de fonctions et de m\xe9thodes qui interagissent entre elles."),(0,o.kt)("h2",{id:"exemple"},"Exemple"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'mbrApp.loadRecentProject("Your message");\n')),(0,o.kt)("h2",{id:"en-r\xe9sum\xe9"},"En r\xe9sum\xe9"),(0,o.kt)("p",null,"Cette fonction ",(0,o.kt)("inlineCode",{parentName:"p"},"mbrApp.loadRecentProject")," cr\xe9e une bo\xeete de dialogue d'alerte contenant le texte pass\xe9 en argument, et affiche cette bo\xeete de dialogue \xe0 l'utilisateur. Lorsque l'utilisateur appuie sur le bouton \"OK\" de la bo\xeete de dialogue, la fonction ",(0,o.kt)("inlineCode",{parentName:"p"},"success")," est appel\xe9e, mais elle ne fait rien."))}d.isMDXComponent=!0}}]);