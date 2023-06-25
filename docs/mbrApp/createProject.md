# mbrApp.createProject

```js
function(c, d, f, e) {
  var g = this;
  c = c || g.projectSettings.name;
  g.fire("createProject", c);
  Bridge.initProject(function(l, k) {
    function n() {
      d = d || b.extend(!0, {}, r);
      d = g.applyFilter("createProject", d, d.settings.name, k.path);
      g.applyFilter("promiseDefaultProject", Promise.resolve(d), k.path, f).then(function(d) {
        d.settings = b.extend({}, d.settings, k);
        d.settings.theme = b.extend({}, d.settings.theme, f);
        d.settings.name = g.applyFilter("createProjectName",
          a.escapeHtml(c));
        g.loadProject(k.path, d, {
          onSuccess: function() {
            g.fire("createdProject", c)
          },
          onError: function(b) {
            e && e(b);
            a.hidePreloader()
          },
          onDone: function() {
            e && e();
            a.hidePreloader()
          }
        })
      })
    }!l && k && k.path ? d || f ? n() : g.getDefaultProject(function(a) {
      d = a;
      n()
    }) : (console.error("Error init project folder"), e && e(l))
  })
}
```

La fonction `mbrApp.createProject` de Mobirise est utilisée pour créer un nouveau projet dans l'application Mobirise. Voici une explication détaillée de son fonctionnement :

1. La fonction prend plusieurs paramètres : `c`, `d`, `f`, `e`. Voici ce que représentent ces paramètres :

   - `c` : Le nom du projet. Il peut être spécifié par l'utilisateur ou par défaut.
   - `d` : Les paramètres du projet. Il s'agit d'un objet contenant les différentes configurations du projet.
   - `f` : Le thème du projet. Il s'agit d'un objet représentant le thème choisi pour le projet.
   - `e` : Une fonction de rappel (callback) optionnelle qui sera appelée en cas d'erreur lors de la création du projet.

2. La fonction déclenche un événement `createProject` avec le nom du projet en tant que paramètre.

3. Ensuite, la fonction appelle la fonction `Bridge.initProject` pour initialiser le projet. Cette fonction prend une fonction de rappel (callback) en paramètre qui sera exécutée une fois que l'initialisation du projet est terminée.

4. À l'intérieur de la fonction de rappel de l'initialisation du projet, il y a une vérification pour s'assurer que le chemin du projet est valide (non nul).

5. Si le chemin du projet est valide, la fonction vérifie si les paramètres du projet `d` ou le thème du projet `f` sont spécifiés. Si l'un des deux est présent, la fonction continue le processus de création du projet. Sinon, la fonction appelle la fonction `getDefaultProject` pour obtenir les paramètres par défaut du projet.

6. Une fois que les paramètres du projet sont obtenus (soit à partir des paramètres spécifiés, soit à partir des paramètres par défaut), la fonction applique des filtres sur ces paramètres en utilisant les fonctions `applyFilter` pour modifier ou personnaliser les paramètres du projet.

7. Ensuite, la fonction appelle la fonction `loadProject` pour charger le projet à partir du chemin spécifié et avec les paramètres du projet. Cette fonction prend également une fonction de rappel (callback) en paramètre qui sera exécutée une fois que le chargement du projet est terminé.

8. Si le chargement du projet est réussi, la fonction déclenche l'événement `createdProject` avec le nom du projet en tant que paramètre.

9. Si une erreur se produit lors de la création ou du chargement du projet, la fonction exécute la fonction de rappel d'erreur (si elle est spécifiée) et masque le préchargeur (preloader) de l'application.

10. Enfin, la fonction masque également le préchargeur de l'application une fois que la création ou le chargement du projet est terminé, en appelant la fonction `hidePreloader`.

## Exemple

```js
var projectName = "MonProjet"; // Nom du projet

var projectSettings = {
  // Paramètres du projet
  // ...
};

var projectTheme = {
  // Thème du projet
  // ...
};

function errorCallback(error) {
  console.error("Erreur lors de la création du projet :", error);
}

mbrApp.createProject(projectName, projectSettings, projectTheme, errorCallback);
```

## En résumé

Cette fonction `mbrApp.createProject` crée un nouveau projet en utilisant les paramètres spécifiés ou les paramètres par défaut. Elle charge ensuite le projet et déclenche des événements en fonction du succès ou de l'échec de la création ou du chargement du projet.
