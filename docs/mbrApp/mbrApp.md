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

The module is defined using the `defineM` function, which takes two arguments: `g` and `f`. These are references to the `jQuery` library and the `Bridge` module respectively.

The `mbrApp` module defines an object constructor called `e`. This constructor initializes several properties, such as a hidden overlay div, references to the `jQuery` library and the `body` element, and empty objects.

The `e` object also defines several methods. The `on` method adds event listeners to the `d` object, which stores callbacks associated with event names. The `off` method deletes an event listener, and the `fire` method triggers an event by calling all callbacks associated with the event name.

The `fireOnce` method is similar to the `fire` method, but calls callbacks only once and then deletes them from the `d` object.

The `addFilter` and `applyFilter` methods are used to add and apply filters to the data passed to them.

The `regExtension` and `rmExtension` methods are used to register and delete extensions respectively. Extensions are JavaScript modules that can be dynamically loaded and add functionality to the `mbrApp` module.

Finally, the `uniqNum` and `resetUniqNum` methods are used to generate unique numbers and reset the counter respectively.

The code also creates an instance of the `e` object and assigns it to the `window.mbrApp` property. In addition, it binds an event listener to the `drop` event and calls the `bridgeInit` method when the document is ready.

## Exemple

```js
// Create a new extension
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
// Register extension with "mbrApp" module
mbrApp.regExtension(myExtension);

// We add a filter that adds a prefix to a character string
mbrApp.addFilter("prefix", function (text, prefix) {
  return prefix + " " + text;
});

// We add a callback for the "myEvent" event
mbrApp.on("myEvent", function () {
  console.log("My callback has been called!");
});

// We trigger the "myEvent" event
mbrApp.fire("myEvent");

// We call the "myMethod" method of the
mbrApp.myMethod();

// Apply the "prefix" filter to a string
var result = mbrApp.applyFilter("prefix", "world", "Hello");
alert(result); // Display a "Hello world" alert
```

## Summary

The code defines the `mbrApp` module, which is an object containing several methods for adding, deleting and triggering events, as well as adding and applying filters.

In addition, the `mbrApp` module can also be used to register and delete extensions, which are JavaScript modules that add further functionality to the `mbrApp` module. The code also creates an instance of the `mbrApp` module and assigns it to the `window.mbrApp` property.

Overall, the `mbrApp` module provides a structure for managing events and filters in a JavaScript application, and also offers the possibility of extending its functionality using extensions.
