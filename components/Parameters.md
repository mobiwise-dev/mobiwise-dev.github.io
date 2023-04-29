---
sidebar_position: 3
---

# Parameters

When you click on gear icon you can access to the component parameters. You have several types at your disposal. Each parameter you want to use in your component must be in the `<mbr-parameters>` tag.

```html title="Exemple"
<mbr-parameters>
  <header>Size</header>
  <input type="checkbox" title="Full Screen" name="fullScreen" checked />
  <input type="checkbox" title="Full Width" name="fullWidth" />
  <header>Show/Hide</header>
  <input type="checkbox" title="Title" name="showTitle" checked />
  <input type="checkbox" title="Subtitle" name="showSubitle" />
</mbr-parameters>
```

## Section title

```html
<header>Title</header>
```

## Thematic Break (Horizontal Rule)

```html
<hr />
```

## Text fields

###     Type text

```html
<input type="text" title="Text" name="text" value="Default Text" />
```

###     Type Textarea

```html
<textarea title="Textarea" name="text">Default Text</textarea>
```

## Checkboxes

```html
<input type="checkbox" title="Show Title" name="showTitle" checked />
```

## Radio buttons

```html
<input type="radio" title="Radio 1" name="radio" value="1" />

<input type="radio" title="Radio 2" name="radio" value="2" checked />
```

## A drop-down options list

```html
<select title="Alignment" name="textAlign">
  <option value="left">Left</option>
  <option value="center" selected>Center</option>
  <option value="right">Right</option>
</select>
```

## Color

```html
<input type="color" title="Background" name="bgColor" value="#ffffff" />
```

## Range

```html
<input type="range" title="Font Size" name="fontSize" min="0.6" max="4" step="0.025" value="0.625" />
```

## Font

```html
<input type="font" title="Font" name="font" value="Oswald" />
```

## Image

```html
<input type="image" title="Image" name="bgImg" value="bg-image.png" />
```

## Video

```html
<input type="video" title="Video" name="bgVideo" value="http://www.youtube.com/watch?v=uNCr7NdOJgw" />
```

## Background

```html
<fieldset type="background" name="bg" parallax>
  <input type="image" title="Background Image" value="background5.jpg" parallax />
  <input type="color" title="Background Color" value="#073B4C" selected />
  <input type="video" title="Background Video" value="http://www.youtube.com/watch?v=uNCr7NdOJgw" />
</fieldset>
```

The `parallax` attribute for the `fieldset` tag shows the on/off parallax switch. <br />
If the same attribute is set for an image, it means that parallax is enabled. If it is absent, parallax is disabled. This parameter supports only three background types image, color and video. The current choice is denoted by the selected parameter for a corresponding tag.

The title attribute assigns a title for the switch. In the rest, the nested parameters behave like the autonomous parameters, but
they don't require thename attribute. The value of the bg variable for the previous example looks this way: { "type": "color", "value": "#073B4C", "parallax": false, "image": { "value": "background5.jpg", "parallax": true }, "color": {
"value": "#073B4C" }, "video": { "value": { "url": "http://www.youtube.com/watch?v=uNCr7NdOJgw" } } } The selected type of background is stored in the type key, and the value is in value. If the selected type is an image, and the parallax
switch is shown in the interface, then the parallax key shows whether parralax is enabled or disabled. In addition, regardless of the current selection other type settings can be get by a needed key. Some variables are used in CSS too, but
only partically. @bg-value: "background5.jpg"; @bg-type: "image"; @bg-color-value: #073B4C; @bg-parallax: true; It's possible to access only the current selection through variables. The exception is @bg-color-value. It can be useful in the
cases when the background is an image, but it is loading slowly or can't be loaded at all. The background color should be set in the contrast with the text. As you can see, to get the access to the values, you need to use the hyphen instead
of the dot - bg.color.value in templates and @bg-color-value in CSS.

## Map

It's used along with the mbr-map directive.

```html
<input type="map" title="Map" name="googleMap" />
```

## A hidden parameter

```html
<input type="hidden" name="hiddenParam" value="Lorem ipsum dolor sit amet." />
```

## Conditionals

You can display/hide a condition depending on an other condition.

```html title="Exemples"
<input type="color" title="Background" name="bgColor" value="#ffffff" condition="backgroundType == 'color'" />

<input type="text" title="Text" name="text" value="Default Text" condition="checkboxName" />
```
