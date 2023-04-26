---
sidebar_position: 1
---

# mbrApp

```js
defineM(
  "mbrApp",
  function (g, f) {
    var e = function () {
        this.$iframeOverlay = g("<div>")
          .hide()
          .css({
            position: "absolute",
            left: 0,
            top: 65,
            right: 0,
            bottom: 0,
          })
          .appendTo("body");
        f.isMobile && g("html").addClass("device");
        this.$window = g(window);
        this.$body = g("body");
      },
      d = {},
      l = {};
    e.prototype.on = function (a, b) {
      if (g.isArray(a)) for (var c in a) this.on(a[c], b);
      else if (a in l) {
        if (b)
          try {
            b.apply(this, l[a]);
          } catch (h) {
            console.error(h);
          }
      } else (d[a] || (d[a] = [])).push(b);
    };
    e.prototype.off = function (a, b) {
      if (!d[a]) return !1;
      if (b) for (var c = 0; c < d[a].length; c++) d[a][c] === b && (d[a][c] = void 0);
      else delete d[a];
    };
    e.prototype.fire = function (a) {
      f && f.debug & 1 && console.log("fire mbrApp::" + a);
      var b = [].slice.call(arguments, 1);
      if ("undefined" !== typeof d[a])
        for (var c in d[a])
          if (d[a][c])
            try {
              d[a][c].apply(this, b);
            } catch (h) {
              console.error(h);
            }
    };
    e.prototype.fireOnce = function (a) {
      f && f.debug & 1 && console.log("fire mbrApp::" + a);
      if (!(a in l)) {
        var b = [].slice.call(arguments, 1);
        l[a] = b;
        for (var c in d[a])
          if (d[a][c])
            try {
              d[a][c].apply(this, b), (d[a][c] = void 0);
            } catch (h) {
              console.error(h);
            }
      }
    };
    var m = {};
    e.prototype.addFilter = function (a, b) {
      (m[a] || (m[a] = [])).push(b);
    };
    e.prototype.applyFilter = function (a) {
      f && f.debug & 2 && console.log("applyFilter App:" + a);
      var b = [].slice.call(arguments, 1);
      if (m[a])
        for (var c = m[a], d = 0, e = c.length; d < e; d++)
          try {
            (b[0] = c[d].apply(this, b)), "undefined" == typeof b[0] && console.warn("handle of " + a + " filter return undefined: ", c[d]);
          } catch (p) {
            console.error(p);
          }
      return b[0];
    };
    var k = {};
    e.prototype.regExtension = e.prototype.registerExtension = function (a) {
      if (!a.name || "undefined" !== typeof k[a.name]) return !1;
      k[a.name] = a;
      if (a.global) for (var b in a.global) b in this ? console.error("Error re-definition method mbrApp." + b + " by module " + a.name) : (this[b] = a.global[b]);
      if (a.events) for (var c in a.events) this.on(c, a.events[c]);
      if (a.filters) for (c in a.filters) this.addFilter(c, a.filters[c]);
      f && f.debug & 8 && console.log("mbrApp.regExtension" + a.name);
      return !0;
    };
    e.prototype.rmExtension = e.prototype.removeExtension = function (a) {
      if (!k[a]) return !1;
      var b = k[a].global;
      if (b) for (var c in b) this.k && delete this.k;
      delete k[a];
      return !0;
    };
    e.prototype.bridgeInit = function () {
      this.fireOnce("bridgeInit");
    };
    var n = 0;
    e.prototype.uniqNum = function () {
      return n++;
    };
    e.prototype.resetUniqNum = function (a) {
      n = 0;
      a && this.Core.resetUniqNum();
    };
    window.mbrApp = new e();
    f.setOnReady(function () {
      f.bind("drop", function (a) {
        for (var b in a) window.mbrApp.fire("incomingFile", a[b]);
      });
      g(function () {
        window.mbrApp.bridgeInit();
      });
    });
    return window.mbrApp;
  },
  ["jQuery", "Bridge"]
);
```

Le module est défini à l'aide de la fonction `defineM` qui prend deux arguments : `g` et `f`. Ce sont des références à la bibliothèque `jQuery` et au module `Bridge` respectivement.

Le module `mbrApp` définit un constructeur d'objet appelé `e`. Ce constructeur initialise plusieurs propriétés, telles qu'un div de superposition caché, des références à la bibliothèque `jQuery` et à l'élément `body`, ainsi que des objets vides.

L'objet `e` définit également plusieurs méthodes. La méthode `on` ajoute des écouteurs d'événements à l'objet `d` qui stocke des rappels associés à des noms d'événements. La méthode `off` supprime un écouteur d'événement, et la méthode `fire` déclenche un événement en appelant tous les rappels associés au nom de l'événement.

La méthode `fireOnce` est similaire à la méthode `fire`, mais elle n'appelle les rappels qu'une fois et les supprime ensuite de l'objet `d`.

Les méthodes `addFilter` et `applyFilter` sont utilisées pour ajouter et appliquer des filtres aux données qui leur sont transmises.

Les méthodes `regExtension` et `rmExtension` sont utilisées pour enregistrer et supprimer des extensions respectivement. Les extensions sont des modules JavaScript qui peuvent être chargés dynamiquement et ajoutent des fonctionnalités au module `mbrApp`.

Enfin, les méthodes `uniqNum` et `resetUniqNum` sont utilisées pour générer des nombres uniques et réinitialiser le compteur respectivement.

Le code crée également une instance de l'objet `e` et l'assigne à la propriété `window.mbrApp`. De plus, il lie un écouteur d'événements à l'événement `drop` et appelle la méthode `bridgeInit` lorsque le document est prêt.

## Exemple

```js
// On crée une nouvelle extension
var myExtension = {
  name: "MyExtension",
  global: {
    myMethod: function () {
      console.log("My method has been called!");
    },
  },
  events: {
    myEvent: function () {
      console.log("My event has been triggered!");
    },
  },
};
// On enregistre l'extension auprès du module "mbrApp"
mbrApp.regExtension(myExtension);

// On ajoute un filtre qui ajoute un préfixe à une chaîne de caractères
mbrApp.addFilter("prefix", function (text, prefix) {
  return prefix + " " + text;
});

// On ajoute un rappel pour l'événement "myEvent"
mbrApp.on("myEvent", function () {
  console.log("My callback has been called!");
});

// On déclenche l'événement "myEvent"
mbrApp.fire("myEvent");

// On appelle la méthode "myMethod" de l'extension
mbrApp.myMethod();

// On applique le filtre "prefix" à une chaîne de caractères
var result = mbrApp.applyFilter("prefix", "world", "Hello");
console.log(result); // Affiche "Hello world"
```

## En résumé

Le code définit le module "mbrApp" qui est un objet contenant plusieurs méthodes pour ajouter, supprimer et déclencher des événements, ainsi que pour ajouter et appliquer des filtres.

En outre, le module `mbrApp` permet également d'enregistrer et de supprimer des extensions, qui sont des modules JavaScript qui ajoutent des fonctionnalités supplémentaires au module `mbrApp`. Le code crée également une instance du module `mbrApp` et l'assigne à la propriété `window.mbrApp`.

Dans l'ensemble, le module `mbrApp` fournit une structure pour gérer des événements et des filtres dans une application JavaScript, et offre également la possibilité d'étendre ses fonctionnalités en utilisant des extensions.
