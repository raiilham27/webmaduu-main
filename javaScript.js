$(document).ready(function() {
    // Smooth scroll untuk navigation links
    $('.nav-links a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 800);
    });

    // Fade in animation saat scroll
    $(window).scroll(function() {
        $('.ingredient-card, .product-card, .article-card').each(function() {
            var position = $(this).offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scrollTop + windowHeight > position + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });

    // Set initial state untuk animasi
    $('.ingredient-card, .product-card, .article-card').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.6s ease'
    });

    // CTA Button animation
    $('.cta-button').click(function() {
        alert('Terima kasih! Hubungi kami untuk pemesanan.');
    });

    // Hover effect untuk navigation
    $('.nav-links a').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );
});