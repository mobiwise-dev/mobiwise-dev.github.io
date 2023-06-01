"use strict";(self.webpackChunkmobiwise_dev_github_io=self.webpackChunkmobiwise_dev_github_io||[]).push([[3251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=m(a),u=r,h=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},l="Template",o={unversionedId:"Templates",id:"Templates",title:"Template",description:"The mbr-text directive",source:"@site/components/Templates.md",sourceDirName:".",slug:"/Templates",permalink:"/components/Templates",draft:!1,tags:[],version:"current",lastUpdatedAt:1682502564,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSidebar",previous:{title:"Parameters",permalink:"/components/Parameters"},next:{title:"How to create your own component",permalink:"/components/category/how-to-create-your-own-component"}},s={},m=[{value:"The mbr-text directive",id:"the-mbr-text-directive",level:2},{value:"The mbr-article directive",id:"the-mbr-article-directive",level:2},{value:"The mbr-buttons directive",id:"the-mbr-buttons-directive",level:2},{value:"The mbr-menu directive",id:"the-mbr-menu-directive",level:2},{value:"The <code>&lt;img/&gt;</code> tag",id:"the-img-tag",level:2},{value:"The mbr-icon directive",id:"the-mbr-icon-directive",level:2},{value:"The mbr-video directive",id:"the-mbr-video-directive",level:2},{value:"The mbr-map directive",id:"the-mbr-map-directive",level:2},{value:"Loading",id:"loading",level:3},{value:"Loading error (if a location is not found)",id:"loading-error-if-a-location-is-not-found",level:3},{value:"Map representation",id:"map-representation",level:3},{value:"The mbr-form directive",id:"the-mbr-form-directive",level:2},{value:"The mbr-if directive",id:"the-mbr-if-directive",level:2},{value:"The mbr-style directive",id:"the-mbr-style-directive",level:2},{value:"The mbr-class directive",id:"the-mbr-class-directive",level:2},{value:"Interpolation in attributes",id:"interpolation-in-attributes",level:2}],d={toc:m},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"template"},"Template"),(0,r.kt)("h2",{id:"the-mbr-text-directive"},"The mbr-text directive"),(0,r.kt)("p",null,"A simple text without an extended text editor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<div mbr-text>Address...</div>\n")),(0,r.kt)("p",null,"This directive is set automatically for the following tags: H1, H2, H3, H4, H5, P."),(0,r.kt)("h2",{id:"the-mbr-article-directive"},"The mbr-article directive"),(0,r.kt)("p",null,"An article text with an extended text editor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<div mbr-article>\n  <p>Lorem ipsum dolor sit amet.</p>\n  ...\n</div>\n")),(0,r.kt)("h2",{id:"the-mbr-buttons-directive"},"The mbr-buttons directive"),(0,r.kt)("p",null,"The element is interpreted as a buttons group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div mbr-buttons>\n  <a class="btn btn-primary" href="https://mobirise.com">Button 1</a>\n  <a class="btn btn-danger" href="https://mobirise.com">Button 2</a>\n</div>\n')),(0,r.kt)("h2",{id:"the-mbr-menu-directive"},"The mbr-menu directive"),(0,r.kt)("p",null,"An element is interpreted as a menu."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ul class="navbar-nav nav-dropdown" mbr-menu>\n  <li class="nav-item"><a class="nav-link link" href="https://mobirise.com">HOME</a></li>\n  <li class="nav-item"><a class="nav-link link" href="https://mobirise.com">FEATURES</a></li>\n</ul>\n')),(0,r.kt)("h2",{id:"the-img-tag"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"<img/>")," tag"),(0,r.kt)("p",null,"An element is interpreted as an image automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<img src="logo.png" height="128" alt="Mobirise" />\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<a href="#"><img src="logo.png" height="128" alt="Mobirise" /></a>\n')),(0,r.kt)("admonition",{title:"ALERT",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Don't add directives like mbr-if to a parent link, because they can be removed with the help of an image editor. Use a container if it's needed.")),(0,r.kt)("h2",{id:"the-mbr-icon-directive"},"The mbr-icon directive"),(0,r.kt)("p",null,"It specifies an icon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<span mbr-icon class="mbri-mobirise mbr-iconfont" style="font-size: 96px; color: rgb(228, 63, 63);"></span>\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<a href="#"><span mbr-icon class="mbri-mobirise mbr-iconfont" style="font-size: 96px; color: rgb(228, 63, 63);"></span></a>\n')),(0,r.kt)("admonition",{title:"ALERT",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"You shouldn't add the mbr-icon attribute to a link. ALERT: Don't add directives like mbr-if to a parent link, because they can be removed with the help of an icon editor. Use a container instead.")),(0,r.kt)("h2",{id:"the-mbr-video-directive"},"The mbr-video directive"),(0,r.kt)("p",null,"An element is interpreted as a video:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div mbr-video>\n  <iframe src="http://www.youtube.com/watch?v=uNCr7NdOJgw"></iframe>\n</div>\n')),(0,r.kt)("h2",{id:"the-mbr-map-directive"},"The mbr-map directive"),(0,r.kt)("p",null,"A parameter name is used as an attribute value. Only one parameter type is supported: map."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="google-map" mbr-map="googleMap"></div>\n')),(0,r.kt)("p",null,"A map has several states:"),(0,r.kt)("h3",{id:"loading"},"Loading"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="google-map" mbr-map="googleMap" data-state="loading">\n  <div data-state-details></div>\n</div>\n')),(0,r.kt)("h3",{id:"loading-error-if-a-location-is-not-found"},"Loading error (if a location is not found)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="google-map" mbr-map="googleMap" data-state="not found">\n  <div data-state-details>Not found</div>\n</div>\n')),(0,r.kt)("h3",{id:"map-representation"},"Map representation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="google-map" mbr-map="googleMap">\n  <iframe>...</iframe>\n</div>\n')),(0,r.kt)("p",null,"Styles are needed during the change of address to make clear what is going on. There's a simple example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-less",metastring:'title="Less format"',title:'"Less','format"':!0},'.google-map {\n  height: 25rem;\n  position: relative;\n  iframe {\n    height: 100%;\n    width: 100%;\n  }\n  [data-state-details] {\n    color: #6b6763;\n    font-family: Montserrat;\n    height: 1.5em;\n    margin-top: -0.75em;\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n    position: absolute;\n    text-align: center;\n    top: 50%;\n    width: 100%;\n  }\n  &[data-state] {\n    background: #e9e5dc;\n  }\n  &[data-state="loading"] {\n    [data-state-details] {\n      display: none;\n    }\n    &::after {\n      // loader\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"the-mbr-form-directive"},"The mbr-form directive"),(0,r.kt)("p",null,"An element is interpreted as a form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form mbr-form class="mbr-form" action="ebthemes@gmail.com" method="post" name="My Mobirise Form"></form>\n')),(0,r.kt)("p",null,"It can have a nested structure. An element with a data-form-alert attribute is intended to show messages with the result of a form sending. To make a message initially hidden, use the hidden attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div mbr-form>\n  <div data-form-alert hidden>Thanks for filling out the form!</div>\n  <form class="mbr-form" action="ebthemes@gmail.com" method="post" name="My Mobirise Form">\n    <input type="email" class="field" name="email" data-form-field="Email" placeholder="Email" required />\n    <a data-app-btn="true" type="submit" class="btn">SUBSCRIBE</a>\n  </form>\n</div>\n')),(0,r.kt)("p",null,"The name attribute of the form is responsible for a title of a submited form. The action attribute may contain an e-mail or a handler script URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form name="My Mobirise Form" action="ebthemes@gmail.com" method="post"></form>\n')),(0,r.kt)("p",null,"Elements input placed inside a form should contain a unique name attribute. The data-form-field value is a name of a field in a form editor window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<input type="email" name="email" class="field" data-form-field="Email" placeholder="Email" required />\n')),(0,r.kt)("p",null,"It's possible to add ",(0,r.kt)("inlineCode",{parentName:"p"},"<label>")," for form inputs. To bind them, it's necessary to add the for attribute to a label and add a proper input name as the value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<label mbr-text class="form-label" for="phone">Phone</label>\n\n<input type="tel" name="phone" class="form-control" data-form-field="Phone" />\n')),(0,r.kt)("p",null,"Also there is a possibility to control visibility of html elements inside a form depending on the visibility of certain inputs of this form. It's necessary to define the data-for attribute with a name attribute of a needed input as avalue. Only one dependency can exist at this time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="col-md-6 multi-horizontal" data-for="name">\n  <input type="text" class="input" name="name" data-form-field="Name" placeholder="Your Name" required />\n</div>\n')),(0,r.kt)("h2",{id:"the-mbr-if-directive"},"The mbr-if directive"),(0,r.kt)("p",null,"It shows/hides a block depending on a condition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h1 mbr-if="showTitle">Header</h1>\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div mbr-if="showTitle || showText">\n  <h1 mbr-if="showTitle">Header</h1>\n  <div mbr-if="showText"></div>\n</div>\n')),(0,r.kt)("h2",{id:"the-mbr-style-directive"},"The mbr-style directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<section mbr-style=\"{'background-color': bgColor, 'background-image': url(bgImg)}\"></section>\n")),(0,r.kt)("admonition",{title:"ALERT",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," function is the only one in the template that wraps a value with ",(0,r.kt)("inlineCode",{parentName:"p"},"url(...)")," if it exists.")),(0,r.kt)("h2",{id:"the-mbr-class-directive"},"The mbr-class directive"),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'showTitle = true showText = false blockType = "flat"\n\n<span mbr-class="{\'with-title\': showTitle, \'with-text\': showText}"></span>\n\n<span class="with-title"></span>\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<span mbr-class="blockType"></span>\n\n<span class="flat"></span>\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<span mbr-class=\"blockType == 'flat' ? 'flat-style' : '3d-style'\"></span>\n\n<span class=\"flat-style\"></span>\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<span mbr-class=\"[blockType, {'with-title': showTitle, 'with-text': showText}]\"></span>\n\n<span class=\"flat with-title\"></span>\n")),(0,r.kt)("h2",{id:"interpolation-in-attributes"},"Interpolation in attributes"),(0,r.kt)("p",null,"Any attribute if it contains a syntactically correct expression inside double braces {{ ... }} becomes active and changes dynamically by changing parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div title="color: {{bgColor}}"></div>\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div style="background: {{bgColor}}"></div>\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div data-video-src="{{bgVideo.url}}"></div>\n')))}c.isMDXComponent=!0}}]);