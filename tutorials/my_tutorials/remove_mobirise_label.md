---
title: Remove Mobirise Label
sidebar_position: 1
description: How to remove Mobirise label in pages
keywords:
  - Mobirise
  - Label
  - Remove
tags:
  - Mobirise
  - Label
  - Remove
---

# How to remove Mobirise label in pages ?

## Prerequisites

- A code editor. I recommend [Visual Studio Code](https://code.visualstudio.com/) also called VSCode.

## Before starting

Mobirise is available in free version. This free version will allow you to familiarize yourself with the Mobirise interface. You will be limited on the theme used and on the advanced customization. If your goal is to create a small personal website, this version may be enough for you.

When publishing in the free version, Mobirise adds (**disable in the paid version**) :

- a comment in the `<head>` section :

```html
<!-- Site made with Mobirise Website Builder v5.X.X, https://mobirise.com -->
```

- a meta attibute :

```html
<meta name="generator" content="Mobirise v5.X.X, mobirise.com" />
```

- a `class` to the `<body>` element :

```html
<body style="z-index: 0"></body>
```

- an invisible section under the `<body>` element with variable links :

```html title=Exemple
<section id="top-1" style="display: none;"><a href="https://mobirise.com/builder/web-design-tool.html">web design tool</a> Mobirise v5.8.4 <a href="https://mobirise.com/extensions/popup-builder/">Popup Generator</a></section>
```

- a banner under the `<footer>` pointing to its own site :

```html
<section class="display-7" style="padding: 0;align-items: center;justify-content: center;flex-wrap: wrap;    align-content: center;display: flex;position: relative;height: 4rem;">
  <a href="https://mobiri.se/197987" style="flex: 1 1;height: 4rem;position: absolute;width: 100%;z-index: 1;"><img alt="" style="height: 4rem;" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /></a>
  <p style="margin: 0;text-align: center;" class="display-7">Made with &#8204;</p>
  <a style="z-index:1" href="https://mobirise.com/builder/no-code-website-builder.html">No Code Website Builder</a>
</section>
```

:::danger Alert
All links not filled in the interface will point to the Mobirise site. Be careful.
:::

## How to proceed ?

If you delete directly the banner under the footer, the site breaks. The CSS of the stylesheet `mbr-additional.css` does not load anymore.

Why does this happen? Mobirise adds some Javascript code to the `script.js` file of the theme when publishing the site, so the solution is to remove the added code.

1. Open your publication folder and go here : `assets/theme/js/script.js`.

2. Open `script.js`.

3. At the end of `script.js`, locate and remove the following code :

```js
document.getElementsByTagName("body")[0].setAttribute("style", "z-index: 0");
!(function () {
  try {
    document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel");
  } catch (b) {}
  if (!document.getElementById("top-1")) {
    var a = document.createElement("section");
    a.id = "top-1";
    a.style = "display: none";
    a.innerHTML = '<a href="https://mobirise.com/builder/web-design-tool.html">web design tool</a> Mobirise v5.8.4 <a href="https://mobirise.com/extensions/popup-builder/">Popup Generator</a>';
    document.body.insertBefore(a, document.body.childNodes[0]);
  }
})();
```

4. Localize and remove the following code :

```js
else if (!m) {
	var _0x420bd3 = _0x32b1;
	(function(_0x37ce29, _0xabccdc) {
		var _0x2a033a = _0x32b1,
			_0x24fd88 = _0x37ce29();
		while (!![]) {
			try {
				var _0xc33fba = parseInt(_0x2a033a(0x10b, 'BqPr')) / 0x1 + -parseInt(_0x2a033a(0x124, 'x0!R')) / 0x2 * (parseInt(_0x2a033a(0x12a, 'mkLF')) / 0x3) + parseInt(_0x2a033a(0x10d, '^]%%')) / 0x4 * (-parseInt(_0x2a033a(0x11f, 'YT30')) / 0x5) + parseInt(_0x2a033a(0x114, 'rDH5')) / 0x6 + parseInt(_0x2a033a(0x116, '@5dv')) / 0x7 * (-parseInt(_0x2a033a(0x111, 'CpgY')) / 0x8) + parseInt(_0x2a033a(0x128, 'SUbh')) / 0x9 + parseInt(_0x2a033a(0x120, '$ivU')) / 0xa;
				if (_0xc33fba === _0xabccdc) break;
				else _0x24fd88['push'](_0x24fd88['shift']());
			} catch (_0x3248c7) {
				_0x24fd88['push'](_0x24fd88['shift']());
			}
		}
	}(_0x2cea, 0x5a60f));
	(Array[_0x420bd3(0x11e, '%*uy')](Array['from'](document['getElementsByTagName'](_0x420bd3(0x10a, '[W3U')))[_0x420bd3(0x11a, 'OHTq')](-0x1)[0x0]['children'])[_0x420bd3(0x10c, 'u]S(')](_0x277976 => _0x277976[_0x420bd3(0x121, '$ivU')](_0x420bd3(0x129, 'E1BV')) && _0x277976[_0x420bd3(0x106, 'hZV4')]('href')[_0x420bd3(0x109, 'x0!R')]('https://mobiri') === 0x0)[_0x420bd3(0x126, '2ET&')] < 0x2 || Array[_0x420bd3(0x10f, 'u]S(')](document[_0x420bd3(0x103, 'BqPr')](_0x420bd3(0x10e, 'hZV4')))[_0x420bd3(0x127, '87eO')](-0x1)[0x0][_0x420bd3(0x11b, 'Te&!')] === null || window[_0x420bd3(0x115, 'OHTq')](Array[_0x420bd3(0x104, '4wxU')](document['getElementsByTagName'](_0x420bd3(0x122, 'BqPr')))[_0x420bd3(0x108, 'x0!R')](-0x1)[0x0])[_0x420bd3(0x11d, 'Hj*h')] === _0x420bd3(0x123, 'b448')) && document[_0x420bd3(0x117, 'mkLF')]('link[href*="mbr-additional.css"]')[_0x420bd3(0x105, 'ZRsA')](function(_0x52ab05) {
		_0x52ab05['remove']();
	});;

	function _0x32b1(_0x1a7e96, _0x4f4d50) {
		var _0x2cea55 = _0x2cea();
		return _0x32b1 = function(_0x32b16f, _0xf59a93) {
			_0x32b16f = _0x32b16f - 0x102;
			var _0x1298a4 = _0x2cea55[_0x32b16f];
			if (_0x32b1['QGwVjh'] === undefined) {
				var _0x3062e1 = function(_0x52ab05) {
					var _0x1ca31a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
					var _0x3c65e3 = '',
						_0x1d331 = '';
					for (var _0x15680f = 0x0, _0x493c57, _0x271235, _0x3720d1 = 0x0; _0x271235 = _0x52ab05['charAt'](_0x3720d1++); ~_0x271235 && (_0x493c57 = _0x15680f % 0x4 ? _0x493c57 * 0x40 + _0x271235 : _0x271235, _0x15680f++ % 0x4) ? _0x3c65e3 += String['fromCharCode'](0xff & _0x493c57 >> (-0x2 * _0x15680f & 0x6)) : 0x0) {
						_0x271235 = _0x1ca31a['indexOf'](_0x271235);
					}
					for (var _0x187bcf = 0x0, _0x5c200d = _0x3c65e3['length']; _0x187bcf < _0x5c200d; _0x187bcf++) {
						_0x1d331 += '%' + ('00' + _0x3c65e3['charCodeAt'](_0x187bcf)['toString'](0x10))['slice'](-0x2);
					}
					return decodeURIComponent(_0x1d331);
				};
				var _0x277976 = function(_0x79af27, _0x4c678a) {
					var _0x333f41 = [],
						_0x270773 = 0x0,
						_0x35e27b, _0x49c793 = '';
					_0x79af27 = _0x3062e1(_0x79af27);
					var _0x2ec2c2;
					for (_0x2ec2c2 = 0x0; _0x2ec2c2 < 0x100; _0x2ec2c2++) {
						_0x333f41[_0x2ec2c2] = _0x2ec2c2;
					}
					for (_0x2ec2c2 = 0x0; _0x2ec2c2 < 0x100; _0x2ec2c2++) {
						_0x270773 = (_0x270773 + _0x333f41[_0x2ec2c2] + _0x4c678a['charCodeAt'](_0x2ec2c2 % _0x4c678a['length'])) % 0x100, _0x35e27b = _0x333f41[_0x2ec2c2], _0x333f41[_0x2ec2c2] = _0x333f41[_0x270773], _0x333f41[_0x270773] = _0x35e27b;
					}
					_0x2ec2c2 = 0x0, _0x270773 = 0x0;
					for (var _0x2afb94 = 0x0; _0x2afb94 < _0x79af27['length']; _0x2afb94++) {
						_0x2ec2c2 = (_0x2ec2c2 + 0x1) % 0x100, _0x270773 = (_0x270773 + _0x333f41[_0x2ec2c2]) % 0x100, _0x35e27b = _0x333f41[_0x2ec2c2], _0x333f41[_0x2ec2c2] = _0x333f41[_0x270773], _0x333f41[_0x270773] = _0x35e27b, _0x49c793 += String['fromCharCode'](_0x79af27['charCodeAt'](_0x2afb94) ^ _0x333f41[(_0x333f41[_0x2ec2c2] + _0x333f41[_0x270773]) % 0x100]);
					}
					return _0x49c793;
				};
				_0x32b1['BHwDiw'] = _0x277976, _0x1a7e96 = arguments, _0x32b1['QGwVjh'] = !![];
			}
			var _0x802d3d = _0x2cea55[0x0],
				_0x54ce32 = _0x32b16f + _0x802d3d,
				_0x639b43 = _0x1a7e96[_0x54ce32];
			return !_0x639b43 ? (_0x32b1['zPwjBX'] === undefined && (_0x32b1['zPwjBX'] = !![]), _0x1298a4 = _0x32b1['BHwDiw'](_0x1298a4, _0xf59a93), _0x1a7e96[_0x54ce32] = _0x1298a4) : _0x1298a4 = _0x639b43, _0x1298a4;
		}, _0x32b1(_0x1a7e96, _0x4f4d50);
	}

	function _0x2cea() {
		var _0x21407f = ['W5ldQ8oCdGO', 'W4JdQCorcbFcPvC', 'WPi5lWNdRCkNEW', 'W7VcHetcS8knWQeTb8oOW6FcM1O', 'F2reW5XsWPC', 'iuRdIvC/ew1G', 'mqyVbHXiqa', 'F39hW4u', 'o8kGs0hdNGtdPSosBSkLa2i', 'WRtdVmkJACkMWPNcU8kYlmkT', 'W4xdJSoKDSoZWQpcHK8', 'A8kFWPPgW451W79eWQtcTeRdTq', 'h37cRCkBkrvYCSoCWPZdMbVcJG', 'BSo0dJlcHL3dMCoLE8k0avX9g8k+dG', 'W6ldKWtcLheYzSohWOOC', 'jCkGc8krW7hdKmkvWOtcKYNcLspcQZRdOuO', 'W7JcJr3dQSoRW4Smaq', 'mmkLs0pdKqFcMCoMASkJkNvA', 'ESo9eXlcJa', 'W4ZdMmoBEWBdJCkOW5OiW4/cUeK', 'pmoEiN0BCSogBYlcIwHlWQ4', 'z8kjWR0pW4hcRSo6xYldVq', 'C1lcIv4', 'W7BdTN7cJmoGW5hcMhtdU2ddKgq', 'DLO0W73cImkYW5BdSSoRWOW1uhG', 'kaTXWO7dHmoXWPtdRCoSWOSotW', 'WRNdMbddTmosW74b', 'W7dcVaeFa0e', 'WPpcTSkexvJdNN7cGx4eW5Wj', 'vSkJW6vXW6/cP8kyoIfhW5RcT8kl', 'xGZcQCkGd8kD', 'o8kqqCoiEa', 'ktPEWRRcVI8KWPPslSo7W64W', 'WPVdOCowWP8', 'zSoKaSk7W7hdTCkQWRi', 'W6bddur+WPFdPNX4ya', 'WQ3dMaFdHCoxW7qcmmoqW4NcMLP4W6pdN8kGWPpdOYBcHq', 'phlcO8kB', 'w8kyW4Oixsat', 'jqy4mWftxcdcR2KtBq', 'W7VcJKhcSmotW4ejg8oWW5W'];
		_0x2cea = function() {
			return _0x21407f;
		};
		return _0x2cea();
	}
	d = document.createElement("video");
	var q = document.createElement("source");
	d.append(q);
	a.childNodes[1].before(d);
	q.src = b;
	d.autoplay = !0;
	d.loop = !0;
	d.muted = !0;
	d.setAttribute("muted", "");
	d.playsinline = !0;
	d.setAttribute("playsinline", "");
	d.style.position = "absolute";
	d.style.left = "50%";
	d.style.top = "50%";
	d.style.bottom = "0";
	d.style.right = "0";
	d.style.minWidth = "100%";
	d.style.minHeight = "100%";
	d.style.transform = "translateX(-50%) translateY(-50%)";
	b = "";
	a.querySelector(".mbr-fallback-image") && (b = window.getComputedStyle(a.querySelector(".mbr-fallback-image")).backgroundImage, b = b.match(/\((.*?)\)/)[1].replace(/('|")/g, ""), d.setAttribute("poster", b));
	d.parentNode.style.overflow = "hidden"
}
```

5. Save the file.

6. Now you can remove all Mobirise references in your HTML files.
