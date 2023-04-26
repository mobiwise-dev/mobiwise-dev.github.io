---
sidebar_position: 2
---

# Create an extension

## Getting started

Cette méthode n'est pas la plus aisé. Elle est utile pour des composants utilsants des scritps. Pour des composants simples préférez cette méthode.

:::note
Cette section ne traite pas l'utilisation de fonction avancé dans vos composants.
:::

## Folder structure

```txt
extension-name
├── components  // Here your component
|  ├── images
|  └── component-name
│     ├── style.less
|     ├── template.html
|     └── thumb.png
├── params.json
├── splash.html
├── splash.jpg
└── thumbnail.png
```

## params.json

This file is used to declare in Mobirise your extension, **thus your component**.

```json
{
  "name": "Name You Want",
  "version": "1.0.0",
  "minAppVersion": "4",
  "components": [
    {
      "path": "components/witsec-mailform",
      "_group": "witsec",
      "_isSecondary": true
    }
  ],
  "ampCompatible": false,
  "description": "A description of your component. You can also add a link <a href='https://exemple.com'>Learn more...</a>",
  "logo": "thumbnail.svg"
}
```
