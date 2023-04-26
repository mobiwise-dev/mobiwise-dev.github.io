---
sidebar_position: 1
tags:
  - Bridge
---

# Bridge.setSettings

```js
function(a, b, c) {
  if (!a) return !1;
  a = a.match(/(\w+\/)*(\w+)/i)[0];
  if ("win32" === process.platform) {
    var d = a.split("/");
    let e = d.pop(),
      f = "\\Software\\Mobirise.com\\Mobirise";
    d.length && (f += "\\");
    d = new x({
      hive: x.HKCU,
      key: f + d.join("\\")
    });
    d.create(a => {
      a && c && c(!1)
    });
    d.set(e, "REG_SZ", b.toString(), a => {
      c && c(!a)
    })
  } else {
    var f = function(f) {
      f = f ? JSON.parse(f) : {};
      let g = a.replace(/\//g, ".");
      f[g] = b.toString();
      let l = JSON.stringify(f, null, 4);
      e._createDir(e.dataLocation, a => {
        a || n.writeFile(d, l, function(a) {
          e._unlockFile(d);
          c && c(!a)
        })
      })
    };
    let d = g(e.dataLocation + "/settings.json");
    e._lockFile(d,
      function() {
        n.access(d, function(a) {
          a ? f() : n.readFile(d, (a, b) => {
            a ? (e._unlockFile(d), c && c(!1)) : f(b)
          })
        })
      })
  }
}
```

Cette fonction est utilisée pour définir les **paramètres de l'application**. Elle prend trois arguments : `a`, `b` et `c`.

Le premier argument `a` est une chaîne de caractères qui représente le nom de la clé de registre ou le chemin vers le fichier JSON qui contiendra les paramètres de l'application.

Le deuxième argument `b` est la valeur à stocker dans la clé de registre ou le fichier JSON.

Le troisième argument `c` est une fonction de rappel **facultative** qui est appelée une fois que la valeur a été stockée avec succès dans la clé de registre ou le fichier JSON.

La fonction commence par vérifier que le premier argument `a` n'est pas `null` ou `undefined`. Ensuite, elle utilise une expression régulière pour extraire le nom de la clé de registre ou le chemin vers le fichier JSON. Si le système d'exploitation est Windows, la fonction utilise le module `Registry` de [Node.js](https://nodejs.org/) pour accéder à la clé de registre et stocker la valeur. Sinon, elle stocke la valeur dans le fichier JSON.

## Exemple

```js
Bridge.setSettings("appSettings/darkMode", "true", (success) => {
  if (success) {
    alert("Dark mode is on.");
  } else {
    alert("Dark mode is off.");
  }
});
```

## En résumé

Cette fonction est utilisée pour stocker des **paramètres d'application** tels que les préférences de l'utilisateur et les informations d'identification dans la clé de registre [Windows](https://www.microsoft.com/fr-fr/windows) ou le fichier JSON si Mac ou .
