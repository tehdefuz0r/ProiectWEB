
$('.js--prima-sectie').waypoint(function(direction) {
		"use strict";
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
});

$('.js--scroll-to-video').click(function() {
	"use strict";
	$('html,body').animate({scrollTop: $('.js--video').offset().top},1000);
});

$('.js--scroll-to-prima-sectie').click(function() {
	"use strict";
	$('html,body').animate({scrollTop: $('.js--prima-sectie').offset().top},1000);
});

$('.js--scroll-to-doua-sectie').click(function() {
	"use strict";
	$('html,body').animate({scrollTop: $('.js--doua-sectie').offset().top},1000);
});

$('.js--scroll-to-parere').click(function() {
	"use strict";
	$('html,body').animate({scrollTop: $('.js--parere').offset().top},1000);
});


$('.js--nav-icon').click(function() {
		"use strict";
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });



function writeFromXML(xml) {
		"use strict";
            var i;
            var xmlDoc = xml.responseXML;
            var table = "<thead><tr><th>Marca</th><th>Model</th><th>An</th></tr></thead>";
            var x = xmlDoc.getElementsByTagName("masina");
            table += "<tbody>";
            for (i = 0; i < x.length; i++) {
                table += "<tr><td>" +
                x[i].getElementsByTagName("marca")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("model")[0].childNodes[0].nodeValue +
                "</td><td>" +
				x[i].getElementsByTagName("anFab")[0].childNodes[0].nodeValue +
                "</td></tr>";
            }
            table += "</tbody>";
            return table;
        }

function loadXML() {
	"use strict";
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    //document.getElementById("demo").innerHTML = this.responseText;
                    document.getElementById("tabelXML").innerHTML = writeFromXML(this);
                }
            };
            xhttp.open("GET", "date.xml", true);
            xhttp.send();
        }
	
