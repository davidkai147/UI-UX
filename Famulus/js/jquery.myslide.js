var responsiveMenu = false;

function showMenu() {
	 		$('.menuBtn i').hide();
	 		$("#responsiveMenu").css('display','block');
	 		$("#responsiveMenu").animate({
			    opacity: 1,
			    right: "0"
			}, 300, function() {
			    // Animation complete.
			    responsiveMenu = true;
			});
	 	}

	 	function closeMenu() {
	 		$("#responsiveMenu").animate({
			    opacity: 0,
			    right: "-350px"
			}, 300, function() {
			    // Animation complete.
			    $('.menuBtn i').show();
			    $("#responsiveMenu").css('display','none');
			    responsiveMenu = false;
			});
	 	}

	 	function calcBooking(paramType) {
	 		switch(paramType) {
	 			case 'minusRoom':
	 				var room = parseInt($('#numOfRoom').html());
	 				room--;
	 				if (room < 1) {
	 					room = 1;
	 				}
	 				$('#numOfRoom').html(room);
	 				break;
	 			case 'plusRoom':
	 				var room = parseInt($('#numOfRoom').html());
	 				room++;
	 				$('#numOfRoom').html(room);
	 				break;
	 			case 'minusAdults':
	 				var adult = parseInt($('#numOfAdults').html());
	 				adult--;
	 				if (adult < 1) {
	 					adult = 1;
	 				}
	 				$('#numOfAdults').html(adult);
	 				break;
	 			case 'plusAdults':
	 				var adult = parseInt($('#numOfAdults').html());
	 				adult++;
	 				$('#numOfAdults').html(adult);
	 				break;
	 			case 'minusChildren':
	 				var children = parseInt($('#numOfChildren').html());
	 				children--;
	 				if (children < 1) {
	 					children = 1;
	 				}
	 				$('#numOfChildren').html(children);
	 				break;
	 			case 'plusChildren':
	 				var children = parseInt($('#numOfChildren').html());
	 				children++;
	 				$('#numOfChildren').html(children);
	 				break;

	 		}
	 		var stringTotal = '';
	 			stringTotal += $('#numOfRoom').html() + ' Room, '  + $('#numOfAdults').html() + ' Adults, ' + $('#numOfChildren').html() + ' Children';
	 			$('#bookRlt').html(stringTotal);
	 	}