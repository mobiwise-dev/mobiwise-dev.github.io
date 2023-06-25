---
sidebar_position: 1
---

# mbrApp.Core.addPage

```js
function(c, n, d, f, g) {
  if (!d) {
    var m = !0,
      p = this.Core.addPage(c);
    d = p.name;
    f = f || p.title;
    g && (a.Core.resultJSON[d].components = g)
  }
  if (!d) return !1;
  f = a.escapeHtml(f);
  this.fire("addPage", d);
  p = b(["<li" + (n ? ' class="main-page"' : "") + ">", '<a href="javascript:void(0)" class="clearfix">', '<span data-tooltipster="bottom"' + (n ? "" : ' title="' + e("Drag Page") + '"') + ">" + f + "</span>", '<div class="btn-group">', '<button class="btn btn-primary app-page-clone" data-tooltipster="bottom" title="' + e("Clone Page") + '">', '<i class="mbr-icon-copy"></i></button>', '<button class="btn btn-info app-page-settings" data-tooltipster="bottom" title="' +
    e("Page Settings") + '">', '<i class="mbr-icon-cog"></i></button>', n ? "" : '<button class="btn btn-material-red app-page-remove" data-tooltipster="bottom" title="' + e("Remove Page") + '"><i class="mbr-icon-trash"></i></button>', '<button class="btn btn-info app-page-ok" data-tooltipster="bottom" title="' + e("OK") + '">', '<i class="mbr-icon-check"></i></button></div></a></li>'
  ].join(""));
  p.find(">a").attr({
    "data-page": d,
    "data-title": f
  });
  p = this.applyFilter("addPage", p, d);
  var h = this.$pagesList.find(".list .sortable-container");
  m ? (c ? (m = this.$pagesList.find('.list li > a[data-page="' + c + '"]').parent(), m.hasClass("main-page") ? h.prepend(p) : m.after(p)) : h.prepend(p), l(h)) : p.hasClass("main-page") ? h.before(p) : h.append(p);
  this.fire("addedPage", d, arguments);
  return p
}
```

La fonction `addPage` est une fonction dont le but est de permettre l'ajout d'une page à un projet Mobirise. Elle prend en entrée les arguments suivants :

c : le nom de la page existante à partir de laquelle la nouvelle page doit être ajoutée (optionnel)<br/>
n : un booléen indiquant si la page doit être ajoutée en tant que page principale (optionnel)<br/>
d : le nom de la nouvelle page (optionnel)<br/>
f : le titre de la nouvelle page (optionnel)<br/>
g : un objet contenant les composants à ajouter à la nouvelle page (optionnel)

:::info Note
Si le paramètre `d` n'est pas défini, la fonction va ajouter une nouvelle page au projet Mobirise, avec le titre et les composants spécifiés.<br/>
Si `d` est défini, la fonction va créer une nouvelle page avec le nom spécifié, et les paramètres `f` et `g` seront ignorés.<br/>
Si `c` est défini, la nouvelle page sera ajoutée après la page nommée `c`. Si `n` est vrai, la nouvelle page sera ajoutée en tant que page principale.
:::

La fonction retourne un objet **jQuery** représentant la nouvelle page ajoutée.

## Exemple

```js
addPage(
  "À propos", // Nom de la page ou 'undefined'
  false, // Définit si page principale
  "contact.html", // Nom de la page
  "Page de contact", // Titre de la page
  {
    /* ici les composants de la page de contact */
  }
);
```

## En résumé

En résumé, la fonction 'addPage' est utilisée pour ajouter facilement une nouvelle page à un projet Mobirise, en fournissant le nom, le titre et les composants de la nouvelle page.
