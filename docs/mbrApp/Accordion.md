---
description: All about mbrApp.Accordion Mobirise function
keywords:
  - Mobirise
  - Function
  - Accordion
tags:
  - Mobirise
  - Function
  - Accordion
---

# mbrApp.Accordion

```js
function(a, b, e) {
  e = c.extend({
    autoCollapse: !0
  }, e);
  a = c(a);
  b = c(b);
  a.click(function() {
    var c = b.eq(a.index(this));
    e.autoCollapse && b.not(c).slideUp();
    c.slideToggle()
  });
  e.autoCollapse ? (b.hide(), c(e.start_panel || b.get(0)).show()) : b.show();
  return {
    collapse: function(a) {
      c(a || b).hide()
    },
    expand: function(a) {
      c(a || b).show()
    },
    open: function(a) {
      b.hide();
      c(a).show()
    },
    close: function(a) {
      c(a).hide()
    }
  }
}
```

La fonction `mbrApp.Accordion` de Mobirise crée un effet d'accordéon pour une liste d'éléments HTML. Elle prend trois paramètres :

- a : le sélecteur des éléments déclencheurs (généralement des liens ou des boutons)
- b : le sélecteur des éléments à afficher ou à masquer (généralement des divs ou des listes)
- e : un objet de configuration optionnel qui peut contenir une propriété 'autoCollapse' pour indiquer si les éléments doivent se refermer automatiquement lorsqu'un autre est ouvert.

La fonction ajoute un gestionnaire d'événement `click` sur les éléments déclencheurs, qui va afficher ou masquer les éléments correspondants en utilisant la méthode `slideToggle()` de [jQuery](https://jquery.com/). Si l'option `autoCollapse` est activée, les éléments déjà ouverts seront automatiquement masqués lorsque l'utilisateur en ouvre un autre.

La fonction renvoie un objet avec quatre méthodes :

- collapse : masque les éléments correspondant au sélecteur donné (ou tous les éléments si aucun sélecteur n'est fourni).
- expand : affiche les éléments correspondant au sélecteur donné (ou tous les éléments si aucun sélecteur n'est fourni).
- open : masque tous les éléments et affiche celui correspondant au sélecteur donné.
- close : masque l'élément correspondant au sélecteur donné.

## Exemple

```html title='HTML'
<div class="accordion">
  <div class="question"><a href="#">Question 1</a></div>
  <div class="answer">Réponse à la question 1</div>
  <div class="question"><a href="#">Question 2</a></div>
  <div class="answer">Réponse à la question 2</div>
  <div class="question"><a href="#">Question 3</a></div>
  <div class="answer">Réponse à la question 3</div>
</div>
```

```css title='CSS'
.answer {
  display: none;
}
```

```js
// Create the accordion
var accordion = mbrApp.Accordion(".accordion .question", ".accordion .answer", {
  autoCollapse: true,
});

// Hide all answers except the first one
accordion.expand(":first-child");
```

## En résumé

Cette fonction `mbrApp.Accordion` permet de créer un effet d'accordéon en ajoutant un événement `click` aux éléments déclencheurs. Elle cache ou montre l'élément correspondant en utilisant la méthode `slideToggle()`. L'option 'autoCollapse' permet de refermer automatiquement les éléments déjà ouverts.
