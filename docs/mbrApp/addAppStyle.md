# mbrApp.addAppStyle

```js
function(a) {
  d.$body.find("#insertBefore").before('<link rel="stylesheet" href="' + l.path2app(a) + '">')
}
```

La fonction `mbrApp.addAppStyle` de Mobirise prend en entrée un argument `a`, qui représente le chemin d'accès à une feuille de style CSS. La fonction utilise ensuite la méthode `before()` de l'objet [jQuery](https://jquery.com) `d.$body.find("#insertBefore")` pour insérer une balise `<link>` qui référence la feuille de style à ajouter, juste avant l'élément ayant l'ID `insertBefore`.

Plus précisément, la fonction utilise la méthode `path2app()` de l'objet `l` pour obtenir le chemin d'accès complet de la feuille de style. Ensuite, elle utilise une chaîne de caractères pour construire la balise `<link>` en utilisant le chemin d'accès obtenu et l'insère dans le DOM en utilisant la méthode `before()`.

## Exemple

```js
mbrApp.addAppStyle("myStyle.css");
```

## En résumé

Cette fonction `mbrApp.addAppStyle` permet d'ajouter dynamiquement une feuille de style CSS à Mobirise en insérant une balise `<link>` correspondante dans le DOM.
