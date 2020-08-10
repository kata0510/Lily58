require(["gitbook"], function(gitbook) {
	$('.gitbook-link').hide(); 
    gitbook.events.bind("page.change", function() {
    	console.log("Hello custom plugin")
    	$('.gitbook-link').hide();    
        // $('ul.summary li li').hide();
        // $('ul.summary li').find('li.active').parent().children().show();
        // $('ul.summary li li.active').parents().children().show();
        // $('ul.summary li.active > ul > li').show();        
    });
});
