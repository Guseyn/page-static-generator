# page-static-generator
Static generator for Page framework (based on 'cuties' libs)

## Example

Let's say we have templates: `outer.html`, `inner.html`,

## outer.html

```html
<div class="outer">
   {text}
  <div class="place-for-inner-template">
    {innerTemplate}
  </div>
</div>

```


## inner.html

```html
<div class="inner">
   {text}
</div>

```

Then we can create a page that contains these templates:

```js

new SavedPage(
  'page.html', new Page(
    'xmlns="http://www.w3.org/1999/xhtml" lang="en"',
    new Head(
      new Script(
        'script1.js', 'type="text/javascript"'
      ),
      new Script(
        'script2.js', 'type="text/javascript"'
      )
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
).call();

```
