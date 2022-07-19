<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/3.0.0/noframework.waypoints.min.js"></script><script>

 $(document).ready(function(){

  $( 'body' ).addClass( 'js' );


	/*	Detect the problem ones */

	var is_ios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
	if(is_ios) { 
		$('html').addClass('is-ios');
	}
	
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	if(is_safari) { 
		$('html').addClass('is-safari');
	}

	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;				
	if(is_firefox) { 
		$('html').addClass('is-ff');
	}



$( ".site-nav" ).click(function() {
  $( 'html' ).addClass( 'nav-open' );
});

$( ".close-nav" ).click(function() {
  $( 'html' ).removeClass( 'nav-open' );
});

$(document).keyup(function(e) {
 if (e.key === "Escape") { // escape key maps to keycode `27`
	$( 'html' ).removeClass( 'nav-open' );
}
});


$( "#show-the-nav" ).removeAttr( "href" );

var topInView = document.getElementsByClassName('animate-when-top-in-view');

for (var j = 0; j < topInView.length; j++) {
	new Waypoint({
		element: topInView[j],
		handler: function(direction) {
			this.element.classList.add("top-is-in-view");
			if ( direction == 'down' ) {
				$('body').addClass('unfix-last-section');
			}
			else if ( direction == 'down' ) {
				$('body').removeClass('unfix-last-section');
			}
		},
		offset: '100%'
	});
}

var discreteElements = document.getElementsByClassName('animate-this')
	for (var i = 0; i < discreteElements.length; i++) {
		new Waypoint({
			element: discreteElements[i],
			handler: function() {
				this.element.classList.add("top-25pfrom-topOfWindow");
			},
			offset: '25%'
		});
		new Waypoint({
			element: discreteElements[i],
			handler: function() {
				this.element.classList.add("top-50pfrom-topOfWindow");
			},
			offset: '50%'
		});

		new Waypoint({
			element: discreteElements[i],
			handler: function() {
				this.element.classList.add("bottom-in-view");
			},
			offset: 'bottom-in-view'
		});
				
		new Waypoint({
			element: discreteElements[i],
			handler: function(direction) {
				if ( direction == 'down' ) {
					this.element.classList.add("temp-reveal");
				}
				else {
					this.element.classList.remove("temp-reveal");
				}
			},
			offset: 'bottom-in-view'
		});
		
		
		
		new Waypoint({
			element: discreteElements[i],
			handler: function() {
				this.element.classList.remove("temporary-viewing");
			},
			offset: 'bottom-in-view'
		});
	}
});



</script>