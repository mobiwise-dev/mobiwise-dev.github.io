# mbrApp.changePageSettings

```js
function(a, e, d) {
  this.fire("changePageSettings",
    this.currentPageSettings);
  e = e.toString().trim();
  this.pageNameFullEdit || "fileName" !== a || (e += this.$pageSettings.find('[data-page-settings="fileName"]').next().html());
  var c = this.Core.changePageSettings(this.currentPageSettings, a, e);
  c ? (this.$pagesList.find('[data-page="' + this.currentPageSettings.replace('"', '\\"') + '"]').attr("data-page", c), this.currentPageSettings = c) : "title" === a && (a = e, e = this.$pagesList.find('[data-page="' + this.currentPageSettings.replace('"', '\\"') + '"]'), e.attr("data-title", a), d && b(d.target).closest(".list").length ?
    this.$pageSettings.find('[data-page-settings="title"]').val(a) : e.find("span:eq(0)").html(a));
  this.fire("changedPageSettings", this.currentPageSettings)
}
```

La fonction `mbrApp.changePageSettings` de Mobirise permet de changer les paramètres d'une page. Elle prend trois arguments :

- `a` : représente le paramètre que l'on souhaite modifier.
- `e` : est la nouvelle valeur pour ce paramètre.
- `d` : optionnel et permet de préciser un élément de la page à mettre à jour en fonction du changement effectué.

La fonction commence par déclencher l'événement `changePageSettings` avec les paramètres actuels de la page. Ensuite, elle vérifie si le paramètre `a` est égal à `fileName` et si le nom complet de la page n'est pas en édition. Si c'est le cas, elle ajoute la nouvelle valeur à l'élément `fileName` dans les paramètres de la page.

Ensuite, la fonction appelle la fonction `Core.changePageSettings` qui effectue le changement des paramètres de la page. Si le changement est effectué avec succès, la fonction met à jour l'élément correspondant dans la liste des pages.

Si le paramètre `a` est égal à `title`, la fonction met à jour le titre de la page dans la liste des pages et dans l'interface de l'application. Si l'argument `d` est spécifié, la fonction met également à jour l'élément de la page correspondant.

Enfin, la fonction déclenche l'événement `changedPageSettings` avec les nouveaux paramètres de la page.

## Exemple

```js
mbrApp.changePageSettings("title", "New Title");
```

## En résumé

Cette fonction change les paramètres d'une page.
