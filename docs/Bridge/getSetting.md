---
sidebar_position: 1
tags:
  - Bridge
---

# Bridge.getSettings

```js
function(a, b) {
  if (!a || !b) return !1;
  a = a.match(/(\w+\/)*(\w+)/i)[0];
  if ("win32" === process.platform) {
    var c = a.split("/");
    let d = c.pop(),
      e = "\\Software\\Mobirise.com\\Mobirise";
    c.length && (e += "\\");
    (new x({
      hive: x.HKCU,
      key: e + c.join("\\")
    })).get(d, (a, c) => {
      b(a ? "" : c && c.value || "")
    })
  } else c = g(e.dataLocation + "/settings.json"), n.readFile(c, (c, e) => {
    if (c) b("");
    else {
      c = {};
      try {
        c = JSON.parse(e.toString())
      } catch (l) {}
      e =
        a.replace(/\//g, ".");
      void 0 !== c[e] ? b(c[e]) : b("")
    }
  })
}
```

Cette fonction récupère les paramètres de configuration de l'application en fonction de la clé de configuration spécifiée en paramètre.

Le code de la fonction vérifie d'abord que les deux paramètres `a` et `b` sont définis et non nuls. Le paramètre `a` est une chaîne de caractères qui représente la clé de configuration à récupérer.

Ensuite, la fonction extrait le nom de la clé de configuration à partir de la chaîne a en utilisant une expression régulière.

Si la plateforme est Windows (`process.platform` renvoie `win32`), la fonction recherche la clé de configuration dans le registre de Windows, dans un emplacement spécifique à Mobirise. Si la plateforme n'est pas Windows (macOS, linux), la fonction recherche la clé de configuration dans un fichier JSON situé dans le dossier de données de l'application.

Si la clé de configuration est trouvée, la fonction appelle la fonction de rappel `b` avec la valeur de la clé de configuration en tant que paramètre. Si la clé de configuration n'est pas trouvée, la fonction appelle la fonction de rappel `b` avec une chaîne vide en tant que paramètre.

## Exemple

```js
Bridge.getSettings("language", (setting) => {
  if (setting === "en") {
    alert("I speak english.");
  } else {
    alert("You can change the interface language.");
  }
});
```

## En résumé

La fonction permet de récupérer les paramètres de configuration de l'application, tels que la langue utilisée ou l'emplacement de sauvegarde des projets. Elle prend deux arguments : le nom du paramètre à récupérer et une fonction de rappel qui sera appelée avec le résultat de la récupération.
