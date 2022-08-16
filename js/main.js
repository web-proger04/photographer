$(function () {
  $(window).scroll(function() {
      $('.options__portfolio, .options__personal-photoshoot, .options__lookbook, .options__wedding').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeIn");
          }
      });
  });
  $(window).scroll(function() {
      $('.about-me').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeIn");
          }
      });
  });
  $(window).scroll(function() {
      $('.image-rov').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInRightBig");
          }
      });
  });
  $(window).scroll(function() {
      $('.work__item').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInUpBig");
          }
      });
  });
  $(window).scroll(function() {
      $('.prices__item').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInUpBig");
          }
      });
  });
  $(window).scroll(function() {
      $('.contacts__image').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInLeftBig");
          }
      });
  });
  $(window).scroll(function() {
      $('.flex__contacts__filling-form').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInRightBig");
          }
      });
  });
  $(window).scroll(function() {
      $('.footer').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeIn");
          }
      });
  });
})