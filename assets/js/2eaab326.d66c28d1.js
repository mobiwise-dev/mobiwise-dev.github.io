"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[9679],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1,tags:["Bridge"]},o="Bridge.getSettings",l={unversionedId:"Bridge/getSetting",id:"Bridge/getSetting",title:"Bridge.getSettings",description:"Cette fonction r\xe9cup\xe8re les param\xe8tres de configuration de l'application en fonction de la cl\xe9 de configuration sp\xe9cifi\xe9e en param\xe8tre.",source:"@site/docs/Bridge/getSetting.md",sourceDirName:"Bridge",slug:"/Bridge/getSetting",permalink:"/docs/Bridge/getSetting",draft:!1,tags:[{label:"Bridge",permalink:"/docs/tags/bridge"}],version:"current",lastUpdatedAt:1682502564,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Bridge"]},sidebar:"docSidebar",previous:{title:"Bridge.getLocalJSON",permalink:"/docs/Bridge/getLocalJSON"},next:{title:"Bridge.setSettings",permalink:"/docs/Bridge/setSetting"}},c={},p=[{value:"Exemple",id:"exemple",level:2},{value:"En r\xe9sum\xe9",id:"en-r\xe9sum\xe9",level:2}],s={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bridgegetsettings"},"Bridge.getSettings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function(a, b) {\n  if (!a || !b) return !1;\n  a = a.match(/(\\w+\\/)*(\\w+)/i)[0];\n  if ("win32" === process.platform) {\n    var c = a.split("/");\n    let d = c.pop(),\n      e = "\\\\Software\\\\Mobirise.com\\\\Mobirise";\n    c.length && (e += "\\\\");\n    (new x({\n      hive: x.HKCU,\n      key: e + c.join("\\\\")\n    })).get(d, (a, c) => {\n      b(a ? "" : c && c.value || "")\n    })\n  } else c = g(e.dataLocation + "/settings.json"), n.readFile(c, (c, e) => {\n    if (c) b("");\n    else {\n      c = {};\n      try {\n        c = JSON.parse(e.toString())\n      } catch (l) {}\n      e =\n        a.replace(/\\//g, ".");\n      void 0 !== c[e] ? b(c[e]) : b("")\n    }\n  })\n}\n')),(0,a.kt)("p",null,"Cette fonction r\xe9cup\xe8re les param\xe8tres de configuration de l'application en fonction de la cl\xe9 de configuration sp\xe9cifi\xe9e en param\xe8tre."),(0,a.kt)("p",null,"Le code de la fonction v\xe9rifie d'abord que les deux param\xe8tres ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," sont d\xe9finis et non nuls. Le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," est une cha\xeene de caract\xe8res qui repr\xe9sente la cl\xe9 de configuration \xe0 r\xe9cup\xe9rer."),(0,a.kt)("p",null,"Ensuite, la fonction extrait le nom de la cl\xe9 de configuration \xe0 partir de la cha\xeene a en utilisant une expression r\xe9guli\xe8re."),(0,a.kt)("p",null,"Si la plateforme est Windows (",(0,a.kt)("inlineCode",{parentName:"p"},"process.platform")," renvoie ",(0,a.kt)("inlineCode",{parentName:"p"},"win32"),"), la fonction recherche la cl\xe9 de configuration dans le registre de Windows, dans un emplacement sp\xe9cifique \xe0 Mobirise. Si la plateforme n'est pas Windows (macOS, linux), la fonction recherche la cl\xe9 de configuration dans un fichier JSON situ\xe9 dans le dossier de donn\xe9es de l'application."),(0,a.kt)("p",null,"Si la cl\xe9 de configuration est trouv\xe9e, la fonction appelle la fonction de rappel ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," avec la valeur de la cl\xe9 de configuration en tant que param\xe8tre. Si la cl\xe9 de configuration n'est pas trouv\xe9e, la fonction appelle la fonction de rappel ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," avec une cha\xeene vide en tant que param\xe8tre."),(0,a.kt)("h2",{id:"exemple"},"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Bridge.getSettings("language", (setting) => {\n  if (setting === "en") {\n    alert("I speak english.");\n  } else {\n    alert("You can change the interface language.");\n  }\n});\n')),(0,a.kt)("h2",{id:"en-r\xe9sum\xe9"},"En r\xe9sum\xe9"),(0,a.kt)("p",null,"La fonction permet de r\xe9cup\xe9rer les param\xe8tres de configuration de l'application, tels que la langue utilis\xe9e ou l'emplacement de sauvegarde des projets. Elle prend deux arguments : le nom du param\xe8tre \xe0 r\xe9cup\xe9rer et une fonction de rappel qui sera appel\xe9e avec le r\xe9sultat de la r\xe9cup\xe9ration."))}u.isMDXComponent=!0}}]);