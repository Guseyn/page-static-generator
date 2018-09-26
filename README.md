# page-static-generator
Static generator for [Page](https://github.com/Guseyn/page) framework (based on 'cuties' libs and [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf)).

[![NPM Version][npm-image]][npm-url]

## Example

Let's say we have templates: `outer.html`, `inner.html`:

```html
<!-- outer.html -->
<div class="outer">
   {text}
  <div class="place-for-inner-template">
    {innerTemplate}
  </div>
</div>

```

```html
<!-- inner.html -->
<div class="inner">
   {text}
</div>

```

Then we can create a page that contains these templates:

```js
'use strict'

const {
  SavedPage,
  PrettyPage,
  Page,
  Head,
  Body,
  Script,
  Style,
  TemplateWithParams,
  Template
} = require('@page-libs/static-generator');

new SavedPage(
  'page.html', 
  new PrettyPage(
    new Page(
      'xmlns="http://www.w3.org/1999/xhtml" lang="en"',
      new Head(
        new Script('script1.js', 'type="text/javascript"'),
        new Script('script2.js', 'type="text/javascript"'),
        new Style('main.css', 'type="text/css"'),
        new Style('mobile.css', 'type="text/css"')
      ),
      new Body(
        'class="main"',
        new TemplateWithParams(
          new Template('outer.html'),
          'text in outer template',
          new TemplateWithParams(
            new Template('inner.html'),
            'text in inner template'
          )
        )
      )
    )
  )
).call();

```

The result is

```html
<!-- page.html -->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

  <head>
    <script src="script1.js" type="text/javascript"></script>
    <script src="script2.js" type="text/javascript"></script>
    <link rel="stylesheet" href="main.css" type="text/css">
    <link rel="stylesheet" href="mobile.css" type="text/css">
  </head>

  <body class="main">
    <div class="outer">
      text in outer template
      <div class="place-for-inner-template">
        <div class="inner">
          text in inner template
        </div>

      </div>
    </div>
  </body>

</html>

```

Full example is [here](https://github.com/Guseyn/page-static-generator/tree/master/example).

| Async Object  | Description | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `Base` | Creates `base` tag | `href, attrs(string like 'attr="value"')` | `<base href=${href} ${attrs}>` |
| `Body` | Creates `body` tag | `attrs(string like 'attr="value"'), ...elms(elements inside of body tag)` | `<body ${attrs}>${elms.join('')}</body>` |
| `Head` | Creates `head` tag | `...elms(elements inside of head tag)` | `<head>${elms.join('')}</head>` |
| `Link` | Creates `link` tag | `attrs(string like 'attr="value"')` | `<link ${attrs}>` |
| `Meta` | Creates `meta` tag | `attrs(string like 'attr="value"')` | `<meta ${attrs}>` |
| `NoScript` | Creates `noscript` tag | `text` | `<noscript>${text}</noscript>` |
| `Page` | Creates `html` tag | `attrs(string like 'attr="value"'), head, body` | `<!DOCTYPE html>\n<html ${attrs}>${head}${body}</html>\n` |
| `PrettyPage` | Makes `page` pretty | `page` | Pretty html document(`page`) |
| `SavedPage` | Saves `page` to the specified `file(as path)` | `path, page` | `file(as path)` |
| `Script` | Creates `script` tag(for `head` tag) | `src, attrs(string like 'attr="value"')` | `<script src="${src}" ${attrs}></script>` |
| `Style` | Creates `link` tag with `rel="stylesheet` | `href, attrs(string like 'attr="value"')` | `<link rel="stylesheet" href="${href}" ${attrs}>` |
| `Template` | Read html as string from the specified `file(as path)` | `path` | html string  |
| `TemplateWithParams` | Replace all placeholders in a template with the specified `...params` | `template, ...params` | html string |
| `Title` | Creates `title` tag | `text` | `<title>${text}</title>` |

[npm-image]: https://img.shields.io/npm/v/@page-libs/static-generator.svg
[npm-url]: https://npmjs.org/package/@page-libs/static-generator
