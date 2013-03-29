jQuery(document).ready(function(){
    initiateScroller();
});

var initiateScroller = function(){
    var scrollDiv = jQuery('#scrollDiv');
    if(scrollDiv.length === 0){
        scrollDiv = document.createElement('div');
        scrollDivUp = document.createElement('div');
        scrollDivDown = document.createElement('div');
        scrollDiv.setAttribute("id", "scrollDiv");
        scrollDivUp.setAttribute("id", "scrollDivUp");
        scrollDivDown.setAttribute("id", "scrollDivDown");
        document.body.appendChild(scrollDiv);
        scrollDiv.appendChild(scrollDivUp);
        scrollDiv.appendChild(scrollDivDown);
        scrollDivJ = jQuery('#scrollDiv');
        scrollDivUpJ = jQuery('#scrollDivUp');
        scrollDivDownJ = jQuery('#scrollDivDown');
        scrollDivJ.hover(
            function(){
                scrollDivJ.animate({opacity : 0.5});
            },
            function(){
                scrollDivJ.animate({opacity : 0.1});
            }
        );
        scrollDivUpJ.click(function(e) {
            e.preventDefault();
            jQuery('html,body').animate({ scrollTop: '-=350px'}, 1000);
        });
        scrollDivDownJ.click(function(e) {
            e.preventDefault();
            jQuery('html,body').animate({ scrollTop: '+=350px'}, 1000);
        });

    }
};
