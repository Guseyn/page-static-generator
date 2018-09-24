# page-static-generator
Static generator for Page framework (based on 'cuties' libs)

## Example

```js

new SavedPage(
  '/path/to/page.html', new Page(
    attrsForHtmlTag,
    new Head(
      new Script(
        'script1.js', 'attr1=val1, attr2=val2'
      ),
      new Script(
        'script2.js', 'attr1=val1, attr2=val2'
      )
      new Style('main.css', 'attr1=val1, attr2=val2'),
      new Style('mobile.css', 'attr1=val1, attr2=val2')
    ),
    new Body(
      attrsForBodyTag,
      new TemplateWithParams(new Template('/from/path1'), ...params),
      new TemplateWithParams(
        new Template('/from/path2'), 
        new TemplateWithParams(
          new Template('/from/path3'),
          ...params
        )
      )
    )
  )
).call();

```
