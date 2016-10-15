/**
 * Multilanguage library [data-lang]
 *
 * Use [data-lang-set] attribute with appropriate language name on language switcher
 * Use [data-lang] attribute with appropriate language name on elements which represent the text you want to show
 * Use [data-lang-default] attribute on script call in html head to set default language
 */

class Lang {
  constructor(defaultLanguage) {
    this.set(this.getCookie('lang') || defaultLanguage);

    $('[data-lang-set]').click((event) => {
      this.set(event.currentTarget.dataset.langSet);
    });
  }

  set(lang) {
    $(`[data-lang]`).addClass('lang-hidden');
    $(`[data-lang=${lang}]`).removeClass('lang-hidden');

    console.log('set lang:',lang);

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

const langDefault = document.currentScript.dataset.langDefault;

$(document).ready(() => {
  const lang = new Lang(langDefault);
});
