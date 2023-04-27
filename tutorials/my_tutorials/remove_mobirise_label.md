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

## Prérequis

- Un éditeur de code. Je vous recommande [Visual Studio Code](https://code.visualstudio.com/) aussi appelé VSCode.

## Avant de commencer

Mobirise est disponible en version gratuite. Cette version gratuite vous permez de vous familiariser avec l'interface de Mobirise. Vous serez limité sur le thème utilisé et sur la personnalisation avancée. Si votre but est de créer un petit site perso, cette version peut vous suffir.

Lors de la publication en version gratuite, Mobirise ajoute (**désactivable dans la version payante**) :

- un commentaire dans le `<head>` :

```html
<!-- Site made with Mobirise Website Builder v5.X.X, https://mobirise.com -->
```

- une `class` à l'élément `<body>` :

```html
<body style="z-index: 0"></body>
```

- une section invisible sous l'élément `<body>` avec des liens variables :

```html title=Exemple
<section id="top-1" style="display: none;"><a href="https://mobirise.com/builder/web-design-tool.html">web design tool</a> Mobirise v5.8.4 <a href="https://mobirise.com/extensions/popup-builder/">Popup Generator</a></section>
```

- un bandeau sous le `<footer>` pointant vers son propre site :

```html
<section class="display-7" style="padding: 0;align-items: center;justify-content: center;flex-wrap: wrap;    align-content: center;display: flex;position: relative;height: 4rem;">
  <a href="https://mobiri.se/197987" style="flex: 1 1;height: 4rem;position: absolute;width: 100%;z-index: 1;"><img alt="" style="height: 4rem;" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /></a>
  <p style="margin: 0;text-align: center;" class="display-7">Made with &#8204;</p>
  <a style="z-index:1" href="https://mobirise.com/builder/no-code-website-builder.html">No Code Website Builder</a>
</section>
```

:::danger Alert
Tous liens non renseignés dans l'interface pointera vers le site de Mobirise. Soyez vigilant.
:::

## Comment procéder ?

Si vous supprimer directement le bandeau sous le footer, le site se casse. Le CSS de la feuille de style `mbr-additional.css` ne se charge plus.

Pourquoi ? Mobirise ajoute lors de la publication du site un peu de code Javascript au fichier `script.js` du thème.La solution est donc d'ôter le code ajouté.

1. Ouvrez votre dossier de publication est rendez-vous ici : `assets/theme/js/script.js`

2. Ouvrez `script.js`

3. Localiser

````js
document.getElementsByTagName("body")[0].setAttribute("style","z-index: 0");!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.com/builder/web-design-tool.html">web design tool</a> Mobirise v5.8.4 <a href="https://mobirise.com/extensions/popup-builder/">Popup Generator</a>';document.body.insertBefore(a,document.body.childNodes[0])}}();
```
````
