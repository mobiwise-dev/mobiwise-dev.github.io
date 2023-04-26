# mbrApp.alertDlg

```js
function(a) {
  return mbrApp.showDialog({
    body: a,
    success: function() {}
  })
}
```

La fonction `mbrApp.alertDlg` de Mobirise affiche une boîte de dialogue d'alerte.

Elle prend un argument 'a', qui est le texte qui sera affiché dans la boîte de dialogue. Cette valeur sera passée en tant que corps du dialogue à la fonction `mbrApp.showDialog`.

## Exemple

```js
mbrApp.alertDlg("Your message");
```

## En résumé

Cette fonction `mbrApp.alertDlg` crée une boîte de dialogue d'alerte contenant le texte passé en argument, et affiche cette boîte de dialogue à l'utilisateur. Lorsque l'utilisateur appuie sur le bouton "OK" de la boîte de dialogue, la fonction `success` est appelée, mais elle ne fait rien.
