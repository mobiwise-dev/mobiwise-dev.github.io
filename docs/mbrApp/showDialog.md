# mbrApp.showDialog

```js
function(a) {
  var b = !1;
  this.$body.find(".bootbox.modal").length && this.$body.find(".bootbox.modal").each(function(e, h) {
    c(h).find(".modal-title").length && c(h).find(".modal-title").html() === a.title ? b = !0 : c(h).find(".modal-body").length && c(h).find(".modal-body").html() === a.body && (b = !0)
  });
  if (!b) {
    var e = this;
    a = a || {};
    var h = {};
    a.cancel && (h.cancel = {
      label: a.cancelLabel || k("Cancel"),
      className: "btn-default",
      callback: function() {
        a.cancel.call(g, g)
      }
    });
    a.success && (h.success = {
      label: a.successLabel || k("Ok"),
      className: "btn-primary",
      callback: function() {
        a.success.call(g, g)
      }
    });
    if (a.buttons)
      for (var m in a.buttons)(function(a) {
        h[m] = {
          label: a.label || "",
          className: (a.className || "") + " " + (/btn-primary|btn-default/.test(a.className) ? "" : a.default ? "btn-primary" : "btn-default"),
          callback: function() {
            if (a.callback) return a.callback()
          }
        }
      })(a.buttons[m]);
    var g = bootbox.dialog({
      size: a.size,
      title: a.title,
      className: a.className + (a.flex ? " mbr-flex" : ""),
      message: a.body || "\x3c!-- Empty body --\x3e",
      buttons: h,
      onEscape: a.oncancel || function() {},
      show: !1
    });
    a.id && g.attr("id", a.id);
    for (var f in a.buttons) g.find("[data-bb-handler=" + f + "]").attr("name", f);
    a.create && a.create.call(g, g);
    g.find("select").dropdown({
      absolutePos: !0,
      align: "right"
    });
    g.find("input.mbr-color").each(function() {
      var a = c(this),
        b = function(a, b) {
          b = b.map(function(a) {
            return a.toUpperCase()
          });
          if (-1 == b.indexOf(a.toUpperCase())) return !0
        };
      a.spectrum("destroy").spectrum({
        showButtons: !1,
        preferredFormat: "hex",
        allowEmpty: !0,
        showInput: !0,
        showPaletteOnly: !0,
        togglePaletteOnly: !0,
        togglePaletteMoreText: k("More") + " >",
        togglePaletteLessText: k("Less") + " <",
        replacerClassName: a.hasClass("pull-right") ? "pull-right" : "",
        appendTo: "#innerFontDialog",
        maxSelectionSize: 1,
        palette: d.getThemeColorsSet(7),
        move: function(b) {
          a.val(b && b.toHexString());
          a.trigger("change")
        },
        hide: function(a) {
          if (a) {
            var c;
            (c = d.projectSettings.theme.additionalSetColors) ? b(a.toHexString(),
              c) && b(a.toHexString(), d.getThemeColorsSet(7)[0]) && (7 > c.length ? c.push(a.toHexString()) : (c.unshift(a.toHexString()), c.pop())): b(a.toHexString(), d.getThemeColorsSet(7)[0]) ? d.projectSettings.theme.additionalSetColors = [a.toHexString()] : d.projectSettings.theme.additionalSetColors = []
          }
        }
      })
    });
    a.show && a.show.call(g, g);
    g.on("shown.bs.modal", function() {
      e.fire("modalDialogShow", g, a)
    });
    c(g).on("hide.bs.modal", function() {
      g.find("select").each(function() {
        c(c(this).data("dropdownjs-ul")).remove()
      });
      g.find("input.mbr-color").spectrum("hide");
      e.fire("modalDialogHide", g)
    });
    g.on("hidden.bs.modal", function() {
      d.$body.find(".modal:visible").length && d.$body.addClass("modal-open");
      g.find("input.mbr-color").spectrum("destroy");
      a.onhide && (a.onhide.call(g, g), console.log("Warning: Using showDialog.onhide is depracated, use showDialog.hide instead"));
      a.hide && a.hide.call(g, g);
      e.fire("modalDialogHidden", g)
    });
    g.modal("show");
    return g
  }
}
```

La fonction `mbrApp.showDialog` de Mobirise est une fonction qui crée une boîte de dialogue personnalisée à l'aide de la bibliothèque [bootbox.js](https://bootboxjs.com/). Cette boîte de dialogue peut contenir un titre, un corps et des boutons pour effectuer des actions. La fonction vérifie d'abord si une boîte de dialogue avec le même titre et corps existe déjà, afin d'éviter la création de doublons.

La fonction prend en entrée un objet contenant plusieurs paramètres optionnels, tels que le titre, le corps, les boutons, la taille, etc. En fonction des paramètres fournis, la boîte de dialogue est configurée avec les boutons appropriés et les actions correspondantes sont définies.

La fonction utilise également la bibliothèque `spectrum.js` pour ajouter un sélecteur de couleur à certains éléments de la boîte de dialogue.

Enfin, la fonction renvoie l'objet de la boîte de dialogue créée, qui peut être utilisé pour effectuer des opérations ultérieures sur la boîte de dialogue, comme la fermeture.

## Exemple

```js
mbrApp.shoDialog({
  title: "Confirmer l'action",
  body: "Voulez-vous vraiment effectuer cette action ?",
  success: function () {
    // Code à exécuter lorsque l'utilisateur clique sur le bouton "OK"
    alert("Action confirmée !");
  },
  cancel: function () {
    // Code à exécuter lorsque l'utilisateur clique sur le bouton "Annuler"
    alert("Action annulée.");
  },
});
```

## En résumé

La fonction crée une boîte de dialogue personnalisée. Cette boîte de dialogue peut contenir un titre, un corps et des boutons pour effectuer des actions.
