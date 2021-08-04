jQuery(document).ready(function() {
    jQuery('.current').click(function(e) {
        jQuery('.menu-categories ul').toggle();        
        e.preventDefault();
    });
    jQuery('.toggle-nav').click(function(e) {
        jQuery('.menu-categories ul').hide();        
        e.preventDefault();
    });
});

