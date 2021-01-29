console.log("something bug");
(function ($) {
    $(function () {
  
  $().ready(function () {
      (function () {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame
      })();
      var canvas = document.getElementById('canvas-404');
      if (canvas === null)return;
      setTimeout(function () {
        $('.js-toaster_lever').delay(200).animate({top: 30}, 100);
        $('.js-toaster_toast').removeClass('js-ag-hide').addClass('js-ag-animated js-ag-bounce-in-up')
      }, 800);
      var ctx = canvas.getContext("2d"),
        loading = true;
  
      canvas.height = 210;
      canvas.width = 300;
  
      var parts = [],
        minSpawnTime = 100,
        lastTime = new Date().getTime(),
        maxLifeTime = Math.min(6000, (canvas.height / (1.5 * 60) * 1000)),
        emitterX = canvas.width / 2 - 50,
        emitterY = canvas.height - 10,
        smokeImage = new Image();
  
      
  
      render();
  });
  
    });
  })(jQuery);