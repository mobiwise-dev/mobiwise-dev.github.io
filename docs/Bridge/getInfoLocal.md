---
sidebar_position: 1
tags:
  - Bridge
---

# Bridge.getInfoLocal

```js
function(a, b) {
  var c = {};
  b = b || function() {};
  a = k.normalize(g(a));
  n.lstat(a, (a, e) => {
    a || !e ? b() : (c.isDir = e.isDirectory(), c.size = e.size, c.modified = e.mtime, c.mode = (e.mode & 1 ? "e" : "") + (e.mode & 2 ? "w" : "") + (e.mode & 4 ? "r" : ""), b(c))
  })
}
```

La fonction permet d'obtenir des informations sur un fichier ou un dossier local en spécifiant son chemin. La fonction prend deux arguments :

`a` : le chemin du fichier ou du dossier local<br/>
`b` : une fonction de rappel qui sera appelée une fois que les informations sont récupérées.

La fonction commence par normaliser le chemin d'accès au fichier ou dossier avec la fonction `normalize` pour s'assurer qu'il est dans un format standardisé. Elle utilise ensuite la méthode `lstat` pour obtenir les informations du fichier ou du dossier. Les informations sont stockées dans un objet `c` qui contient les propriétés suivantes :

`isDir` : un booléen qui indique si le chemin d'accès correspond à un dossier ou non.<br/>
`size` : la taille en octets du fichier.<br/>
`modified` : la date de dernière modification du fichier.<br/>
`mode` : les permissions du fichier (en lecture, écriture, exécution).

Si aucune erreur ne se produit lors de l'appel à `lstat`, la fonction de rappel `b` est appelée avec l'objet `c` contenant les informations récupérées. Si une erreur se produit, la fonction de rappel est également appelée, mais sans arguments.

## Exemple

```js
Bridge.getInfoLocal("/path/to/file", function (info) {
  alert(info);
});
```

## En résumé

La fonction `getInfoLocal` renvoie des informations (taille, date de dernière modification, mode, etc.) sur un fichier ou un dossier local et utilise une fonction de rappel pour retourner les informations récupérées ou une erreur si elle se produit.
