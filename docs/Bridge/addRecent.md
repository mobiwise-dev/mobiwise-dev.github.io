---
description: All about Bridge.addRecent Mobirise function
keywords:
  - Mobirise
  - Function
  - Bridge.addRecent
tags:
  - Mobirise
  - Function
  - Bridge.addRecent
---

# Bridge.addRecent

```js
function(a, b) {
	if (a && a.path) {
		var e = c._lastTopRecent;
		if (e && a && e.path == a.path && e.mbrsite === a.mbrsite) {
			var d = !0,
				f;
			for (f in a)
				if (a[f] != e[f]) {
					d = !1;
					break
				}
			if (d) {
				b(!0);
				return
			}
		}
		c._lastTopRecent = a;
		c.getRecentsList(function(e) {
			e = e || [];
			for (var d = 0; d < e.length; d++)
				if (e[d].path == a.path) {
					d = e.splice(d, 1)[0] || {};
					a.name = a.name || d.name;
					a.screenshot = a.screenshot || d.screenshot;
					break
				}
			e.unshift(a);
			c.paranoicSaveLocal(c.dataLocation + "/" + c._recentsFile, JSON.stringify(e), function(a) {
				a || console.error("Error: unable to update recent list");
				b(a)
			})
		})
	} else b && b(!1)
}
```

La fonction permet d'ajouter un élément récent dans la liste de fichiers ou de pages visités récemment.

Elle prend deux paramètres : `a` et `b`.

Le premier paramètre, `a`, représente l'élément récent à ajouter à la liste. Il doit être un objet JavaScript avec les propriétés suivantes :<br/>

1. `path` = chemin vers le fichier ou la page
2. `name` = nom de l'élément récent
3. `screenshot` = capture d'écran de l'élément récent
4. `mbrsite` = site web associé à l'élément récent

Le deuxième paramètre, `b`, est une fonction de rappel qui sera appelée lorsque l'ajout sera terminé. Cette fonction prend un seul argument, qui est un booléen indiquant si l'ajout a réussi ou non.

Dans la fonction elle-même, la première chose que la fonction vérifie est si l'objet `a` existe et possède la propriété `path`. Si ce n'est pas le cas, la fonction de rappel `b` est appelée avec `false` comme argument.

Ensuite, la fonction récupère l'élément récent le plus récemment visité enregistré dans la propriété `\_lastTopRecent` de l'objet `c`. Si cet élément est identique à celui que l'on souhaite ajouter, la fonction de rappel `b` est appelée avec `true` comme argument (l'élément n'est pas ajouté car il est déjà le plus récent).

Si l'élément récent n'est pas déjà le plus récent, la propriété `\_lastTopRecent` est mise à jour avec l'objet `a`.

La fonction `getRecentsList` est appelée pour récupérer la liste des éléments récents enregistrée localement. Si la liste n'existe pas encore, une liste vide est retournée. La liste des éléments récents est ensuite parcourue pour trouver l'élément avec le même `path` que celui que l'on souhaite ajouter. Si cet élément existe déjà dans la liste, il est supprimé et remplacé par l'élément que l'on souhaite ajouter. Sinon, l'élément que l'on souhaite ajouter est simplement ajouté en haut de la liste.

Enfin, la liste mise à jour est enregistrée localement en utilisant la méthode `paranoicSaveLocal`. La fonction de rappel `b` est appelée avec un booléen indiquant si l'ajout a réussi ou non.

## Exemple

```js
Bridge.addRecent(recentPage, function (success) {
  if (success) {
    alert("Recently added item successfully!");
  } else {
    alert("Unable to add the recent item.");
  }
});
```

## En résumé

La fonction `Bridge.addRecent` permet d'ajouter un élément récent à la liste de fichiers ou de pages visités récemment, et de sauvegarder cette liste localement.
