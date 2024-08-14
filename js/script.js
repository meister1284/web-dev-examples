// JavaScript Document

jQuery(document).ready(function(){

  $(".navi>li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

    $('.slidelist').bxSlider({
      mode: 'horizontal', // 슬라이드 전환 모드 (fade, horizontal, vertical 중 선택)
      captions: false, // 이미지에 캡션(제목) 표시
      auto: true, // 자동 슬라이드 활성화
      arrows: true, // 슬라이드 화살표 표시
      pager: true, // 페이지 네비게이션 표시
      minSlides: 1, // 최소 슬라이드 개수
      maxSlides: 1, // 최대 슬라이드 개수
      slideMargin: 0 // 슬라이드 사이의 간격
  });
    // $('.imgslide .slidelist').slick({
    //   autoplay: true,           // 자동 재생 활성화
    //   autoplaySpeed: 3000,      // 자동 재생 속도 (밀리초 단위)
    //   dots: true,               // 하단 점 네비게이션 표시
    //   arrows: true,             // 화살표 네비게이션 표시
    //   autoControls: true,
    //   infinite: true,           // 무한 루프
    //   speed: 1000,               // 슬라이드 전환 속도
    //   slidesToShow: 1,          // 한 번에 보여줄 슬라이드 개수
    //   slidesToScroll: 1         // 한 번에 스크롤할 슬라이드 개수
    // });
  // setInterval(function(){ 
  //   $('.slidelist').delay(1000);
  //   $('.slidelist').animate({marginTop:-400});
  //   $('.slidelist').delay(2000);
  //   $('.slidelist').animate({marginTop:-800});
  //   $('.slidelist').delay(2000);
  //   $('.slidelist').animate({marginTop:-1200});
  //   $('.slidelist').delay(2000);
  //   $('.slidelist').animate({marginTop:0});
  //   $('.slidelist').delay(2000);
  // });

  $(".notice li:first").click(function(){
    $("#layer").addClass("active");
  });
  $(".btn").click(function(){
    $("#layer").removeClass("active");
  });
  
});

