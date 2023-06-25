# mbrApp.loadRecentProject

```js
function(a) {
  function b(b) {
    a && a()
  }
  var c = this;
  c.getRecentProject(function(a, d) {
    d ? (c.fire("loadRecentProject"), c.loadProject(d, a, {
      noSave: !0,
      onError: function() {
        c.createProject("My Site", 0, 0, b)
      },
      onDone: function() {
        c.fire("loadedRecentProject", d);
        b()
      }
    })) : c.createProject("My Site", 0, 0, b)
  })
}
```

La fonction `loadRecentProject` est une fonction qui charge le projet récent, ou, en cas d'échec, crée un nouveau projet. Voici une explication plus détaillée de chaque partie de cette fonction :

    function(a){function b(b){a&&a()}: Ceci définit une fonction anonyme qui prend une fonction a en argument, puis définit une fonction interne b. Cette fonction b appelle a seulement si a est défini.

    var c=this: Définit une variable c qui fait référence à l'objet courant (this).

    c.getRecentProject(function(a,d): Ceci appelle la méthode getRecentProject sur l'objet c (qui est l'objet courant), et lui passe une fonction anonyme qui prend deux arguments : a et d.

    d?(c.fire("loadRecentProject"),c.loadProject(d,a,{noSave:!0,...}): Si d est vrai (donc probablement si un projet récent a été trouvé), alors cette fonction lance un événement "loadRecentProject" et charge le projet avec certaines options.

    :c.createProject("My Site",0,0,b)})}: Si d est faux (donc probablement si aucun projet récent n'a été trouvé), cette fonction crée un nouveau projet appelé "My Site". Il semble que 0,0,b sont des paramètres supplémentaires qui pourraient représenter des configurations du projet ou des callbacks.

Il est important de noter que la compréhension précise de cette fonction pourrait dépendre du contexte plus large du code dans lequel elle est insérée, car Mobirise est un outil de construction de site web et cette fonction fait probablement partie d'un ensemble plus large de fonctions et de méthodes qui interagissent entre elles.

## Exemple

```js
mbrApp.loadRecentProject("Your message");
```

## En résumé

Cette fonction `mbrApp.loadRecentProject` crée une boîte de dialogue d'alerte contenant le texte passé en argument, et affiche cette boîte de dialogue à l'utilisateur. Lorsque l'utilisateur appuie sur le bouton "OK" de la boîte de dialogue, la fonction `success` est appelée, mais elle ne fait rien.
