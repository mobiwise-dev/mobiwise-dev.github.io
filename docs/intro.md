---
sidebar_position: 1
title: Cheat Sheet
description: All the native functions of Mobirise
keywords: [MobiWise, Mobirise, extension, function]
slug: Cheat_Sheet
---

# Cheat Sheet ?

![cheat sheet](Fichier1.svg#center)

In this section you will find the native functions of Mobirise. These are the functions used by Mobirise (e.g. get the location of your files). These functions are very useful if you want to develop your own extensions.

## How work Mobirise ?

[Mobirise](/) is a user-friendly website creation application that allows users to create professional-looking websites without the need for programming knowledge. It is developed using [Electron](https://www.electronjs.org/) technology, which is based on [Node.js](https://nodejs.org), allowing the application to be cross-platform and run on Windows, MacOS, and Linux.

Mobirise also utilizes [Bootstrap](https://getbootstrap.com/), an open-source HTML, CSS, and JavaScript framework that makes it easy to create responsive and adaptable websites for all screens. With Bootstrap, Mobirise users can choose from a wide variety of pre-defined content blocks, such as headers, images, videos, galleries, maps, buttons, forms, icons, and much more.

Mobirise also has an intuitive and user-friendly interface that allows users to drag and drop elements to create and customize their website. Additionally, Mobirise offers a range of advanced options to customize styles, colors, fonts, and animations, so users can create unique and professional-looking websites.

In summary, Mobirise is a simple and user-friendly website creation application that utilizes Electron and Bootstrap technology to allow users to create professional-looking websites without requiring programming skills. With an intuitive user interface and a range of advanced options, Mobirise is a great choice for both beginner and experienced users looking to create professional-looking websites.

## About Electron App

> Electron is a runtime framework that facilitates cross-platform desktop application development by using HTML, CSS and JavaScript. It uses Node.js for backend and libchromiumcontent from [Chromium](https://www.chromium.org) for rendering(frontend).

Mobirise, comme toute application Electron, utilise certains composants de Chromium pour faire son travail. Il y a deux types de processus qui s'exécutent dans une application Electron :

1. **Main process**
2. **Render process**

Chaque application ne peut avoir qu'un seul `Main` process, mais plusieurs `Render` process peuvent être créés par le processus principal. Le `Main` process est un processus privilégié car il s'exécute dans l'environnement Node.js et a donc accès aux API de Node.js. Le processus `Renderer`, quant à lui, est un processus moins privilégié, car, comme son nom l'indique, il s'occupe du rendu.

Comment une application Electron utilise-t-elle les fonctionnalités du système (comme la lecture/écriture dans les fichiers, etc.), vous pourriez vous demander. Nous avons des scripts de préchargement pour cela.

Les scripts de préchargement contiennent du code qui s'exécute dans le contexte du moteur de rendu avant le code de l'application web. Ces scripts ont des privilèges plus élevés puisqu'ils ont accès aux API de Node.js.

Les applications Electron sont emballées au format `asar` , qui est essentiellement un simple format de type TAR.

```JSON
app.asar # Source code of Mobirise
├── node_modules
├── web
|  ├── app
|  |  ├── builder
|  |  ├── code-editor
|  |  ├── includes
|  |  ├── interface
|  |  └── themes # the default themes
|  |     ├── mobirise-amp
|  |     ├── mobirise5
|  |     └── list.json
|  ├── assets
|  ├── index.html
|  └── main.css
├── loader.node
└── package.json
```
