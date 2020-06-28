$(document).ready(function() {
	var value = '5';
	box = '5';
	pc = '5';
	pcbox = '5';
	score = 0;
	width=$(window).width();
	var excuted = false;
	// var resposive = function(element){$(element).width()/2}
	$(".gamecontainer>*:not(:nth-child(-n+2))").css({right:"-=400"})
	$('.background').css('height', $(document).height());
	$(window).on('resize', function() {
		$('.background').css('height', $(document).height());
		
	
	});

	/*if ($(window).width() < 902 && excuted == false) {
		excuted = true;
		$(".thegame .container>div>div:not(':nth-child(-n+2)'):not('" + pcbox + "')").animate(
			{ right: '-=' + (400 - container) },
			100
		);
	}
	$(window).on('resize', function() {
		if ($(window).width() < 902 && excuted == false) {
			excuted = true;
			$(".thegame .container>div>div:not(':nth-child(-n+2)'):not('" + pcbox + "')").animate(
				{ right: '-=' + (400 - container) },
				100
			);
			
		} else if ($(window).width() >= 902 && excuted == true) {
			excuted = false;
			$(".thegame .container>div>div:not(':nth-child(-n+2)'):not('" + pcbox + "')").animate(
				{ right: '-=' + (400 - container) },
				100
			);
		}
	});*/

	$('.rules').on('click', function() {
		$('.overlay, .rulesboard').show(300);
	});
	$('.overlay, .rulesboard svg').on('click', function() {
		$('.overlay, .rulesboard').hide(300);
	});

	var myfunc = function() {
		value = $(this).attr('data-value');
		box = '.box' + value;
		$('.box1,.box2,.box3').off('click', myfunc);
		$(box + '>.ringo~*').addClass('clearshadow');
		$(box).animate({ top: '+=10' }, 250);
		window.setTimeout(function() {
			$(box).addClass('scale');
		}, 900);
		$('.thegame .container>div>*:not(' + box + '):not(":nth-child(-n+2)")').hide(400);
		if(width>=850){ $(box).delay(500).animate({ top: '0', right: '140' });}
		else if(width<850 && width>=640){$(box).delay(500).animate({ top: '0', right: '80px' })}
		else if(width<640){$(box).delay(500).animate({ top: '0', right: '60px' })}
		pc = Math.floor(Math.random() * 3) + 1;
		pcbox = '.box' + pc;
		if (pc == value) {
			$(box)
				.clone()
				.appendTo('.thegame .container .gamecontainer')
				.hide();
				if(width>=850){$(box).css({ right: '-320px', top: '0'})}
				else if(width<850 && width>=640){$(box).css({ top: '0', right: '-260px' })}
				else if(width<640){$(box).css({ top: '0', right: '-240px' })}
				$(box).delay(1000)
				.fadeIn(800);
			$('.result p').text('DRAW').delay(1400).animate({ opacity: '1' });
			
		} else if (pc != value) {
			$(pcbox + '>.ringo~*').addClass('clearshadow');
			if(width>=850){$(pcbox).css({ right: '-320px', top: '0'})}
			else if(width<850 && width>=640){$(pcbox).css({ top: '0', right: '-260px' })}
			else if(width<640){$(pcbox).css({ top: '0', right: '-240px' })}
			$(pcbox).addClass('scale').delay(1000).fadeIn(800);
			
			if ((value == 1 && pc == 3) || (value == 2 && pc == 1) || (value == 3 && pc == 2)) {
				pc = null;
				$('.result p').text('YOU WIN').delay(1400).animate({ opacity: '1' });
				window.setTimeout(function() {
					$(box + ' .ring,' + box + ' .ringo').addClass('ringscale');
					score = score + 1;
					$('.score p').text(score);
				}, 1500);
			} else if ((value == 1 && pc == 2) || (value == 2 && pc == 3) || (value == 3 && pc == 1)) {
				pc = null;
				$('.result p').text('YOU LOSE').delay(1400).animate({ opacity: '1' });
				window.setTimeout(function() {
					$(pcbox + ' .ring,' + pcbox + ' .ringo').addClass('ringscale');
					score = score - 1;
					$('.score p').text(score);
				}, 1500);
			}
		}
		$('.playagain').delay(1800).slideDown(400);
	};
	$("[class^='box']").on('click', myfunc);
	$('.playagain').on('click', function() {
		$('.box1,.box2,.box3').on('click', myfunc);
		$('[class^="box"]>.ringo~*').removeClass('clearshadow');
		if (pcbox == box) {
			$('.thegame .container>.gamecontainer>.saver+div').remove();
		}

		$('[class^="box"]').css({ top: '-=10' });
		$('[class^="box"]').removeClass('scale');
		$(box + ',' + pcbox).fadeOut(400).delay(400).fadeIn(500);
		$('.thegame .container>.gamecontainer>*:not(' + box + '):not(' + pcbox + '):not(":nth-child(-n+2)")').delay(800).fadeIn(500);
		pcbox = 5;
		
			window.setTimeout(function() {
				$('.box1').css({ top: '-83px', right: '35px' });
				$('.box2').css({ top: '-83px', right: '-215px'});
				$('.box3').css({ top: '140.5px', right: '-90px' });
			}, 500);
		
			
		

		$('.ring,.ringo').removeClass('ringscale');
		$('.playagain').slideUp(400);
		$('.result p').animate({ opacity: '0' });
	});

	/*check box*/
	$('.customCheckBox').click(function() {
		if (!$('input[type="checkbox"]').is(':checked')) {
			$('.background').css({ background: ' radial-gradient(circle at 50% -100%, #fff -150%,#001B26)' });
			$('.box1 img').attr('src', 'img/paperd.png').css({ width: '80px', left: '25px', top: '5px' });
			$('.box2 img').attr('src', 'img/cissorsd.png').css({ width: '80px', left: '25px', top: '5px' });
			$('.box3 img').attr('src', 'img/rockd.png').css({ width: '80px', left: '25px', top: '20px' });
			$('.avatar').css({ background: '#17171a' });
			$('.circle1').css({ background: '	#071845' });
			$('.circle2').css({ background: '	#390e52' });
			$('.circle3').css({ background: '	#510000' });
			$("[class^='triangle']").css({ background: 'rgba(0,0,0,.5)' });
		} else if ($("input[type='checkbox']").is(':checked')) {
			$('.background').css({ background: ' radial-gradient(circle at top center, #2d3588 40%, #131639)' });
			$('.box1 img').attr('src', 'img/paper.png');
			$('.box2 img').attr('src', 'img/cissors.png');
			$('.box3 img').attr('src', 'img/rock.png');
			$('[class^=box] img').css({ width: '100px', left: '15px', top: '15px' });
			$('.avatar').css({ background: '#fff' });
			$('.circle1').css({ background: '	#4b69ff' });
			$('.circle2').css({ background: '	#ffb726' });
			$('.circle3').css({ background: '	#ff355a' });
		}
	});
});
