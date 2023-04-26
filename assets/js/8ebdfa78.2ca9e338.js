"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[7093],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:8},a="defineM",l={unversionedId:"defineM",id:"defineM",title:"defineM",description:"Cette fonction est une impl\xe9mentation simplifi\xe9e d'un syst\xe8me de modules en JavaScript.",source:"@site/docs/defineM.md",sourceDirName:".",slug:"/defineM",permalink:"/docs/defineM",draft:!1,tags:[],version:"current",lastUpdatedAt:1682502564,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docSidebar",previous:{title:"Bridge.setSettings",permalink:"/docs/Bridge/setSetting"},next:{title:"What is Mobirise ?",permalink:"/docs/Pour Commencer/intro"}},s={},p=[{value:"Exemple",id:"exemple",level:2},{value:"En r\xe9sum\xe9",id:"en-r\xe9sum\xe9",level:2}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"definem"},"defineM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function(b, c, h) {\n  for (var g = {}, d = 0; 3 > d; d++) "string" == typeof arguments[d] ? g.name = arguments[d] : "function" == typeof arguments[d] ? g.func = arguments[d] : "object" == typeof arguments[d] && arguments[d] instanceof Array && (g.deps = arguments[d]);\n  if (g.func) {\n    d = document.getElementsByTagName("script");\n    d = (d = d[d.length - 1]) && d.src || "";\n    var f = /^([^?]*)\\/[^?]*/.exec(window.location.href)[1] + "/";\n    d.startsWith(f) && (d = d.replace(f, ""));\n    g.path = d;\n    g.name = g.name || g.path.replace(/\\.js$/, "");\n    e.push(g);\n    a();\n    return g\n  }\n  console.error("Error: no function while module define", arguments)\n}\n')),(0,i.kt)("p",null,"Cette fonction est une impl\xe9mentation simplifi\xe9e d'un syst\xe8me de modules en JavaScript."),(0,i.kt)("p",null,"La fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"defineM")," prend trois arguments (",(0,i.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"h"),") qui sont tous facultatifs et peuvent \xeatre de diff\xe9rents types :"),(0,i.kt)("p",null,"Si l'argument est une cha\xeene de caract\xe8res, il est consid\xe9r\xe9 comme le nom du module.",(0,i.kt)("br",null),"\nSi l'argument est une fonction, il est consid\xe9r\xe9 comme le corps du module.",(0,i.kt)("br",null),"\nSi l'argument est un tableau, il est consid\xe9r\xe9 comme la liste des d\xe9pendances du module."),(0,i.kt)("p",null,"La fonction cr\xe9e un objet ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," stocke les informations fournies sous forme d'arguments. Si une fonction est fournie comme argument, elle est stock\xe9e dans la propri\xe9t\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"func")," de l'objet ",(0,i.kt)("inlineCode",{parentName:"p"},"g"),". Si un nom est fourni comme argument, il est stock\xe9 dans la propri\xe9t\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," de l'objet ",(0,i.kt)("inlineCode",{parentName:"p"},"g"),". Si une liste de d\xe9pendances est fournie, elle est stock\xe9e dans la propri\xe9t\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"deps")," de l'objet ",(0,i.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,i.kt)("p",null,"La fonction r\xe9cup\xe8re \xe9galement le chemin du script actuel (\xe0 partir des balises ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," dans le document HTML) et stocke le chemin dans la propri\xe9t\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," de l'objet ",(0,i.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,i.kt)("p",null,"Enfin, la fonction ajoute l'objet ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," \xe0 un tableau ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," qui contient tous les modules d\xe9finis jusqu'\xe0 pr\xe9sent, puis elle appelle la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," (qui n'est pas d\xe9finie dans le code) et retourne l'objet ",(0,i.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,i.kt)("p",null,"Si aucun argument de type fonction n'est fourni \xe0 la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"defineM"),", une erreur est renvoy\xe9e via la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"console.error"),"."),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'defineM(\n  "my-extension",\n  function (mbrApp) {\n    mbrApp.regExtension({\n      name: "my-extension",\n      events: {\n        clickedButton: function () {\n          alert("Le bouton a \xe9t\xe9 cliqu\xe9 !");\n        },\n      },\n    });\n  },\n  [mbrApp]\n);\n')),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Ce code ne fait pas grand-chose de pratique, mais il illustre comment la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"regExtension")," peut \xeatre utilis\xe9e pour enregistrer des fonctionnalit\xe9s personnalis\xe9es dans Mobirise.")),(0,i.kt)("h2",{id:"en-r\xe9sum\xe9"},"En r\xe9sum\xe9"),(0,i.kt)("p",null,"Cette fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"mbrApp.alertDlg")," cr\xe9e une bo\xeete de dialogue d'alerte contenant le texte pass\xe9 en argument, et affiche cette bo\xeete de dialogue \xe0 l'utilisateur. Lorsque l'utilisateur appuie sur le bouton \"OK\" de la bo\xeete de dialogue, la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," est appel\xe9e, mais elle ne fait rien."))}c.isMDXComponent=!0}}]);