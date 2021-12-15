$(document).ready(function() {
    //Menu Dropdown
	$('#menu-button').click(function(e){
        e.preventDefault();
        $('.main-nav').slideToggle(200);
	});
    if($('#menu-button').is(':visible')){
        $('.main-nav a').click(function(e){
            //e.preventDefault();
            $('.main-nav').slideToggle(200);
        });
    }


    //Read More
    $('.keep-reading').on('click', function (e) {
        e.preventDefault();
        var previewText = $(this).parent().parent().find('.preview-text');
        var fullText = $(this).parent().parent().find('.full-text');

        if (  fullText.is(':visible') ) {
            $(this).text('Keep reading +');
            previewText.show();
            fullText.hide();
        } else {
            
            $(this).text('Show less');
            previewText.hide();
            fullText.show();
        }
        
    });
    
});


