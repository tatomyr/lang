# lang
This is the extremly short library to provide multilanguage in html. 

The purposes of the library are:
- sites with multiple languages 
- cases where a static server is granted and we need to provide text availability for search engines
- not too much text on there (actually not so crucial)

Mark language switch elements with `[data-lang-set]` attribute and set it to appropriate language tag.
Mark elements you want to show them in different languages with `[data-lang]` attribute and set it to appropriate language tag.
Set the default language within the `<script>` tag you launch library with. Otherwise, browser will set it automatically to the browser default.
See the example of using this library in [`index.html`](https://github.com/tatomyr/lang/blob/master/index.html) file.

You also may check how it works [here](https://tatomyr.github.io/lang/)
