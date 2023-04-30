"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[3949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,tags:["Bridge"]},o="Bridge.setSettings",l={unversionedId:"Bridge/setSetting",id:"Bridge/setSetting",title:"Bridge.setSettings",description:"Cette fonction est utilis\xe9e pour d\xe9finir les param\xe8tres de l'application. Elle prend trois arguments : a, b et c.",source:"@site/docs/Bridge/setSetting.md",sourceDirName:"Bridge",slug:"/Bridge/setSetting",permalink:"/docs/Bridge/setSetting",draft:!1,tags:[{label:"Bridge",permalink:"/docs/tags/bridge"}],version:"current",lastUpdatedAt:1682502564,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Bridge"]},sidebar:"docSidebar",previous:{title:"Bridge.getSettings",permalink:"/docs/Bridge/getSetting"}},s={},c=[{value:"Exemple",id:"exemple",level:2},{value:"En r\xe9sum\xe9",id:"en-r\xe9sum\xe9",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bridgesetsettings"},"Bridge.setSettings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function(a, b, c) {\n  if (!a) return !1;\n  a = a.match(/(\\w+\\/)*(\\w+)/i)[0];\n  if ("win32" === process.platform) {\n    var d = a.split("/");\n    let e = d.pop(),\n      f = "\\\\Software\\\\Mobirise.com\\\\Mobirise";\n    d.length && (f += "\\\\");\n    d = new x({\n      hive: x.HKCU,\n      key: f + d.join("\\\\")\n    });\n    d.create(a => {\n      a && c && c(!1)\n    });\n    d.set(e, "REG_SZ", b.toString(), a => {\n      c && c(!a)\n    })\n  } else {\n    var f = function(f) {\n      f = f ? JSON.parse(f) : {};\n      let g = a.replace(/\\//g, ".");\n      f[g] = b.toString();\n      let l = JSON.stringify(f, null, 4);\n      e._createDir(e.dataLocation, a => {\n        a || n.writeFile(d, l, function(a) {\n          e._unlockFile(d);\n          c && c(!a)\n        })\n      })\n    };\n    let d = g(e.dataLocation + "/settings.json");\n    e._lockFile(d,\n      function() {\n        n.access(d, function(a) {\n          a ? f() : n.readFile(d, (a, b) => {\n            a ? (e._unlockFile(d), c && c(!1)) : f(b)\n          })\n        })\n      })\n  }\n}\n')),(0,i.kt)("p",null,"Cette fonction est utilis\xe9e pour d\xe9finir les ",(0,i.kt)("strong",{parentName:"p"},"param\xe8tres de l'application"),". Elle prend trois arguments : ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,i.kt)("p",null,"Le premier argument ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," est une cha\xeene de caract\xe8res qui repr\xe9sente le nom de la cl\xe9 de registre ou le chemin vers le fichier JSON qui contiendra les param\xe8tres de l'application."),(0,i.kt)("p",null,"Le deuxi\xe8me argument ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," est la valeur \xe0 stocker dans la cl\xe9 de registre ou le fichier JSON."),(0,i.kt)("p",null,"Le troisi\xe8me argument ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," est une fonction de rappel ",(0,i.kt)("strong",{parentName:"p"},"facultative")," qui est appel\xe9e une fois que la valeur a \xe9t\xe9 stock\xe9e avec succ\xe8s dans la cl\xe9 de registre ou le fichier JSON."),(0,i.kt)("p",null,"La fonction commence par v\xe9rifier que le premier argument ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," n'est pas ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". Ensuite, elle utilise une expression r\xe9guli\xe8re pour extraire le nom de la cl\xe9 de registre ou le chemin vers le fichier JSON. Si le syst\xe8me d'exploitation est Windows, la fonction utilise le module ",(0,i.kt)("inlineCode",{parentName:"p"},"Registry")," de ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," pour acc\xe9der \xe0 la cl\xe9 de registre et stocker la valeur. Sinon, elle stocke la valeur dans le fichier JSON."),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Bridge.setSettings("appSettings/darkMode", "true", (success) => {\n  if (success) {\n    alert("Dark mode is on.");\n  } else {\n    alert("Dark mode is off.");\n  }\n});\n')),(0,i.kt)("h2",{id:"en-r\xe9sum\xe9"},"En r\xe9sum\xe9"),(0,i.kt)("p",null,"Cette fonction est utilis\xe9e pour stocker des ",(0,i.kt)("strong",{parentName:"p"},"param\xe8tres d'application")," tels que les pr\xe9f\xe9rences de l'utilisateur et les informations d'identification dans la cl\xe9 de registre ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/fr-fr/windows"},"Windows")," ou le fichier JSON si Mac ou ."))}u.isMDXComponent=!0}}]);