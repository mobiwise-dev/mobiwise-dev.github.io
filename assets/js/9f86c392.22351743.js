"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[8524],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(t),u=a,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1},o="mbrApp",p={unversionedId:"mbrApp/mbrApp",id:"mbrApp/mbrApp",title:"mbrApp",description:"The module is defined using the defineM function, which takes two arguments: g and f. These are references to the jQuery library and the Bridge module respectively.",source:"@site/docs/mbrApp/mbrApp.md",sourceDirName:"mbrApp",slug:"/mbrApp/",permalink:"/docs/mbrApp/",draft:!1,tags:[],version:"current",lastUpdatedAt:1689588590,formattedLastUpdatedAt:"Jul 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"mbrApp",permalink:"/docs/category/mbrapp"},next:{title:"mbrApp.Accordion",permalink:"/docs/mbrApp/Accordion"}},l={},d=[{value:"Exemple",id:"exemple",level:2},{value:"Summary",id:"summary",level:2}],s={toc:d},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mbrapp"},"mbrApp"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'defineM(\n  "mbrApp",\n  function (g, f) {\n    var e = function () {\n        this.$iframeOverlay = g("<div>")\n          .hide()\n          .css({\n            position: "absolute",\n            left: 0,\n            top: 65,\n            right: 0,\n            bottom: 0,\n          })\n          .appendTo("body");\n        f.isMobile && g("html").addClass("device");\n        this.$window = g(window);\n        this.$body = g("body");\n      },\n      d = {},\n      l = {};\n    e.prototype.on = function (a, b) {\n      if (g.isArray(a)) for (var c in a) this.on(a[c], b);\n      else if (a in l) {\n        if (b)\n          try {\n            b.apply(this, l[a]);\n          } catch (h) {\n            console.error(h);\n          }\n      } else (d[a] || (d[a] = [])).push(b);\n    };\n    e.prototype.off = function (a, b) {\n      if (!d[a]) return !1;\n      if (b) for (var c = 0; c < d[a].length; c++) d[a][c] === b && (d[a][c] = void 0);\n      else delete d[a];\n    };\n    e.prototype.fire = function (a) {\n      f && f.debug & 1 && console.log("fire mbrApp::" + a);\n      var b = [].slice.call(arguments, 1);\n      if ("undefined" !== typeof d[a])\n        for (var c in d[a])\n          if (d[a][c])\n            try {\n              d[a][c].apply(this, b);\n            } catch (h) {\n              console.error(h);\n            }\n    };\n    e.prototype.fireOnce = function (a) {\n      f && f.debug & 1 && console.log("fire mbrApp::" + a);\n      if (!(a in l)) {\n        var b = [].slice.call(arguments, 1);\n        l[a] = b;\n        for (var c in d[a])\n          if (d[a][c])\n            try {\n              d[a][c].apply(this, b), (d[a][c] = void 0);\n            } catch (h) {\n              console.error(h);\n            }\n      }\n    };\n    var m = {};\n    e.prototype.addFilter = function (a, b) {\n      (m[a] || (m[a] = [])).push(b);\n    };\n    e.prototype.applyFilter = function (a) {\n      f && f.debug & 2 && console.log("applyFilter App:" + a);\n      var b = [].slice.call(arguments, 1);\n      if (m[a])\n        for (var c = m[a], d = 0, e = c.length; d < e; d++)\n          try {\n            (b[0] = c[d].apply(this, b)), "undefined" == typeof b[0] && console.warn("handle of " + a + " filter return undefined: ", c[d]);\n          } catch (p) {\n            console.error(p);\n          }\n      return b[0];\n    };\n    var k = {};\n    e.prototype.regExtension = e.prototype.registerExtension = function (a) {\n      if (!a.name || "undefined" !== typeof k[a.name]) return !1;\n      k[a.name] = a;\n      if (a.global) for (var b in a.global) b in this ? console.error("Error re-definition method mbrApp." + b + " by module " + a.name) : (this[b] = a.global[b]);\n      if (a.events) for (var c in a.events) this.on(c, a.events[c]);\n      if (a.filters) for (c in a.filters) this.addFilter(c, a.filters[c]);\n      f && f.debug & 8 && console.log("mbrApp.regExtension" + a.name);\n      return !0;\n    };\n    e.prototype.rmExtension = e.prototype.removeExtension = function (a) {\n      if (!k[a]) return !1;\n      var b = k[a].global;\n      if (b) for (var c in b) this.k && delete this.k;\n      delete k[a];\n      return !0;\n    };\n    e.prototype.bridgeInit = function () {\n      this.fireOnce("bridgeInit");\n    };\n    var n = 0;\n    e.prototype.uniqNum = function () {\n      return n++;\n    };\n    e.prototype.resetUniqNum = function (a) {\n      n = 0;\n      a && this.Core.resetUniqNum();\n    };\n    window.mbrApp = new e();\n    f.setOnReady(function () {\n      f.bind("drop", function (a) {\n        for (var b in a) window.mbrApp.fire("incomingFile", a[b]);\n      });\n      g(function () {\n        window.mbrApp.bridgeInit();\n      });\n    });\n    return window.mbrApp;\n  },\n  ["jQuery", "Bridge"]\n);\n')),(0,a.kt)("p",null,"The module is defined using the ",(0,a.kt)("inlineCode",{parentName:"p"},"defineM")," function, which takes two arguments: ",(0,a.kt)("inlineCode",{parentName:"p"},"g")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"f"),". These are references to the ",(0,a.kt)("inlineCode",{parentName:"p"},"jQuery")," library and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bridge")," module respectively."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mbrApp")," module defines an object constructor called ",(0,a.kt)("inlineCode",{parentName:"p"},"e"),". This constructor initializes several properties, such as a hidden overlay div, references to the ",(0,a.kt)("inlineCode",{parentName:"p"},"jQuery")," library and the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," element, and empty objects."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"e")," object also defines several methods. The ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," method adds event listeners to the ",(0,a.kt)("inlineCode",{parentName:"p"},"d")," object, which stores callbacks associated with event names. The ",(0,a.kt)("inlineCode",{parentName:"p"},"off")," method deletes an event listener, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"fire")," method triggers an event by calling all callbacks associated with the event name."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fireOnce")," method is similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fire")," method, but calls callbacks only once and then deletes them from the ",(0,a.kt)("inlineCode",{parentName:"p"},"d")," object."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"addFilter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"applyFilter")," methods are used to add and apply filters to the data passed to them."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"regExtension")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rmExtension")," methods are used to register and delete extensions respectively. Extensions are JavaScript modules that can be dynamically loaded and add functionality to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mbrApp")," module."),(0,a.kt)("p",null,"Finally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqNum")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"resetUniqNum")," methods are used to generate unique numbers and reset the counter respectively."),(0,a.kt)("p",null,"The code also creates an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"e")," object and assigns it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.mbrApp")," property. In addition, it binds an event listener to the ",(0,a.kt)("inlineCode",{parentName:"p"},"drop")," event and calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"bridgeInit")," method when the document is ready."),(0,a.kt)("h2",{id:"exemple"},"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Create a new extension\nvar myExtension = {\n  name: "MyExtension",\n  global: {\n    myMethod: function () {\n      console.log("My method has been called!");\n    },\n  },\n  events: {\n    myEvent: function () {\n      console.log("My event has been triggered!");\n    },\n  },\n};\n// Register extension with "mbrApp" module\nmbrApp.regExtension(myExtension);\n\n// We add a filter that adds a prefix to a character string\nmbrApp.addFilter("prefix", function (text, prefix) {\n  return prefix + " " + text;\n});\n\n// We add a callback for the "myEvent" event\nmbrApp.on("myEvent", function () {\n  console.log("My callback has been called!");\n});\n\n// We trigger the "myEvent" event\nmbrApp.fire("myEvent");\n\n// We call the "myMethod" method of the\nmbrApp.myMethod();\n\n// Apply the "prefix" filter to a string\nvar result = mbrApp.applyFilter("prefix", "world", "Hello");\nalert(result); // Display a "Hello world" alert\n')),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The code defines the ",(0,a.kt)("inlineCode",{parentName:"p"},"mbrApp")," module, which is an object containing several methods for adding, deleting and triggering events, as well as adding and applying filters."),(0,a.kt)("p",null,"In addition, the ",(0,a.kt)("inlineCode",{parentName:"p"},"mbrApp")," module can also be used to register and delete extensions, which are JavaScript modules that add further functionality to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mbrApp")," module. The code also creates an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"mbrApp")," module and assigns it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.mbrApp")," property."),(0,a.kt)("p",null,"Overall, the ",(0,a.kt)("inlineCode",{parentName:"p"},"mbrApp")," module provides a structure for managing events and filters in a JavaScript application, and also offers the possibility of extending its functionality using extensions."))}m.isMDXComponent=!0}}]);