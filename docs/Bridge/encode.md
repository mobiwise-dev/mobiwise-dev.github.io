---
sidebar_position: 1
tags:
  - Bridge
---

# Bridge.encode

```js
function(a, b) {
	let c;
	try {
		c = w.AES.encrypt(a.toString(), "d6F3Efeq")
	} catch (d) {
		b && b("");
		return
	}
	b && b(c.toString())
}
```

La fonction `Bridge.encode` prend deux paramètres : `a` et `b`.

Le premier paramètre, `a`, est une donnée qui doit être encodée. Cette donnée peut être de n'importe quel type, mais la fonction la convertit en une chaîne de caractères en utilisant la méthode `toString()`.

Le deuxième paramètre, `b`, est une **fonction de rappel facultative** qui sera appelée lorsque l'encodage sera terminé. Cette fonction prend un seul argument, qui est la version encodée de la donnée `a`.

Dans la fonction elle-même, la variable `c` est déclarée sans être initialisée. Ensuite, la fonction tente d'encrypter la donnée `a` en utilisant l'algorithme de chiffrement [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) avec la clé `d6F3Efeq`.

Si l'encryptage réussit, la version encryptée de la donnée `a` est assignée à la variable `c`. Ensuite, si la fonction de rappel `b` a été fournie, elle est appelée avec l'argument `c.toString()`, qui convertit l'objet `c` en une chaîne de caractères.

Si l'encryptage échoue pour une raison quelconque, la fonction de rappel `b` est appelée avec une chaîne vide en argument `("")`, et la fonction se termine.

## Exemple

```js title='Function'
Bridge.encode("Hello World!", function (encodedData) {
  alert(encodedData);
});
```

```js title='Result'
U2FsdGVkX1/LqwF/oxwT/VgLst64FViH1Qn8+7WF1YY=
```

## En résumé

La fonction `Bridge.encode` prend une donnée `a`, la chiffre à l'aide de l'algorithme [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) et renvoie la représentation sous forme de chaîne de caractères de la donnée chiffrée via la fonction `b`.
