$( document ).ready(function() {
    $(function() {
        $(function() {
            $('.tabs__btn').click(function(e){
                e.preventDefault();
                const tab_id = $(this).attr('href');

                $('.tabs__btn').removeClass('active');
                $('.tabs__content').removeClass('active');

                $(this).addClass('active');
                $(tab_id).addClass('active');
            })
        });
        $('.nav__btn').click(function(e){
            e.preventDefault();
            $('.nav').toggleClass('active');
        })
    });
});