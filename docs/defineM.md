---
sidebar_position: 8
---

# defineM

```js
function(b, c, h) {
  for (var g = {}, d = 0; 3 > d; d++) "string" == typeof arguments[d] ? g.name = arguments[d] : "function" == typeof arguments[d] ? g.func = arguments[d] : "object" == typeof arguments[d] && arguments[d] instanceof Array && (g.deps = arguments[d]);
  if (g.func) {
    d = document.getElementsByTagName("script");
    d = (d = d[d.length - 1]) && d.src || "";
    var f = /^([^?]*)\/[^?]*/.exec(window.location.href)[1] + "/";
    d.startsWith(f) && (d = d.replace(f, ""));
    g.path = d;
    g.name = g.name || g.path.replace(/\.js$/, "");
    e.push(g);
    a();
    return g
  }
  console.error("Error: no function while module define", arguments)
}
```

Cette fonction est une implémentation simplifiée d'un système de modules en JavaScript.

La fonction `defineM` prend trois arguments (`b`, `c` et `h`) qui sont tous facultatifs et peuvent être de différents types :

Si l'argument est une chaîne de caractères, il est considéré comme le nom du module.<br/>
Si l'argument est une fonction, il est considéré comme le corps du module.<br/>
Si l'argument est un tableau, il est considéré comme la liste des dépendances du module.

La fonction crée un objet `g` et `y` stocke les informations fournies sous forme d'arguments. Si une fonction est fournie comme argument, elle est stockée dans la propriété `func` de l'objet `g`. Si un nom est fourni comme argument, il est stocké dans la propriété `name` de l'objet `g`. Si une liste de dépendances est fournie, elle est stockée dans la propriété `deps` de l'objet `g`.

La fonction récupère également le chemin du script actuel (à partir des balises `script` dans le document HTML) et stocke le chemin dans la propriété `path` de l'objet `g`.

Enfin, la fonction ajoute l'objet `g` à un tableau `e` qui contient tous les modules définis jusqu'à présent, puis elle appelle la fonction `a` (qui n'est pas définie dans le code) et retourne l'objet `g`.

Si aucun argument de type fonction n'est fourni à la fonction `defineM`, une erreur est renvoyée via la fonction `console.error`.

## Exemple

```js
defineM(
  "my-extension",
  function (mbrApp) {
    mbrApp.regExtension({
      name: "my-extension",
      events: {
        clickedButton: function () {
          alert("Le bouton a été cliqué !");
        },
      },
    });
  },
  [mbrApp]
);
```

:::info Note
Ce code ne fait pas grand-chose de pratique, mais il illustre comment la fonction `regExtension` peut être utilisée pour enregistrer des fonctionnalités personnalisées dans Mobirise.
:::

## En résumé

Cette fonction `mbrApp.alertDlg` crée une boîte de dialogue d'alerte contenant le texte passé en argument, et affiche cette boîte de dialogue à l'utilisateur. Lorsque l'utilisateur appuie sur le bouton "OK" de la boîte de dialogue, la fonction `success` est appelée, mais elle ne fait rien.
