
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


//Work On portfolio project Filter 

// for(var i =0; i<lis.length; i++){
//     lis[i].addEventListener("click", function(){

// let value = $(this).attr('data-filter');
// if(value='all'){
//   $('.gallery-item').show();
// }else{
//     $('.gallery-item').not('.' +value).hide();
//     $('.gallery-item').filter('.' +value).show();

// }
//     })
// };