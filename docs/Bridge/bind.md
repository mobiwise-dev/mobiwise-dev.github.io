---
sidebar_position: 1
tags:
  - Bridge
---

# Bridge.bind

```js
function(a, b) {
	a = "on" + a.toLowerCase();
	this[a] || (this[a] = []);
	this[a].push(b)
}
```

La fonction `Bridge.bind` permet de lier une fonction de rappel à un événement particulier.

Elle prend deux paramètres : `a` et `b`.

Le premier paramètre, `a`, est le nom de l'événement à lier à la fonction de rappel. Il doit être une chaîne de caractères représentant le nom de l'événement, sans le préfixe `on`. Par exemple, si nous voulons lier une fonction de rappel à l'événement `click`, nous devons passer `click` comme premier paramètre.

Le deuxième paramètre, `b`, est la fonction de rappel que nous voulons lier à l'événement. Cette fonction prendra en charge le traitement de l'événement lorsqu'il se produira.

Dans la fonction elle-même, la première chose que la fonction fait est de convertir le nom de l'événement en minuscules et de lui ajouter le préfixe `on`. Ensuite, elle vérifie si une liste d'événements a déjà été créée pour cet événement. Si ce n'est pas le cas, elle crée une nouvelle liste.

Enfin, elle ajoute la fonction de rappel fournie à la liste d'événements pour cet événement.

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

La fonction `Bridge.bind` permet de lier une fonction de rappel à un événement spécifique, en créant une liste d'événements pour cet événement si elle n'existe pas déjà, puis en ajoutant la fonction de rappel à cette liste.
