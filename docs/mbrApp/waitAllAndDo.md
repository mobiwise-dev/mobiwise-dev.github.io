# mbrApp.waitAllAndDo

```js
function b(c, e, a) {
  if (!c.length) return a();
  e(c.splice(0, 1)[0], function () {
    b(c, e, a);
  });
}
```

La fonction `mbrApp.waitAllAndDo` de Mobirise est appelée pour exécuter une série de fonctions de rappel (callbacks) une par une, en attendant que chaque fonction se termine avant de passer à la suivante.

La fonction prend trois arguments :

- `c` : un tableau contenant une liste de fonctions à exécuter en séquence.
- `e` : une fonction de rappel qui sera appelée après l'exécution de chaque fonction de la liste.
- `a` : une fonction de rappel qui sera appelée après l'exécution de toutes les fonctions de la liste.

La fonction `b` est une fonction récursive qui est appelée à chaque fois qu'une fonction de la liste a été exécutée. Elle prend en entrée le tableau de fonctions `c`, la fonction de rappel `e` et la fonction de rappel finale `a`. Si le tableau de fonctions est vide, la fonction `a` est appelée. Sinon, la première fonction de la liste est exécutée, puis la fonction `e` est appelée. Cette dernière est généralement utilisée pour exécuter une autre fonction, qui sera la suivante dans la liste. Ensuite, la fonction `b` est rappelée récursivement avec le reste du tableau de fonctions, la même fonction de rappel `e` et la même fonction de rappel finale `a`. Cette boucle se répète jusqu'à ce que toutes les fonctions de la liste soient exécutées.

## Exemple

```js
var funcList = [task1, task2, task3];
mbrApp.waitAllAndDo(
  funcList,
  function (nextFunc) {
    nextFunc(function () {
      alert("Next task is starting...");
    });
  },
  function () {
    alert("All tasks are finished!");
  }
);
```

## En résumé

Cette fonction est utilisée pour exécuter plusieurs fonctions de manière séquentielle et attendre que chaque fonction soit terminée avant de passer à la suivante. Cela peut être utile dans de nombreux cas, notamment lors de l'initialisation de certaines fonctionnalités ou lors de la manipulation d'éléments DOM complexes.
