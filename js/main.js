
//Carousel for testimonials
$('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    dots: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        1000: {
            items: 2,

        },
        1500: {
            items: 3,

        },
        1920: {
            items: 3,

        }
    }
})


//Active Button in portfolio Section


let lis = document.getElementById('portfoliofilter').getElementsByTagName('a');

for(var i =0; i<lis.length; i++){
    lis[i].addEventListener("click", function(){

        var $container = jQuery('#gallery');

        $container.isotope({
            itemSelector: '.gallery-item',
            animationEngine: 'best-available',
            filter: '*'
        });
        var current = document.getElementsByClassName("selected");
      
        current[0].className = current[0].className.replace("selected", "");
        this.classList.add("selected");

        var filterValue = $(this).data('filter');
        $container.isotope({ filter: filterValue });
        return false;
       
    });
}


//Anchor Href 

let headerlist = document.getElementById('headerlist').getElementsByTagName('a');

for(var i =0; i<lis.length; i++){
    headerlist[i].addEventListener("click", function(e){

        if (this.href.indexOf('#') != -1) {
            e.preventDefault();
            $('.transition').animate({left:'100%'}, 1500)

            // test(this.hash);
            setTimeout(()=>{funct1(this.hash)},800);

        }


    });
}


//Close Button
$('.close').on("click", function(){

   
    $('.transition').animate({left:'-100%'},1500)
    setTimeout(()=>{
        let $section = document.getElementsByTagName('section');
        $($section).addClass('d-none');
        $('.mainsection').addClass('d-flex').removeClass('d-none');
        $('#navbar').show();
        $('.close').hide();
    },600);
})

var funct1 =function ($n){
    let $section = document.getElementsByTagName('section');
    $($section).addClass('d-none');
    $($n).addClass('d-block').removeClass('d-none');
    $('#navbar').hide();
     $('.close').show();
}



