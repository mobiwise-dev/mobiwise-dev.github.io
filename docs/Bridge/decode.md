---
description: All about Bridge.decode Mobirise function
keywords:
  - Mobirise
  - Function
  - Bridge.decode
tags:
  - Mobirise
  - Function
  - Bridge.decode
---

# Bridge.decode

```js
function(a, b) {
	if (!b) return !1;
	var c = "";
	try {
		c = w.AES.decrypt(a, "d6F3Efeq").toString(w.enc.Utf8)
	} catch (d) {
		b("");
		return
	}
	b(c)
}
```

La fonction `Bridge.decode` prend deux paramètres : `a` et `b`.

Le premier paramètre, `a`, est une chaîne de caractères encodée à décoder. Cette chaîne de caractères est censée avoir été encodée à l'aide de la fonction "Bridge.encode" ou une autre fonction qui utilise le même algorithme de chiffrement et la même clé.

Le deuxième paramètre, `b`, est une fonction de rappel qui sera appelée lorsque le décodage sera terminé. Cette fonction prend un seul argument, qui est la version décodée de la chaîne de caractères `a`.

Dans la fonction elle-même, la première chose que la fonction vérifie est si la fonction de rappel `b` a été fournie. Si ce n'est pas le cas, la fonction renvoie `false`.

Ensuite, la fonction essaie de décoder la chaîne de caractères `a` en utilisant l'algorithme de déchiffrement [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) avec la clé `d6F3Efeq`. Si le décodage réussit, la version décodée de la chaîne de caractères est assignée à la variable `c`.

Enfin, si le décodage réussit, la fonction de rappel `b` est appelée avec l'argument `c`, qui est la version décodée de la chaîne de caractères `a`. Si le décodage échoue pour une raison quelconque, la fonction de rappel `b` est appelée avec une chaîne vide en argument `("")`.

## Exemple

```js title='Function'
Bridge.decode("U2FsdGVkX1/LqwF/oxwT/VgLst64FViH1Qn8+7WF1YY=", function (decodedData) {
  alert(decodedData);
});
```

```js title='Result'
Hello World!
```

## En résumé

La fonction `Bridge.decode` décode une chaîne de caractères encodée à l'aide de l'algorithme [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) avec une clé spécifique, et appelle une fonction de rappel avec la version décodée de cette chaîne de caractères.
