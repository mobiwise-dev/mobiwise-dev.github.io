---
sidebar_position: 4
---

# Template

## The mbr-text directive

A simple text without an extended text editor.

```html
<div mbr-text>Address...</div>
```

This directive is set automatically for the following tags: H1, H2, H3, H4, H5, P.

## The mbr-article directive

An article text with an extended text editor.

```html
<div mbr-article>
  <p>Lorem ipsum dolor sit amet.</p>
  ...
</div>
```

## The mbr-buttons directive

The element is interpreted as a buttons group.

```html
<div mbr-buttons>
  <a class="btn btn-primary" href="https://mobirise.com">Button 1</a>
  <a class="btn btn-danger" href="https://mobirise.com">Button 2</a>
</div>
```

## The mbr-menu directive

An element is interpreted as a menu.

```html
<ul class="navbar-nav nav-dropdown" mbr-menu>
  <li class="nav-item"><a class="nav-link link" href="https://mobirise.com">HOME</a></li>
  <li class="nav-item"><a class="nav-link link" href="https://mobirise.com">FEATURES</a></li>
</ul>
```

## The `<img/>` tag

An element is interpreted as an image automatically.

```html
<img src="logo.png" height="128" alt="Mobirise" />
```

or

```html
<a href="#"><img src="logo.png" height="128" alt="Mobirise" /></a>
```

:::danger ALERT
Don't add directives like mbr-if to a parent link, because they can be removed with the help of an image editor. Use a container if it's needed.
:::

## The mbr-icon directive

It specifies an icon.

```html
<span mbr-icon class="mbri-mobirise mbr-iconfont" style="font-size: 96px; color: rgb(228, 63, 63);"></span>
```

or

```html
<a href="#"><span mbr-icon class="mbri-mobirise mbr-iconfont" style="font-size: 96px; color: rgb(228, 63, 63);"></span></a>
```

:::danger ALERT
You shouldn't add the mbr-icon attribute to a link. ALERT: Don't add directives like mbr-if to a parent link, because they can be removed with the help of an icon editor. Use a container instead.
:::

## The mbr-video directive

An element is interpreted as a video:

```html
<div mbr-video>
  <iframe src="http://www.youtube.com/watch?v=uNCr7NdOJgw"></iframe>
</div>
```

## The mbr-map directive

A parameter name is used as an attribute value. Only one parameter type is supported: map.

```html
<div class="google-map" mbr-map="googleMap"></div>
```

A map has several states:

### Loading

```html
<div class="google-map" mbr-map="googleMap" data-state="loading">
  <div data-state-details></div>
</div>
```

### Loading error (if a location is not found)

```html
<div class="google-map" mbr-map="googleMap" data-state="not found">
  <div data-state-details>Not found</div>
</div>
```

### Map representation

```html
<div class="google-map" mbr-map="googleMap">
  <iframe>...</iframe>
</div>
```

Styles are needed during the change of address to make clear what is going on. There's a simple example:

```less title="Less format"
.google-map {
  height: 25rem;
  position: relative;
  iframe {
    height: 100%;
    width: 100%;
  }
  [data-state-details] {
    color: #6b6763;
    font-family: Montserrat;
    height: 1.5em;
    margin-top: -0.75em;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
  }
  &[data-state] {
    background: #e9e5dc;
  }
  &[data-state="loading"] {
    [data-state-details] {
      display: none;
    }
    &::after {
      // loader
    }
  }
}
```

## The mbr-form directive

An element is interpreted as a form:

```html
<form mbr-form class="mbr-form" action="ebthemes@gmail.com" method="post" name="My Mobirise Form"></form>
```

It can have a nested structure. An element with a data-form-alert attribute is intended to show messages with the result of a form sending. To make a message initially hidden, use the hidden attribute.

```html
<div mbr-form>
  <div data-form-alert hidden>Thanks for filling out the form!</div>
  <form class="mbr-form" action="ebthemes@gmail.com" method="post" name="My Mobirise Form">
    <input type="email" class="field" name="email" data-form-field="Email" placeholder="Email" required />
    <a data-app-btn="true" type="submit" class="btn">SUBSCRIBE</a>
  </form>
</div>
```

The name attribute of the form is responsible for a title of a submited form. The action attribute may contain an e-mail or a handler script URL.

```html
<form name="My Mobirise Form" action="ebthemes@gmail.com" method="post"></form>
```

Elements input placed inside a form should contain a unique name attribute. The data-form-field value is a name of a field in a form editor window.

```html
<input type="email" name="email" class="field" data-form-field="Email" placeholder="Email" required />
```

It's possible to add `<label>` for form inputs. To bind them, it's necessary to add the for attribute to a label and add a proper input name as the value.

```html
<label mbr-text class="form-label" for="phone">Phone</label>

<input type="tel" name="phone" class="form-control" data-form-field="Phone" />
```

Also there is a possibility to control visibility of html elements inside a form depending on the visibility of certain inputs of this form. It's necessary to define the data-for attribute with a name attribute of a needed input as avalue. Only one dependency can exist at this time.

```html
<div class="col-md-6 multi-horizontal" data-for="name">
  <input type="text" class="input" name="name" data-form-field="Name" placeholder="Your Name" required />
</div>
```

## The mbr-if directive

It shows/hides a block depending on a condition:

```html
<h1 mbr-if="showTitle">Header</h1>
```

or

```html
<div mbr-if="showTitle || showText">
  <h1 mbr-if="showTitle">Header</h1>
  <div mbr-if="showText"></div>
</div>
```

## The mbr-style directive

```html
<section mbr-style="{'background-color': bgColor, 'background-image': url(bgImg)}"></section>
```

:::danger ALERT
The `url()` function is the only one in the template that wraps a value with `url(...)` if it exists.
:::

## The mbr-class directive

Parameters:

```html
showTitle = true showText = false blockType = "flat"

<span mbr-class="{'with-title': showTitle, 'with-text': showText}"></span>

<span class="with-title"></span>
```

or

```html
<span mbr-class="blockType"></span>

<span class="flat"></span>
```

or

```html
<span mbr-class="blockType == 'flat' ? 'flat-style' : '3d-style'"></span>

<span class="flat-style"></span>
```

or

```html
<span mbr-class="[blockType, {'with-title': showTitle, 'with-text': showText}]"></span>

<span class="flat with-title"></span>
```

## Interpolation in attributes

Any attribute if it contains a syntactically correct expression inside double braces {{ ... }} becomes active and changes dynamically by changing parameters.

```html
<div title="color: {{bgColor}}"></div>
```

or

```html
<div style="background: {{bgColor}}"></div>
```

or

```html
<div data-video-src="{{bgVideo.url}}"></div>
```
