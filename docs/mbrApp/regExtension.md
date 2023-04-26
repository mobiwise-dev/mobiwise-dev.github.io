# mbrApp.regExtension

```js
function(a) {
  if (!a.name || "undefined" !== typeof k[a.name]) return !1;
  k[a.name] = a;
  if (a.global)
    for (var b in a.global) b in this ? console.error("Error re-definition method mbrApp." + b + " by module " + a.name) : this[b] = a.global[b];
  if (a.events)
    for (var c in a.events) this.on(c, a.events[c]);
  if (a.filters)
    for (c in a.filters) this.addFilter(c, a.filters[c]);
  f && f.debug & 8 && console.log("mbrApp.regExtension" + a.name);
  return !0
}
```

La fonction `mbrApp.regExtension` de Mobirise prend un objet en paramètre, représentant une extension à enregistrer dans l'application.

Elle commence par vérifier si l'objet a un nom et si ce nom n'a pas déjà été enregistré dans l'application. Si l'un de ces critères n'est pas rempli, la fonction retourne faux et l'extension n'est pas enregistrée.

Si l'extension est valide, la fonction l'enregistre dans un objet `k` en utilisant le nom comme clé. Si l'extension a une propriété `global`, la fonction vérifie si les méthodes correspondantes existent déjà dans l'application, et si c'est le cas, elle affiche une erreur dans la console. Si les méthodes n'existent pas, elles sont ajoutées à l'application.

Si l'extension a une propriété `events`, la fonction enregistre les écouteurs d'événements correspondants pour l'application. Si l'extension a une propriété `filters`, la fonction ajoute les filtres correspondants à l'application.

Enfin, si le mode de débogage est activé `f.debug & 8`, la fonction affiche un message de log indiquant que l'extension a été enregistrée. Elle retourne ensuite `true` pour indiquer que l'enregistrement s'est déroulé avec succès.

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

:::tip Note
Ce code ne fait pas grand-chose de pratique, mais il illustre comment la fonction `regExtension` peut être utilisée pour enregistrer des fonctionnalités personnalisées dans Mobirise.
:::

## En résumé

La fonction permet d'ajouter des fonctionnalités personnalisées à Mobirise en utilisant des écouteurs d'événements, des filtres et d'autres fonctionnalités.
