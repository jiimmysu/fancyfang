 if (window.location.protocol == 'http:') {
    window.location = 'https://' + window.location.hostname + window.location.pathname + window.location.hash;
 }

 $(window).on('scroll', function(){
    var nowscroll = $(this).scrollTop();
    var block1height = $('.block-top').outerHeight() - 80;
    var worksheight = $('.block-works').offset().top - 380;
    var sloganpos = $('.block-slogan').offset().top - 80;
    //gotop 
    nowscroll > $(window).innerHeight() ? $('.side-backtop').addClass('in') : $('.side-backtop').removeClass('in');

    //header
    // if (nowscroll > sloganpos){
    //     $('.header').addClass('hide');
    // }
    if (nowscroll > block1height){    
        $('.header').addClass('smaller');    
        if (nowscroll > worksheight){
            $('.side-contact').addClass('white');
            $('.header').removeClass('white');
            $('.btn-nav-open').removeClass('black');
            $('.site-name').removeClass('black');
        }
        else{
            $('.side-contact').removeClass('white');
            $('.header').addClass('white');
            $('.btn-nav-open').addClass('black');
            $('.site-name').addClass('black');
        }
    }    
    else{        
        $('.header').removeClass('smaller');
        $('.header').removeClass('white');
        $('.btn-nav-open').removeClass('black');
        $('.site-name').removeClass('black');
    }
 })

//  各頁
 $('body').on('click', '.side-contact, .menu-link', function(){
    var pos = $($(this).attr('href')).offset().top;
    $('body, html').animate({'scrollTop':pos }, 500)
    $('.menu').removeClass('menu-open').fadeOut();
 })

//  回頂端
 $('.backtop, .side-backtop').on('click', function(){
     $('body, html').animate({'scrollTop':0 }, 500)
 })

//  選單
$('.btn-nav-open').on('click', function(){
    $('.menu').addClass('menu-open').fadeIn()
})

$('.btn-nav-close').on('click', function(){
    $('.menu').removeClass('menu-open').fadeOut();
})

// 開關
$('.switch').on('change', function(){      
    var switch_wrap = $(this).parent().parent();    
    if ($(this).prop('checked') == true){
        switch_wrap.addClass('active');    
        $('.block-official').addClass('in');
        $('.block-private').removeClass('in');     
    } 
    else{
        switch_wrap.removeClass('active');   
        $('.block-private').addClass('in');
        $('.block-official').removeClass('in');     
    }              
   
})

$('.block-hightlight2').on('click', '.more, .collapse-hightlight2', function(){
    $('.block-hightlight2').toggleClass('in');
    $('body, html').animate({'scrollTop':$('#hightlight2').offset().top }, 500)
})

$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        // Enable lazy loading
        //lazy: true,
        //preloadImages: true,
        //direction : 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        //autoHeight: true,
        effect:'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        speed:0,
        grabCursor: true,
        slidesPerView: 1,   
        autoHeight:true,            
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
         on: {
        //     init: function () {                
        //         works_nav();            
        //     },
             slideChange: function () {
                 works_nav();
             },
        }    
      });
    
      $('.works-total').text(mySwiper.slides.length);

      function works_nav(){
        $('.works-now').text(mySwiper.realIndex+1);
      }
})

