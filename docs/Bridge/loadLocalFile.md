---
description: All about Bridge.loadLocalFile Mobirise function
keywords:
  - Mobirise
  - Function
  - loadLocalFile
tags:
  - Mobirise
  - Function
  - loadLocalFile
---

# Bridge.loadLocalFile

```js
function(a, b) {
  if (!a) return !1;
  a = g(a);
  e._lockFile(a, function() {
    n.readFile(a, "utf8", (c, d) => {
      e._unlockFile(a);
      b && b(c ? "" : d)
    })
  })
}
```

La fonction `Bridge.loadLocalFile` de Mobirise est utilisée pour charger un fichier local. La fonction prend deux paramètres :

`a` est une chaîne de caractères qui spécifie l'emplacement du fichier.<br/>
`b` est une fonction de rappel qui sera appelée lorsque le fichier sera chargé.

Voici ce que fait cette fonction :

Vérifie si le paramètre `a` (chemin du fichier local) est fourni. Si `a` est nul ou non défini, la fonction retourne `false` pour indiquer qu'aucun fichier n'a été spécifié.

Appelle la fonction interne `g(a)` pour résoudre le chemin du fichier local. La fonction `g` peut effectuer des opérations supplémentaires pour traiter le chemin du fichier, mais les détails spécifiques ne sont pas inclus dans le code fourni.

Utilise la fonction `_lockFile` pour verrouiller le fichier et éviter que d'autres processus ou threads n'y accèdent pendant la lecture.

Utilise `n.readFile` pour lire le contenu du fichier spécifié. Le paramètre `utf8` indique que le fichier doit être lu en utilisant l'encodage UTF-8.

Fournit une fonction de rappel `b` pour traiter les résultats de la lecture du fichier. Si une erreur `c` se produit lors de la lecture du fichier, la fonction de rappel renvoie une chaîne vide "". Sinon, la fonction de rappel renvoie le contenu du fichier `(d)`.

Utilise la fonction `_unlockFile` pour déverrouiller le fichier, permettant ainsi d'autres accès.

## Exemple

```js title="function"
const pathToFile = "C:/Mobirise/file.json";

Bridge.loadLocalFile(pathToFile, (content) => {
  alert(JSON.stringify(content));
});
```

## En résumé

La fonction `Bridge.loadLocalFile` de Mobirise charge le contenu d'un fichier local spécifié en utilisant un encodage UTF-8 et fournit le résultat à une fonction de rappel fournie.
