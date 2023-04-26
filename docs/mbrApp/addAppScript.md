# mbrApp.addAppScript

```js
function(a) {
  var b = c.Deferred();
  this.appendScriptAsync(l.path2app(a), d.$window.get(0), function(a) {
    return b.resolve()
  });
  return b.promise()
}
```

La fonction `mbrApp.addAppScript` de Mobirise prend en entrée un argument `a` et retourne une promesse qui résoudra une fois que le script associé à l'application aura été ajouté.

À l'intérieur de la fonction, une promesse différée est créée en utilisant la méthode `Deferred()` de l'objet `c`. Ensuite, la méthode `appendScriptAsync()` est appelée pour ajouter le script correspondant à l'application en utilisant le chemin d'accès fourni par la méthode `l.path2app()`.

La méthode `appendScriptAsync()` prend également un deuxième argument qui est l'objet [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) sur lequel le script doit être ajouté, dans ce cas `d.$window.get(0)`. Enfin, une fonction de rappel est fournie qui résout la promesse différée en appelant la méthode `resolve()` sur l'objet `b`.

## Exemple

```js
mbrApp
  .addAppScript("monScript.js")
  .then(function () {
    console.log("The script has been added successfully!");
  })
  .catch(function () {
    console.error("An error occurred while adding the script.");
  });
```

## En résumé

Cette fonction `mbrApp.addAppScript` ajoute un script associé à Mobirise en utilisant le chemin d'accès fourni en argument, retourne une promesse qui sera résolue une fois que le script aura été ajouté avec succès, et permet à l'appelant d'afficher la résolution de la promesse à l'aide des méthodes then() ou catch().
