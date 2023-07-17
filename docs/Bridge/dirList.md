---
description: All about Bridge.dirList Mobirise function
keywords:
  - Mobirise
  - Function
  - Bridge.dirList
tags:
  - Mobirise
  - Function
  - Bridge.dirList
---

# Bridge.dirList

```js
function(c, d, e) {
  if (!c || !d) return !1;
  c = k.normalize(g(c));
  e = Object.assign({
    names: ["*"],
    filter: 1,
    recursive: !0
  }, e);
  let f = b(e.filter),
    t = a(e.names),
    l = [];
  if (e.recursive) {
    let a = P.walk(c);
    ["file", "directory"].forEach(function(b) {
      a.on(b, this)
    }, function(a, b, d) {
      f(b.type) && t(b.name) && l.push((a + "/" + b.name).substr(c.length + 1).replace(/\\/g, "/"));
      d()
    });
    a.on("end", () => d(l))
  } else n.readdir(c, function(a, b) {
    if (a) d([]);
    else {
      if (b.length) {
        a = 0;
        for (var e = b.length; a < e; a++) {
          var g = k.resolve(c, b[a]);
          g = n.lstatSync(g);
          g = g.isFile() ? "file" :
            g.isDirectory() ? "directory" : "any";
          f(g) && t(b[a]) && l.push((c + "/" + b[a]).substr(c.length + 1).replace(/\\/g, "/"))
        }
      }
      d(l)
    }
  })
}
```

La fonction permet de lister les fichiers et les répertoires dans un répertoire donné.

La fonction prend trois paramètres. `c` le chemin du répertoire à lister. `d` une fonction de rappel qui sera appelée avec un tableau contenant la liste des fichiers et répertoires une fois qu'ils auront été trouvés. `e` un objet contenant des options facultatives pour la fonction.

La fonction commence par normaliser le chemin du répertoire en utilisant la fonction `g` et en le passant à la fonction normalize de l'objet `k`. Ensuite, elle définit les options par défaut pour la liste des noms de fichiers, le filtre et la récursivité. La fonction `b` est utilisée pour créer une fonction de filtre basée sur les options fournies. La fonction `a` est utilisée pour créer une fonction de correspondance de nom de fichier en fonction des options fournies.

Si l'option recursive est activée, la fonction utilise la méthode `P.walk` pour parcourir le répertoire et appelle la fonction de rappel pour chaque fichier ou répertoire trouvé. Les fichiers et les répertoires sont filtrés et ajoutés au tableau `l` pour être renvoyés à la fonction de rappel.

Si l'option `recursive` n'est pas activée, la fonction utilise la méthode `readdir` de l'objet `n` pour lire les fichiers et les répertoires dans le répertoire donné. Les fichiers et les répertoires sont filtrés et ajoutés au tableau `l` pour être renvoyés à la fonction de rappel.

Enfin, la fonction appelle la fonction de rappel avec le tableau `l` contenant les fichiers et les répertoires trouvés.

## Exemple

```js
Bridge.dirList(
  "/myDirectory",
  (fileList) => {
    alert(fileList);
  },
  {
    names: ["*.txt"], // Cherche tous les fichiers avec l'extension .txt
    filter: 2, // 1 = tous les fichiers, 2 = en fonction de l'extension (ex = names"*.txt), 3 = taille (minSize et maxSize), 4 = date (minDate et maxDate)
    recursive: true, // Recherche récursive
  }
);
```

## En résumé

La fonction permet de lister les fichiers et les répertoires dans un répertoire donné en utilisant des options facultatives pour filtrer les résultats. Elle peut être utilisée pour accéder aux fichiers et répertoires sur le système de fichiers local. La fonction renvoie un tableau contenant les fichiers et les répertoires trouvés, qui est passé à une fonction de rappel fournie en tant que paramètre.
