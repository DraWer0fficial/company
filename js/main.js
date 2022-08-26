window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
if (w > 780) {
} else { 
  $("header #hamburger").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
    });
  }
}); 

// ふわっとアニメーション
function fadeAnime() {
  
  $('.fadeUpTrigger').each(function()
  {
    var elemPos = 
    $(this).offset().top-100;

      var scroll = 
    $(window).scrollTop();
      var windowHeight = 
    $(window).height();
      if (scroll >= elemPos - windowHeight){

        $(this).addClass('fadeUp');
      }else{

        $(this).removeClass('fadeUp')
      }
  });
}

$(window).scroll(function (){
  fadeAnime();
});

// ローディングアニメーション
const loadAnime = $('#load_animation');
$(window).on('load', function () {
  loadAnime.delay(3500).fadeOut(1000);
})

function stopload() {
  loadAnime.delay(1000).fadeOut(700);
}
setTimeout('stopload()', 10000);

// スムーススクロールコンタクト
$('#js_nav a').on('click',function () {
  let hrefElement = $(this).attr('href');
  let headerHeight = $('#header').outerHeight(true);
  let position = $(hrefElement).offset().top - headerHeight;
  $('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});

// ページトップアイコン
function PageTopAnime () {
  var scroll = $(window).scrollTop();
  if(scroll >= 100){
    $('#page_top').removeClass('DownMove');
    $('#page_top').addClass('UpMove');
  }else{
    if($('#page_top').hasClass('UpMove')){
      $('#page_top').removeClass('UpMove');
      $('#page_top').addClass('DownMove');
    }
  }
}

$(window).scroll(function() {
  PageTopAnime();
});

$(window).on('load',function() {
  PageTopAnime();
});

$('#page_top').click(function() {
  var scroll = $(window).scrollTop();
  if(scroll > 0){
    $(this).addClass('floatAnime');
    $('body,html').animate({
      scrollTop: 0
    },2000,function(){
        $('#page_top').removeClass('floatAnime');
    });
  }
  return false;
});