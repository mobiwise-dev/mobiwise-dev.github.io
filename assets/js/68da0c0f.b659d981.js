"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[9846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1,tags:["Bridge"]},a="Bridge.dirList",l={unversionedId:"Bridge/dirList",id:"Bridge/dirList",title:"Bridge.dirList",description:"La fonction permet de lister les fichiers et les r\xe9pertoires dans un r\xe9pertoire donn\xe9.",source:"@site/docs/Bridge/dirList.md",sourceDirName:"Bridge",slug:"/Bridge/dirList",permalink:"/docs/Bridge/dirList",draft:!1,tags:[{label:"Bridge",permalink:"/docs/tags/bridge"}],version:"current",lastUpdatedAt:1682502564,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Bridge"]},sidebar:"docSidebar",previous:{title:"Bridge.decode",permalink:"/docs/Bridge/decode"},next:{title:"Bridge.encode",permalink:"/docs/Bridge/encode"}},s={},p=[{value:"Exemple",id:"exemple",level:2},{value:"En r\xe9sum\xe9",id:"en-r\xe9sum\xe9",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bridgedirlist"},"Bridge.dirList"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function(c, d, e) {\n  if (!c || !d) return !1;\n  c = k.normalize(g(c));\n  e = Object.assign({\n    names: ["*"],\n    filter: 1,\n    recursive: !0\n  }, e);\n  let f = b(e.filter),\n    t = a(e.names),\n    l = [];\n  if (e.recursive) {\n    let a = P.walk(c);\n    ["file", "directory"].forEach(function(b) {\n      a.on(b, this)\n    }, function(a, b, d) {\n      f(b.type) && t(b.name) && l.push((a + "/" + b.name).substr(c.length + 1).replace(/\\\\/g, "/"));\n      d()\n    });\n    a.on("end", () => d(l))\n  } else n.readdir(c, function(a, b) {\n    if (a) d([]);\n    else {\n      if (b.length) {\n        a = 0;\n        for (var e = b.length; a < e; a++) {\n          var g = k.resolve(c, b[a]);\n          g = n.lstatSync(g);\n          g = g.isFile() ? "file" :\n            g.isDirectory() ? "directory" : "any";\n          f(g) && t(b[a]) && l.push((c + "/" + b[a]).substr(c.length + 1).replace(/\\\\/g, "/"))\n        }\n      }\n      d(l)\n    }\n  })\n}\n')),(0,i.kt)("p",null,"La fonction permet de lister les fichiers et les r\xe9pertoires dans un r\xe9pertoire donn\xe9."),(0,i.kt)("p",null,"La fonction prend trois param\xe8tres. ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," le chemin du r\xe9pertoire \xe0 lister. ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," une fonction de rappel qui sera appel\xe9e avec un tableau contenant la liste des fichiers et r\xe9pertoires une fois qu'ils auront \xe9t\xe9 trouv\xe9s. ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," un objet contenant des options facultatives pour la fonction."),(0,i.kt)("p",null,"La fonction commence par normaliser le chemin du r\xe9pertoire en utilisant la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," et en le passant \xe0 la fonction normalize de l'objet ",(0,i.kt)("inlineCode",{parentName:"p"},"k"),". Ensuite, elle d\xe9finit les options par d\xe9faut pour la liste des noms de fichiers, le filtre et la r\xe9cursivit\xe9. La fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," est utilis\xe9e pour cr\xe9er une fonction de filtre bas\xe9e sur les options fournies. La fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," est utilis\xe9e pour cr\xe9er une fonction de correspondance de nom de fichier en fonction des options fournies."),(0,i.kt)("p",null,"Si l'option recursive est activ\xe9e, la fonction utilise la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"P.walk")," pour parcourir le r\xe9pertoire et appelle la fonction de rappel pour chaque fichier ou r\xe9pertoire trouv\xe9. Les fichiers et les r\xe9pertoires sont filtr\xe9s et ajout\xe9s au tableau ",(0,i.kt)("inlineCode",{parentName:"p"},"l")," pour \xeatre renvoy\xe9s \xe0 la fonction de rappel."),(0,i.kt)("p",null,"Si l'option ",(0,i.kt)("inlineCode",{parentName:"p"},"recursive")," n'est pas activ\xe9e, la fonction utilise la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"readdir")," de l'objet ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," pour lire les fichiers et les r\xe9pertoires dans le r\xe9pertoire donn\xe9. Les fichiers et les r\xe9pertoires sont filtr\xe9s et ajout\xe9s au tableau ",(0,i.kt)("inlineCode",{parentName:"p"},"l")," pour \xeatre renvoy\xe9s \xe0 la fonction de rappel."),(0,i.kt)("p",null,"Enfin, la fonction appelle la fonction de rappel avec le tableau ",(0,i.kt)("inlineCode",{parentName:"p"},"l")," contenant les fichiers et les r\xe9pertoires trouv\xe9s."),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Bridge.dirList(\n  "/myDirectory",\n  (fileList) => {\n    alert(fileList);\n  },\n  {\n    names: ["*.txt"], // Cherche tous les fichiers avec l\'extension .txt\n    filter: 2, // 1 = tous les fichiers, 2 = en fonction de l\'extension (ex = names"*.txt), 3 = taille (minSize et maxSize), 4 = date (minDate et maxDate)\n    recursive: true, // Recherche r\xe9cursive\n  }\n);\n')),(0,i.kt)("h2",{id:"en-r\xe9sum\xe9"},"En r\xe9sum\xe9"),(0,i.kt)("p",null,"La fonction permet de lister les fichiers et les r\xe9pertoires dans un r\xe9pertoire donn\xe9 en utilisant des options facultatives pour filtrer les r\xe9sultats. Elle peut \xeatre utilis\xe9e pour acc\xe9der aux fichiers et r\xe9pertoires sur le syst\xe8me de fichiers local. La fonction renvoie un tableau contenant les fichiers et les r\xe9pertoires trouv\xe9s, qui est pass\xe9 \xe0 une fonction de rappel fournie en tant que param\xe8tre."))}u.isMDXComponent=!0}}]);