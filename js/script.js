$(window).on("load", function () {
    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(500);
    })

    $(".items").isotope({
        filter: "*",
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false,
        }
    })
})

$(document).ready(function () {

    $('#slides').superslides({
        animation: "fade",
        play: "5000" //图片替换时间 ms 1s=ms*1000
    })

    // 内容打字效果
    var t = new Typed(".slides-sub", {
        strings: ["Software Engineer", "Full-Stack", "Cloud Engineering"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    });


    // 走马灯
    $('.owl-carousel').owlCarousel({
        // loop: true,
        // autoplay: true,
        // autoplayTimeout: 2500,
        // autoplayHoverPause: true,
        items: 4,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })



    var skillsTopOffset = $(".skillSection").offset().top;
    // var statsTopOffset = $(".statsSection").offset().top;
    // var needCountUp = true
    // $(window).scroll(function () {
    //     if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
    //         $('.chart').easyPieChart({
    //             easing: 'easeInOut',
    //             barColor: '#fff',
    //             trackColor: false,
    //             scaleColor: false,
    //             lineWidth: 4,
    //             size: 152,
    //             onStep: function (from, to, percent) {
    //                 $(this.el).find('.percent').text(Math.round(percent));
    //             }
    //         });
    //     }

    //     if (needCountUp && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
    //         needCountUp = false
    //         $(".countup").each(function () {
    //             var element = $(this)
    //             var endVal = parseInt(element.text());
    //             element.countup(endVal)
    //         })
    //     }
    // })

    $("[data-fancybox]").fancybox();



    $("#filters a").click(function () {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter")

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false,
            }
        })

        return false;

    })


    $('#navigation li a').click(function (e) {
        e.preventDefault()

        var targetElement = $(this).attr('href')

        var targetPosition = $(targetElement).offset().top;

        $("html,body").animate({ scrollTop: targetPosition - 50 }, "fast")

    })

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        const body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + "px")
            body.addClass("fixedNav")
        }
        else {
            body.css('padding-top', 0)
            body.removeClass("fixedNav")
        }
    }

});