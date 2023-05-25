"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[7429],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=i,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:1,tags:["Bridge"]},o="Bridge.bind",l={unversionedId:"Bridge/bind",id:"Bridge/bind",title:"Bridge.bind",description:"La fonction Bridge.bind permet de lier une fonction de rappel \xe0 un \xe9v\xe9nement particulier.",source:"@site/docs/Bridge/bind.md",sourceDirName:"Bridge",slug:"/Bridge/bind",permalink:"/docs/Bridge/bind",draft:!1,tags:[{label:"Bridge",permalink:"/docs/tags/bridge"}],version:"current",lastUpdatedAt:1682502564,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Bridge"]},sidebar:"docSidebar",previous:{title:"Bridge.addRecent",permalink:"/docs/Bridge/addRecent"},next:{title:"Bridge.decode",permalink:"/docs/Bridge/decode"}},p={},d=[{value:"Exemple",id:"exemple",level:2},{value:"En r\xe9sum\xe9",id:"en-r\xe9sum\xe9",level:2}],c={toc:d},s="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bridgebind"},"Bridge.bind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function(a, b) {\n    a = "on" + a.toLowerCase();\n    this[a] || (this[a] = []);\n    this[a].push(b)\n}\n')),(0,i.kt)("p",null,"La fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"Bridge.bind")," permet de lier une fonction de rappel \xe0 un \xe9v\xe9nement particulier."),(0,i.kt)("p",null,"Elle prend deux param\xe8tres : ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,i.kt)("p",null,"Le premier param\xe8tre, ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", est le nom de l'\xe9v\xe9nement \xe0 lier \xe0 la fonction de rappel. Il doit \xeatre une cha\xeene de caract\xe8res repr\xe9sentant le nom de l'\xe9v\xe9nement, sans le pr\xe9fixe ",(0,i.kt)("inlineCode",{parentName:"p"},"on"),". Par exemple, si nous voulons lier une fonction de rappel \xe0 l'\xe9v\xe9nement ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),", nous devons passer ",(0,i.kt)("inlineCode",{parentName:"p"},"click")," comme premier param\xe8tre."),(0,i.kt)("p",null,"Le deuxi\xe8me param\xe8tre, ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),", est la fonction de rappel que nous voulons lier \xe0 l'\xe9v\xe9nement. Cette fonction prendra en charge le traitement de l'\xe9v\xe9nement lorsqu'il se produira."),(0,i.kt)("p",null,"Dans la fonction elle-m\xeame, la premi\xe8re chose que la fonction fait est de convertir le nom de l'\xe9v\xe9nement en minuscules et de lui ajouter le pr\xe9fixe ",(0,i.kt)("inlineCode",{parentName:"p"},"on"),". Ensuite, elle v\xe9rifie si une liste d'\xe9v\xe9nements a d\xe9j\xe0 \xe9t\xe9 cr\xe9\xe9e pour cet \xe9v\xe9nement. Si ce n'est pas le cas, elle cr\xe9e une nouvelle liste."),(0,i.kt)("p",null,"Enfin, elle ajoute la fonction de rappel fournie \xe0 la liste d'\xe9v\xe9nements pour cet \xe9v\xe9nement."),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Bridge.addRecent(recentPage, function (success) {\n  if (success) {\n    alert("Recently added item successfully!");\n  } else {\n    alert("Unable to add the recent item.");\n  }\n});\n')),(0,i.kt)("h2",{id:"en-r\xe9sum\xe9"},"En r\xe9sum\xe9"),(0,i.kt)("p",null,"La fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"Bridge.bind")," permet de lier une fonction de rappel \xe0 un \xe9v\xe9nement sp\xe9cifique, en cr\xe9ant une liste d'\xe9v\xe9nements pour cet \xe9v\xe9nement si elle n'existe pas d\xe9j\xe0, puis en ajoutant la fonction de rappel \xe0 cette liste."))}u.isMDXComponent=!0}}]);