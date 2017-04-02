$(document).ready(function(){

    $('.drop-down').hide();

    $('.list-inline li').hover(function() {
      $(this).find('.drop-down').stop(true, true).delay(100).fadeIn(300);
    }, function() {
      $(this).find('.drop-down').stop(true, true).delay(100).fadeOut(300);
    });


    /* Прелоадер 

    // I use the following pattern:

    var imgCount = $("#carousel img").length;
    var loadCounter = 0;

    $("#carousel img").one("load", function() {
        loadCounter++;
        if(loadCounter == imgCount) {

            // all images have loaded, fire up carousel
            $("#carousel").carousel();
        }
    }).each(function() {
        if(this.complete) $(this).trigger("load");
    });

    */
});