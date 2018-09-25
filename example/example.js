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
} = require('./../index');

new SavedPage(
  './example/page.html', 
  new PrettyPage(
    new Page(
      'xmlns="http://www.w3.org/1999/xhtml" lang="en"',
      new Head(
        new Script(
          'script1.js', 'type="text/javascript"'
        ),
        new Script(
          'script2.js', 'type="text/javascript"'
        ),
        new Style('main.css', 'type="text/css"'),
        new Style('mobile.css', 'type="text/css"')
      ),
      new Body(
        'class="main"',
        new TemplateWithParams(
          new Template('./example/outer.html'),
          'text in outer template',
          new TemplateWithParams(
            new Template('./example/inner.html'),
            'text in inner template'
          )
        )
      )
    )
  )
).call();
