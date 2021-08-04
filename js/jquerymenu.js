jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery('.menu ul').toggle();
        e.preventDefault();
    });
});


    jQuery(document).ready(function() {
    jQuery('.arrow-icon').click(function(e) {
        if(jQuery(window).height() < 767){
        jQuery('.menu-language ul').toggle();
        e.preventDefault();}else{
            jQuery('.nocurrent').toggle();
        e.preventDefault();
        }
    });
    });
 

