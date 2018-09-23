# page-static-generator
Static generator for Page framework (based on 'cuties' libs)

## Example

```js

new SavedPage(
  '/path/to/page.html', new Page(
    new Head(new Scripts('...'), new Styles('...')),
    new Body(
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
)

```
