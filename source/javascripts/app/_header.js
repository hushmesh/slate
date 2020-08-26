;(function () {
  'use strict';

  window.onload = function(){

    // open navigation drawer on mobile devices

    var navPanel = document.getElementById('site-nav');
    var navButton = document.getElementById('site-nav-toggle');

    if(navButton) {
      navButton.addEventListener('click', function(e) {
        navPanel.classList.toggle('open');
      });
    }

    // hide fixed navigation when scrolling to make more room for text

    var isMobile = window.matchMedia('(max-width: 930px)');

    var layout = document.body;
    var prevScrollpos = window.pageYOffset;

    if (isMobile.matches) {
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          layout.classList.remove('shrink');
        } else {
          layout.classList.add('shrink');
        }
        prevScrollpos = currentScrollPos;
      }
    }

  };

})();
