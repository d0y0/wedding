


// https://stackoverflow.com/questions/37827505/how-do-i-stop-a-js-driven-full-page-scroll-from-jumping-to-the-start-end

var cur_idx = 0

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.tooltipped').tooltip({
    delay: 50
  });
  $.fn.swipeEvents = function() {
    return this.each(function() {

      var startX,
          startY,
          $this = $(this);
      var moveTime = new Date().getTime();

      $this.bind('touchstart', touchstart);

      function touchstart(event) {
        var touches = event.originalEvent.touches;
        if (touches && touches.length) {
          startX = touches[0].pageX;
          startY = touches[0].pageY;
          $this.bind('touchmove', touchmove);
        }
      }

      function touchmove(event) {
        var touches = event.originalEvent.touches;
        if (touches.length >= 2){
          return;
        }

        var map_elem = document.querySelector('#map_seoul');
        var x1 = window.pageXOffset + map_elem.getBoundingClientRect().left;
        var y1 = window.pageYOffset + map_elem.getBoundingClientRect().top;
        var x2 = window.pageXOffset + map_elem.getBoundingClientRect().right;
        var y2 = window.pageYOffset + map_elem.getBoundingClientRect().bottom;
        if ((x1 < touches[0].pageX && touches[0].pageX < x2) && (y1 < touches[0].pageY && touches[0].pageY < y2)){
            return;
        }

        var map_elem = document.querySelector('#map_daegu');
        var x1 = window.pageXOffset + map_elem.getBoundingClientRect().left;
        var y1 = window.pageYOffset + map_elem.getBoundingClientRect().top;
        var x2 = window.pageXOffset + map_elem.getBoundingClientRect().right;
        var y2 = window.pageYOffset + map_elem.getBoundingClientRect().bottom;
        if ((x1 < touches[0].pageX && touches[0].pageX < x2) && (y1 < touches[0].pageY && touches[0].pageY < y2)){
            return;
        }

        var map_elem = document.querySelector('#map_daejeon');
        var x1 = window.pageXOffset + map_elem.getBoundingClientRect().left;
        var y1 = window.pageYOffset + map_elem.getBoundingClientRect().top;
        var x2 = window.pageXOffset + map_elem.getBoundingClientRect().right;
        var y2 = window.pageYOffset + map_elem.getBoundingClientRect().bottom;
        if ((x1 < touches[0].pageX && touches[0].pageX < x2) && (y1 < touches[0].pageY && touches[0].pageY < y2)){
            return;
        }

        let curTime = new Date().getTime();
        if (curTime-moveTime < 10){
          return;
        }




        if (touches && touches.length) {
          var deltaX = startX - touches[0].pageX;
          var deltaY = startY - touches[0].pageY;

          if (cur_idx == 3){
            sensitivity = 100;
          } else {
            sensitivity = 40;
          }
          if (deltaX >= sensitivity) {
            $this.trigger("swipeLeft");
          }
          if (deltaX <= -sensitivity) {
            $this.trigger("swipeRight");
          }
          if (deltaY >= sensitivity) {
            $this.trigger("swipeUp");
            moveTime = new Date().getTime();
          }
          if (deltaY <= -sensitivity) {
            $this.trigger("swipeDown");
            moveTime = new Date().getTime();
          }
          if (Math.abs(deltaX) >= sensitivity || Math.abs(deltaY) >= sensitivity) {
            $this.unbind('touchmove', touchmove);
          }
        }
      }

    });
  };
  $(".main").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: false,
    updateURL: false,
    loop: false,
    keyboard: false,
    responsiveFallback: false,
    smooth: true,
    direction: "vertical",
    beforeMove: function(index) {

	  },
    afterMove: function(index) {
      cur_idx = index;
    }
  });


  var dday = new Date("Jun 4, 2022, 0:00:00").getTime();
  setInterval(function() {
    var today = new Date().getTime();
    var gap = dday - today;
    var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
    document.getElementById("dday").innerHTML = "D - " + day;
  }, 1000);


  $(".fa-chevron-down").each(function () {
    $(this).css("opacity", "1");
  });



  function preventDefault(e) {
    e.preventDefault();
  }
  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true; }
    }));
  } catch(e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';



  $("body").velocity("transition.fadeIn");
  /* First Page */
  var type_speed = 130;

  $(".typed_welcome1").typed({
    strings: ['살랑이는 바람결에^500\n푸르름이 쏟아지는 여름날^500\n저희 두 사람이 함께하는^500\n앞날을 약속하고자 합니다.^500\n\n서로의 삶을 달콤하게^500\n그리고 더 특별하게 채우겠습니다.^500\n마음 가득 저희의 시작을 축복해주시면^500\n그 마음 잊지 않고 잘 살겠습니다.'],
    typeSpeed: 50,
    startDelay : 3000,
    loop: false
  });

  $("#page-1 #intro-hero").add("#free").add("#page-1 h3.h2").css("visibility", "visible").velocity("transition.slideUpBig");

});
