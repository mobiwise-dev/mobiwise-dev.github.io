---
description: All about mbrApp.addAppResource Mobirise function
keywords:
  - Mobirise
  - Function
  - addAppResource
  - Add Resource
tags:
  - Mobirise
  - Function
  - addAppResource
  - Add Resource
---

# mbrApp.addAppResource

```js
function(a, b) {
  if (a) {
    void 0 === b && (b = /\.js$/.test(a.split("?")[0]));
    if (b) return this.addAppScript(a);
    this.addAppStyle(a);
    return c.Deferred().resolve()
  }
}
```

La fonction `mbrApp.addAppResource` de Mobirise ajoute une ressource (un script ou une feuille de style) associée à l'application en fonction de l'extension de fichier fournie en argument.

La fonction prend deux arguments :

- `a` est le chemin d'accès à la ressource.
- `b` un booléen optionnel indiquant si la ressource est un script ou une feuille de style. Si `b` n'est pas fourni, la fonction détermine le type de ressource en utilisant une expression régulière pour vérifier si le chemin d'accès se termine par `.js`.

Si la ressource est un script, la fonction appelle la fonction [addAppScript](addAppScript) pour ajouter le script à la page. Si la ressource est une feuille de style, la fonction appelle la fonction [addAppStyle](addAppStyle) pour ajouter la feuille de style à la page.

Enfin, la fonction retourne une promesse résolue, créée à l'aide de la méthode `Deferred().resolve()`, qui indique que l'ajout de la ressource est terminé.

## Exemple

```js
// Create the accordion
var accordion = mbrApp.Accordion(".accordion .question", ".accordion .answer", {
  autoCollapse: true,
});

// Hide all answers except the first one
accordion.expand(":first-child");
```

## En résumé

Cette fonction `mbrApp.addAppResource` permet d'ajouter dynamiquement une ressource (un script ou une feuille de style) à Mobirise en fonction de l'extension de fichier fournie en argument, et retourne une promesse résolue indiquant que l'ajout est terminé.
