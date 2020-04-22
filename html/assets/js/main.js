/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
			if (browser.os == 'wp' && browser.osVersion < 10)
				$('#navButton, #navPanel, #page-wrapper')
					.css('transition', 'none');

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

		function getOS() {
		  var userAgent = window.navigator.userAgent,
		      platform = window.navigator.platform,
		      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		      os = null;

		  if (macosPlatforms.indexOf(platform) !== -1) {
		    os = 'macos';
		  } else if (iosPlatforms.indexOf(platform) !== -1) {
		    os = 'ios';
		  } else if (windowsPlatforms.indexOf(platform) !== -1) {
		    os = 'windows';
		  } else if (/Android/.test(userAgent)) {
		    os = 'android';
		  } else if (!os && /Linux/.test(platform)) {
		    os = 'linux';
		  }

		  return os;
		}


	function activate(tag) {
		let items = document.getElementsByClassName(tag);
		for(var i = 0; i < items.length; i++)
		{
		   items[i].style.display = "initial";
		}
	}

	const identity = x => x;

	function setContent(queryParam, variable, transformation = identity) {
		const urlParams = new URLSearchParams(window.location.search);
		let value = urlParams.get(queryParam);
		if (document.getElementById(variable)) {
			document.getElementById(variable).innerHTML = transformation(value);
		}
	}

	// dynamic content
	const urlParams = new URLSearchParams(window.location.search);

	// Variables
	setContent('screenOff', 'screen-off');
	setContent('screenSaver', 'screen-saver');
	setContent('screenCount', 'screen-count');
	let screens = urlParams.get('screenCount');

	let nightUpTime = 10;
	let averageScreenConsumption = 30 * 0.001;
	let oilkWhMass = 0.086;
	let oilDensity = 0.9;
	let monthNights = 28;
	let screensPower = (x) => { return (x * nightUpTime * averageScreenConsumption, 2).toFixed(2)}
	setContent('screenCount', 'power', screensPower);

	let screensConsumption = (x) => {return (x * nightUpTime * averageScreenConsumption * oilkWhMass * oilDensity * monthNights).toFixed(2)}
	setContent('screenCount', 'monthOil', screensConsumption);

	// Status
	const os = getOS();
	if (urlParams.entries().next().value == null) {
		activate('welcome');
		return;
	}
	else {
		console.log(`os found: ${os}`);
		activate(os)
	}
	const screenOff = parseInt(urlParams.get('screenOff'));
	const screenSaver = parseInt(urlParams.get('screenSaver'));
	console.log(`Screen turned off after:${screenOff}s`);
	if (screenOff > 0 || screenSaver > 0) {
		activate('awesome');
	}
	else {
		activate("improve");
	}

})(jQuery);
