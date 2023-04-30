"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[1268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:a,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,tags:["Bridge"]},o="Bridge.decode",d={unversionedId:"Bridge/decode",id:"Bridge/decode",title:"Bridge.decode",description:"La fonction Bridge.decode prend deux param\xe8tres : a et b.",source:"@site/docs/Bridge/decode.md",sourceDirName:"Bridge",slug:"/Bridge/decode",permalink:"/docs/Bridge/decode",draft:!1,tags:[{label:"Bridge",permalink:"/docs/tags/bridge"}],version:"current",lastUpdatedAt:1682502564,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Bridge"]},sidebar:"docSidebar",previous:{title:"Bridge.bind",permalink:"/docs/Bridge/bind"},next:{title:"Bridge.dirList",permalink:"/docs/Bridge/dirList"}},c={},l=[{value:"Exemple",id:"exemple",level:2},{value:"En r\xe9sum\xe9",id:"en-r\xe9sum\xe9",level:2}],p={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bridgedecode"},"Bridge.decode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function(a, b) {\n    if (!b) return !1;\n    var c = "";\n    try {\n        c = w.AES.decrypt(a, "d6F3Efeq").toString(w.enc.Utf8)\n    } catch (d) {\n        b("");\n        return\n    }\n    b(c)\n}\n')),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"Bridge.decode")," prend deux param\xe8tres : ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,a.kt)("p",null,"Le premier param\xe8tre, ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),', est une cha\xeene de caract\xe8res encod\xe9e \xe0 d\xe9coder. Cette cha\xeene de caract\xe8res est cens\xe9e avoir \xe9t\xe9 encod\xe9e \xe0 l\'aide de la fonction "Bridge.encode" ou une autre fonction qui utilise le m\xeame algorithme de chiffrement et la m\xeame cl\xe9.'),(0,a.kt)("p",null,"Le deuxi\xe8me param\xe8tre, ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),", est une fonction de rappel qui sera appel\xe9e lorsque le d\xe9codage sera termin\xe9. Cette fonction prend un seul argument, qui est la version d\xe9cod\xe9e de la cha\xeene de caract\xe8res ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,a.kt)("p",null,"Dans la fonction elle-m\xeame, la premi\xe8re chose que la fonction v\xe9rifie est si la fonction de rappel ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," a \xe9t\xe9 fournie. Si ce n'est pas le cas, la fonction renvoie ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"Ensuite, la fonction essaie de d\xe9coder la cha\xeene de caract\xe8res ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," en utilisant l'algorithme de d\xe9chiffrement ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"},"AES")," avec la cl\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"d6F3Efeq"),". Si le d\xe9codage r\xe9ussit, la version d\xe9cod\xe9e de la cha\xeene de caract\xe8res est assign\xe9e \xe0 la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,a.kt)("p",null,"Enfin, si le d\xe9codage r\xe9ussit, la fonction de rappel ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," est appel\xe9e avec l'argument ",(0,a.kt)("inlineCode",{parentName:"p"},"c"),", qui est la version d\xe9cod\xe9e de la cha\xeene de caract\xe8res ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),". Si le d\xe9codage \xe9choue pour une raison quelconque, la fonction de rappel ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," est appel\xe9e avec une cha\xeene vide en argument ",(0,a.kt)("inlineCode",{parentName:"p"},'("")'),"."),(0,a.kt)("h2",{id:"exemple"},"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='Function'",title:"'Function'"},'Bridge.decode("U2FsdGVkX1/LqwF/oxwT/VgLst64FViH1Qn8+7WF1YY=", function (decodedData) {\n  alert(decodedData);\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='Result'",title:"'Result'"},"Hello World!\n")),(0,a.kt)("h2",{id:"en-r\xe9sum\xe9"},"En r\xe9sum\xe9"),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"Bridge.decode")," d\xe9code une cha\xeene de caract\xe8res encod\xe9e \xe0 l'aide de l'algorithme ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"},"AES")," avec une cl\xe9 sp\xe9cifique, et appelle une fonction de rappel avec la version d\xe9cod\xe9e de cette cha\xeene de caract\xe8res."))}u.isMDXComponent=!0}}]);