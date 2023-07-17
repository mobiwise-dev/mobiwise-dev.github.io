---
description: All about Bridge.getLocalJSON Mobirise function
keywords:
  - Mobirise
  - Function
  - Bridge.getLocalJSON
tags:
  - Mobirise
  - Function
  - Bridge.getLocalJSON
---

# Bridge.getLocalJSON

```js
function(a,
  b, e) {
  c.loadLocalFile(a, function(c) {
    if (c) try {
      var d = JSON.parse(c)
    } catch (k) {
      console.error(Error(k.message + (k.line ? " at line " + k.line : "") + " in file " + a, a));
      e && e(null);
      return
    }
    b ? b(d) : console.warn("No callback_data function passed for the getLocalJSON:", a)
  })
}
```

La fonction `Bridge.getLocalJson` est utilisée pour charger un fichier JSON à partir de la mémoire locale de l'appareil de l'utilisateur.

La fonction prend trois paramètres :

`a` est une chaîne de caractères qui spécifie l'emplacement du fichier JSON à charger.<br/>
`b` est une fonction de rappel qui sera appelée lorsque le fichier JSON sera chargé avec succès. Cette fonction prend un seul paramètre, qui est l'objet JSON parsé à partir du fichier chargé.<br/>
`e` est une fonction de rappel facultative qui sera appelée si le fichier JSON ne peut pas être chargé pour une raison quelconque. Cette fonction prend un seul paramètre, qui est généralement un objet d'erreur.

La fonction utilise la méthode `loadLocalFile` pour charger le fichier JSON à partir de la mémoire locale de l'appareil. Si le fichier est chargé avec succès, la fonction essaie de le convertir en objet JSON en utilisant la méthode `JSON.parse`. Si la conversion échoue, la fonction affiche une erreur dans la console et appelle la fonction de rappel `e` si elle est fournie. Sinon, la fonction de rappel `b` est appelée avec l'objet JSON parsé en tant que paramètre.

Il est à noter que si aucun paramètre de fonction de rappel n'est fourni, la fonction affichera un avertissement dans la console pour signaler que la fonction de rappel est manquante.

## Exemple

```json title="JSON File"
{
  "name": "John",
  "age": 30,
  "email": "john@example.com"
}
```

```js title="Function"
Bridge.getLocalJSON(
  "example.json",
  function (data) {
    alert(data.name); // "John"
    alert(data.age); // 30
    alert(data.email); // "john@example.com"
  },
  function (error) {
    alert(error); // Affiche un message d'erreur si le fichier ne peut pas être chargé
  }
);
```

## En résumé

Cette fonction permet de charger un fichier JSON à partir de la mémoire locale de l'utilisateur, de le convertir en objet JSON et de le manipuler dans le code JavaScript. Cela peut être utile pour stocker des données localement et les récupérer ultérieurement sans avoir besoin de les télécharger à nouveau depuis un serveur distant.
