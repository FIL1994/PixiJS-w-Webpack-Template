export default ({fonts, active}) => {
  window.WebFontConfig = {
    google: {
      families: fonts
    },
    active
  };
};

// include the web-font loader script
/* jshint ignore:start */
(function() {
  let wf = document.createElement('script');
  wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  let s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
/* jshint ignore:end */