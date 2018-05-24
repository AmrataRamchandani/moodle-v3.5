jQuery(function($) {

    if ($("input[type]").is(":radio")) {
        $(".answer").append("<button type='button' name='clear' style='display:none'>Clear</button>");
    }
    
    $("input[type='radio']:checked").each(function(e){
        $(this).closest('.answer').find("button").show();
    });
    

    $("input[type=radio]").on('click', function() {
    	$(this).closest('.answer').find('button[name=clear]').show();
    });

    $('button[name=clear]').on('click', function() {
        $(this).closest('.answer').find(':radio').prop('checked', false);
        $(this).closest('.answer').find('button[name=clear]').hide();
    });

    if ($('.content').parent().hasClass("deferredfeedback")) {
        if ($('.answer .r0 input').prop('disabled')) {
            $("button[name=clear]").remove();
        }
    } else {
    	if (!($('div.im-controls').length)) {
            $("button[name=clear]").remove();
        }
    }

});
