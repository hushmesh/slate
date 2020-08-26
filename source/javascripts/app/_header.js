;(function () {
  'use strict';

  window.onload = function(){

    var navPanel = document.getElementById('site-nav');
    var navButton = document.getElementById('site-nav-toggle');

    if(navButton) {
      navButton.addEventListener('click', function(e) {
        navPanel.classList.toggle('open');
      });
    }

  };
})();
