$(window).on('load resize scroll', function(){
    var _scroll = $(window).scrollTop();
    var _toTopButton = $('.to-top-button');
    var _wh = $(window).height();
    var _header = $('.header');
    var _headerScroll = 0;
    //--------to top button
    if(_scroll > 0) {
        if(_headerScroll == 0){
            _headerScroll++;
            _header.addClass('active');
        }
    }
    else {
        _headerScroll--;
        _header.removeClass('active');
    }
    if(_scroll > 400)
    {
        if(!_toTopButton.hasClass('active')){
            _toTopButton.addClass('active');
        }
    } else{
        _toTopButton.removeClass('active');
    }
    
    let _headerHeight = _header.height(); 
    let _menu = $('.secondary-menu');
    let _menuHeight = _menu.height();
    let _menuOffsetTop = Math.floor(_menu.offset().top) + _menuHeight;

    _headerHeight + _scroll >= _menuOffsetTop ?
        $('.hambuger-button').addClass('is-show') :
        $('.hambuger-button').removeClass('is-show');
    
    return false;
});

$('.to-top-button').click(function(event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: 0//$($.attr(this, 'href')).offset().top
    }, 'slow', 'linear');
    return false;
});

var _menuOpen = 0;
$('.hambuger-button').click(function(){
    let _this = $(this);
    var _menu = $('.primary-menu');

    if(_menuOpen == 0)
    {
        if(!_this.hasClass('active')){

            _this.addClass('active');
            _menu.addClass('active').addClass('bounceInLeft');
            
            delayF(function(){
                _menuOpen = 1;
                _menu.removeClass('bounceInLeft');

            },800)();
        }
    }
    else{
        if(_this.hasClass('active')){
            
             _menu.addClass('bounceOutLeft');

            delayF(function(){
                _this.removeClass('active');
 
                _menu.removeClass('active').removeClass('bounceOutLeft');

                _menuOpen = 0;}, 300)();
        }
    }
    return false;
});

var _mvScroll = 0;
$('.mv').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta < 0 && _mvScroll == 0) 
    {
        _mvScroll = 1;
        var _headerHeight = $('.header').height();
        $('html, body').animate({
             scrollTop: $('.message').offset().top - _headerHeight }, 500, function(){_mvScroll = 0;});
}});

// nav srcoll
$('.nav-scroll').click(function(event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 'slow', 'linear');
    return false;
});

// nav link
$('.nav-link').click(function(){
    return false;
});

//----------delay function-------//
function delayF(func, timed){
    let timeout;
    return function(){
        let _f = func;
        clearTimeout(timeout);
        timeout = setTimeout(_f, timed);
    };
}