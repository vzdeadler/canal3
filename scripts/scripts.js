$(document).ready(function() {

    $('.vidTextSpan').text(function(){
        return $(this).text().substring(0,75);
    });

    $('.vidTextSpanLong').text(function(){
        return $(this).text().substring(0,500);
    });

    $(document).ready(function() {
        console.log( "ready!" );
    });

    $('.headerSearcher').click(function(){
        $('.headerSearch').show();
    });

    $('.headerSearch').focusout(function(){
        $('.headerSearch').hide();
    });

    $('.headerSearch').mouseout(function(){
        if(!$('.headerSearchInput').is(':focus'))
            $('.headerSearch').hide();
    });

    $('.headerSearchInput').on('keypress', function (e) {
        if(e.which === 13){
            $('.searchButton').click();
        }
    });

    $('.modalBtn').click(function(){
        $('#videoModal').modal('show');
    });
    
    $('.mobileMenuImage').click(function(){
        // $('.mobileMenu').toggle();
        $('.mobileMenu').slideToggle('slow');
    });

    // $('.searchButton').click(function(){
    //     console.log('asd');
    // });

    //Necesario para el border bottom de suscribir.
    var sectionWidth = $('.subscribeSection').width();
    console.log(sectionWidth);
    $('.subscribeSectionDiamond').css('border-left', (sectionWidth/2) + 'px solid #333333');
    $('.subscribeSectionDiamond').css('border-right', (sectionWidth/2) + 'px solid #333333');

    window.addEventListener('resize', function () {
        var sectionWidth = $('.subscribeSection').width();
        $('.subscribeSectionDiamond').css('border-left', (sectionWidth/2) + 'px solid #333333');
        $('.subscribeSectionDiamond').css('border-right', (sectionWidth/2) + 'px solid #333333');

        if($('.leftTopImageWrapper').height() > $('.rightContent').height()){
            $('.leftTopImageWrapper').height($('.rightContent').height());
        }else{
            $('.leftTopImageWrapper').height('auto');
        }
    });

    //Para emparejar el div de noticias.
    if($('.leftTopImageWrapper').height() > $('.rightContent').height()){
        $('.leftTopImageWrapper').height($('.rightContent').height());
    }
    

    //CAMBIA EL FOOTER EXCEPTO EN EL HOME
    if($('.carousel').hasClass('slide')){
        console.log('home here');
        if($('.foo').hasClass('footerNotHome')){
            $('.foo').addClass('footer');
            $('.foo').removeClass('footerNotHome');
        }
    }else{
        console.log('not home');
        if($('.foo').hasClass('footer')){
            $('.foo').addClass('footerNotHome');
            $('.foo').removeClass('footer');
        }
    }

    $('.carousel').carousel('cycle');
    $('.carousel').carousel({
        interval: 1000,
        wrap: false
    });



    

    

});