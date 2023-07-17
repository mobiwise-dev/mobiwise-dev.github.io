---
description: All about mbrApp.Accordion Mobirise function
keywords:
  - Mobirise
  - Function
  - Accordion
tags:
  - Mobirise
  - Function
  - Accordion
---

# Bridge.url2sys

```js
function(a) {
  a = decodeURI(a);
  return a = /^file:\/\/\/\w+:/.test(a) ? a.replace(/^file:\/\/\/(\w+:)/, "$1").replace(/\//g,
    "\\") : a.replace(/^file:\/\//, "")
}
```

La fonction `Bridge.url2sys` de Mobirise est utilisée pour convertir une URL en un chemin de fichier système valide.

La fonction prend une chaîne de caractères en entrée, représentant une URL.

La fonction utilise la méthode `decodeURI` pour décoder l'URL, en remplaçant les caractères spéciaux par leurs équivalents en texte brut.

Ensuite, la fonction teste si l'URL commence par le préfixe `file:///` suivi d'une lettre de lecteur (par exemple, `file:///C:/` pour le lecteur C: sur Windows). Cela est fait en utilisant une expression régulière : `/^file:///\w+:/`

Si l'URL correspond au modèle `file:///` suivi d'une lettre de lecteur, la fonction utilise la méthode `replace` pour supprimer le préfixe `file:///` suivi de la lettre de lecteur. Ensuite, tous les caractères `/` sont remplacés par des caractères ` ` pour créer un chemin de fichier système valide sur les systèmes d'exploitation Windows.

Si l'URL ne correspond pas au modèle `file:///` suivi d'une lettre de lecteur, la fonction vérifie simplement si l'URL commence par `file://` et, si c'est le cas, supprime le préfixe `file://`.

Le résultat final est renvoyé par la fonction, qui est le chemin de fichier système valide correspondant à l'URL donnée.

## Exemple

```js title="function"
var url = "file:///C:/Users/Utilisateur/Documents/fichier.html";
var pathSystem = Bridge.url2sys(url);
```

```js title="Result"
C:\Users\Utilisateur\Documents\fichier.html

```

## En résumé

La fonction `Bridge.url2sys` est utilisée pour convertir des URL en chemins de fichier système valides, en particulier pour les systèmes d'exploitation Windows. Cela peut être utile pour traiter les fichiers locaux ou effectuer des opérations sur les chemins de fichier.
