				/*----- Modal Form & Overlay -----*/

$(function(){
	$('.typesDrilling__block_button').click(function(event){
		event.preventDefault();
		$('.overlay').fadeIn(400,
 			function(){
				$('.modalForm_wellDrilling') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
			});
	});

	$('.overlay').click( function(){
		$('.modalForm_wellDrilling')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
				}
			);
	});
});

$(function(){
	$('.service__button.form__button').click(function(event){
		event.preventDefault();
		$('.overlay').fadeIn(400,
 			function(){
				$('.modalForm_service') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
			});
	});

	$('.overlay').click( function(){
		$('.modalForm_service')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
				}
			);
	});
});