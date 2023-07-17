"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[9902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={description:"All about Bridge.getLocalJSON Mobirise function",keywords:["Mobirise","Function","Bridge.getLocalJSON"],tags:["Mobirise","Function","Bridge.getLocalJSON"]},o="Bridge.getLocalJSON",l={unversionedId:"Bridge/getLocalJSON",id:"Bridge/getLocalJSON",title:"Bridge.getLocalJSON",description:"All about Bridge.getLocalJSON Mobirise function",source:"@site/docs/Bridge/getLocalJSON.md",sourceDirName:"Bridge",slug:"/Bridge/getLocalJSON",permalink:"/docs/Bridge/getLocalJSON",draft:!1,tags:[{label:"Mobirise",permalink:"/docs/tags/mobirise"},{label:"Function",permalink:"/docs/tags/function"},{label:"Bridge.getLocalJSON",permalink:"/docs/tags/bridge-get-local-json"}],version:"current",lastUpdatedAt:1689590025,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{description:"All about Bridge.getLocalJSON Mobirise function",keywords:["Mobirise","Function","Bridge.getLocalJSON"],tags:["Mobirise","Function","Bridge.getLocalJSON"]},sidebar:"docSidebar",previous:{title:"Bridge.getInfoLocal",permalink:"/docs/Bridge/getInfoLocal"},next:{title:"Bridge.getSettings",permalink:"/docs/Bridge/getSetting"}},c={},s=[{value:"Exemple",id:"exemple",level:2},{value:"En r\xe9sum\xe9",id:"en-r\xe9sum\xe9",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bridgegetlocaljson"},"Bridge.getLocalJSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function(a,\n  b, e) {\n  c.loadLocalFile(a, function(c) {\n    if (c) try {\n      var d = JSON.parse(c)\n    } catch (k) {\n      console.error(Error(k.message + (k.line ? " at line " + k.line : "") + " in file " + a, a));\n      e && e(null);\n      return\n    }\n    b ? b(d) : console.warn("No callback_data function passed for the getLocalJSON:", a)\n  })\n}\n')),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"Bridge.getLocalJson")," est utilis\xe9e pour charger un fichier JSON \xe0 partir de la m\xe9moire locale de l'appareil de l'utilisateur."),(0,a.kt)("p",null,"La fonction prend trois param\xe8tres :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"a")," est une cha\xeene de caract\xe8res qui sp\xe9cifie l'emplacement du fichier JSON \xe0 charger.",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"b")," est une fonction de rappel qui sera appel\xe9e lorsque le fichier JSON sera charg\xe9 avec succ\xe8s. Cette fonction prend un seul param\xe8tre, qui est l'objet JSON pars\xe9 \xe0 partir du fichier charg\xe9.",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"e")," est une fonction de rappel facultative qui sera appel\xe9e si le fichier JSON ne peut pas \xeatre charg\xe9 pour une raison quelconque. Cette fonction prend un seul param\xe8tre, qui est g\xe9n\xe9ralement un objet d'erreur."),(0,a.kt)("p",null,"La fonction utilise la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"loadLocalFile")," pour charger le fichier JSON \xe0 partir de la m\xe9moire locale de l'appareil. Si le fichier est charg\xe9 avec succ\xe8s, la fonction essaie de le convertir en objet JSON en utilisant la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.parse"),". Si la conversion \xe9choue, la fonction affiche une erreur dans la console et appelle la fonction de rappel ",(0,a.kt)("inlineCode",{parentName:"p"},"e")," si elle est fournie. Sinon, la fonction de rappel ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," est appel\xe9e avec l'objet JSON pars\xe9 en tant que param\xe8tre."),(0,a.kt)("p",null,"Il est \xe0 noter que si aucun param\xe8tre de fonction de rappel n'est fourni, la fonction affichera un avertissement dans la console pour signaler que la fonction de rappel est manquante."),(0,a.kt)("h2",{id:"exemple"},"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON File"',title:'"JSON','File"':!0},'{\n  "name": "John",\n  "age": 30,\n  "email": "john@example.com"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Function"',title:'"Function"'},'Bridge.getLocalJSON(\n  "example.json",\n  function (data) {\n    alert(data.name); // "John"\n    alert(data.age); // 30\n    alert(data.email); // "john@example.com"\n  },\n  function (error) {\n    alert(error); // Affiche un message d\'erreur si le fichier ne peut pas \xeatre charg\xe9\n  }\n);\n')),(0,a.kt)("h2",{id:"en-r\xe9sum\xe9"},"En r\xe9sum\xe9"),(0,a.kt)("p",null,"Cette fonction permet de charger un fichier JSON \xe0 partir de la m\xe9moire locale de l'utilisateur, de le convertir en objet JSON et de le manipuler dans le code JavaScript. Cela peut \xeatre utile pour stocker des donn\xe9es localement et les r\xe9cup\xe9rer ult\xe9rieurement sans avoir besoin de les t\xe9l\xe9charger \xe0 nouveau depuis un serveur distant."))}d.isMDXComponent=!0}}]);