$(document).ready(function() {
    var showSkill = false;

    $('.scrollTop').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html').animate({ scrollTop: targetPos }, 1000)
    })




    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        $('.scrollTop').each(function() {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active');
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });

        // 活動元素條
        var skillTop = $('#skills').position().top;
        if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
            showSkill = true;
            $('#skills .progress-bar').each(function() {
                var thisVal = $(this).data('progress');
                console.log('thisVal', thisVal);
                $(this).css('width', thisVal + '%');
            });
        }

        //animated
        $('.animated').each(function() {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });

        // bg scroll
        $('#profiles').css('background-position-y', -(scrollPos / 2) + 'px');
        $('#header-ele').css('transform', 'translateY(' + (scrollPos / 2) + 'px');


    })

});