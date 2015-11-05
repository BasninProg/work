jQuery(function() {
	jQuery(document).ready(function() {     
      jQuery('#old-year')
        .prop('number', 1)
              .animateNumber(
                {
                  number: 8
                },
                5000
              );
        jQuery('#project')
        .prop('number', 100)
              .animateNumber(
                {
                  number: 300
                },
                5000
              );
            return false;
	});          	
});     
