$('.carousel[data-mixed] ul').anoSlide({
    items: 5,
    speed: 500,
    prev: 'a.prev[data-prev]',
    next: 'a.next[data-next]',
    lazy: true,
    delay: 100
});

function setSliderContainer() {
    var mq = checkMQ();
    if (mq == 'desktop') {
        var slides = projectsSlider.children('li'),
            slideWidth = slides.eq(0).width(),
            marginLeft = Number(projectsSlider.children('li').eq(1).css('margin-left').replace('px', '')),
            sliderWidth = (slideWidth + marginLeft) * (slides.length) + 'px',
            slideCurrentIndex = projectsSlider.children('li.current').index();
        projectsSlider.css('width', sliderWidth);
        (slideCurrentIndex != 0) && setTranslateValue(projectsSlider, (slideCurrentIndex * (slideWidth + marginLeft) + 'px'));
    } else {
        projectsSlider.css('width', '');
        setTranslateValue(projectsSlider, 0);
    }
    resizing = false;
}

function setTranslateValue(item, translate) {
    item.css({
        '-moz-transform': 'translateX(-' + translate + ')',
        '-webkit-transform': 'translateX(-' + translate + ')',
        '-ms-transform': 'translateX(-' + translate + ')',
        'transform': 'translateX(-' + translate + ')',
    });
}

var resizing = false;
setSliderContainer();

$(window).on('resize', function() {
    if (!resizing) {
        window.requestAnimationFrame(setSliderContainer);
        resizing = true;
    }
});