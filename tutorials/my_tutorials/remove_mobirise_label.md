---
title: Remove Mobirise Label
sidebar_position: 1
description: How to remove Mobirise label in pages
keywords:
  - Mobirise
  - Label
  - Remove
tags:
  - Mobirise
  - Label
  - Remove
---

# How to remove Mobirise label in pages ?

## Prerequisites

- A code editor. I recommend [Visual Studio Code](https://code.visualstudio.com/) also called VSCode.

## Before starting

Mobirise is available in free version. This free version will allow you to familiarize yourself with the Mobirise interface. You will be limited on the theme used and on the advanced customization. If your goal is to create a small personal website, this version may be enough for you.

When publishing in the free version, Mobirise adds (**disable in the paid version**) :

- a comment in the `<head>` section :

```html
<!-- Site made with Mobirise Website Builder v5.X.X, https://mobirise.com -->
```

- a `class` to the `<body>` element :

```html
<body style="z-index: 0"></body>
```

- an invisible section under the `<body>` element with variable links :

```html title=Exemple
<section id="top-1" style="display: none;"><a href="https://mobirise.com/builder/web-design-tool.html">web design tool</a> Mobirise v5.8.4 <a href="https://mobirise.com/extensions/popup-builder/">Popup Generator</a></section>
```

- a banner under the `<footer>` pointing to its own site :

```html
<section class="display-7" style="padding: 0;align-items: center;justify-content: center;flex-wrap: wrap;    align-content: center;display: flex;position: relative;height: 4rem;">
  <a href="https://mobiri.se/197987" style="flex: 1 1;height: 4rem;position: absolute;width: 100%;z-index: 1;"><img alt="" style="height: 4rem;" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /></a>
  <p style="margin: 0;text-align: center;" class="display-7">Made with &#8204;</p>
  <a style="z-index:1" href="https://mobirise.com/builder/no-code-website-builder.html">No Code Website Builder</a>
</section>
```

:::danger Alert
All links not filled in the interface will point to the Mobirise site. Be careful.
:::

## Comment procéder ?

If you delete directly the banner under the footer, the site breaks. The CSS of the stylesheet `mbr-additional.css` does not load anymore.

Why does this happen? Mobirise adds some Javascript code to the `script.js` file of the theme when publishing the site, so the solution is to remove the added code.

1. Open your publication folder and go here : `assets/theme/js/script.js`.

2. Open `script.js`.

3. Locate

````js
document.getElementsByTagName("body")[0].setAttribute("style","z-index: 0");!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.com/builder/web-design-tool.html">web design tool</a> Mobirise v5.8.4 <a href="https://mobirise.com/extensions/popup-builder/">Popup Generator</a>';document.body.insertBefore(a,document.body.childNodes[0])}}();
```
````
