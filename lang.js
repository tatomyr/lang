/**
 * Multilanguage library [data-lang]
 *
 * Use [data-lang-set] attribute with appropriate language namr on language swither
 * Use [data-lang] attribute with appropriate language name on elements which represent the text you want to show
 */

class Lang {
  constructor(defaultLanguage) {
    this.set(this.getCookie('lang') || defaultLanguage);

    $('[data-lang-set]').click((event) => {
      console.log(event);
      this.set(event.currentTarget.dataset.langSet);
    });
  }

  set(lang) {
    $(`[data-lang]`).addClass('lang-hidden');
    $(`[data-lang=${lang}]`).removeClass('lang-hidden');

    this.setCookie('lang', lang);
  }

  setCookie(name, value, options) {
    options = options || {};
    var expires = options.expires;
    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;
    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
    document.cookie = updatedCookie;
  }

  getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

}
