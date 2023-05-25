---
sidebar_position: 2
---

# defineM

```js
function(b, c, h) {
  for (var g = {}, d = 0; 3 > d; d++) "string" == typeof arguments[d] ? g.name = arguments[d] : "function" == typeof arguments[d] ? g.func = arguments[d] : "object" == typeof arguments[d] && arguments[d] instanceof Array && (g.deps = arguments[d]);
  if (g.func) {
    d = document.getElementsByTagName("script");
    d = (d = d[d.length - 1]) && d.src || "";
    var f = /^([^?]*)\/[^?]*/.exec(window.location.href)[1] + "/";
    d.startsWith(f) && (d = d.replace(f, ""));
    g.path = d;
    g.name = g.name || g.path.replace(/\.js$/, "");
    e.push(g);
    a();
    return g
  }
  console.error("Error: no function while module define", arguments)
}
```

This function is a simplified implementation of a module system in JavaScript.

The `defineM` function takes three arguments (`b`, `c` and `h`) which are all optional and can be of different types:

If the argument is a string, it is taken as the module name.<br/>
If the argument is a function, it is considered the body of the module.<br/>
If the argument is an array, it is considered the list of module dependencies.

The function creates a `g` object and `y` stores the provided information as arguments. If a function is supplied as an argument, it is stored in the `func` property of the `g` object. If a name is supplied as an argument, it is stored in the `name` property of the `g` object. If a list of dependencies is provided, it is stored in the `deps` property of the `g` object.

The function also retrieves the path to the current script (from the `script` tags in the HTML document) and stores the path in the `path` property of the `g` object.

Finally, the function adds the `g` object to an `e` array that contains all the modules defined so far, then it calls the `a` function (which is not defined in the code) and returns l 'object `g`.

If no function-like argument is supplied to the `defineM` function, an error is returned via the `console.error` function.

## Exemple

```js
defineM(
  "my-extension",
  function (mbrApp) {
    mbrApp.regExtension({
      name: "my-extension",
      events: {
        clickedButton: function () {
          alert("Le bouton a été cliqué !");
        },
      },
    });
  },
  [mbrApp]
);
```

:::info Note
This code doesn't do much of anything practical, but it illustrates how the `regExtension` function can be used to register custom features in Mobirise.
:::

## In summary

This `mbrApp.alertDlg` function creates an alert dialog box containing the text passed as an argument, and displays this dialog box to the user. When the user presses the "OK" button on the dialog box, the `success` function is called, but it does nothing.
