/* menu déroulant avec les widgets */

// Récupération des blocs
var mainMenu = document.querySelector("#menu");
var burgerMenu = document.querySelector("#menu-burger");

/*===============================*/
/*=== Clic sur le menu burger ===*/
/*===============================*/
// Vérifie si l'événement touchstart existe et est le premier déclenché
var clickedEvent = "click"; // Au clic si "touchstart" n'est pas détecté
window.addEventListener('touchstart', function detectTouch() {
	clickedEvent = "touchstart"; // Transforme l'événement en "touchstart"
	window.removeEventListener('touchstart', detectTouch, false);
}, false);

// Créé un "toggle class" en Javascrit natif (compatible partout)
burgerMenu.addEventListener(clickedEvent, function(evt) {
	console.log(clickedEvent);
	// Modification du menu burger
	if(!this.getAttribute("class")) {
		this.setAttribute("class", "clicked");
	} else {
		this.removeAttribute("class");
	}
	// Variante avec x.classList (ou DOMTokenList), pas 100% compatible avant IE 11...
	// burgerMenu.classList.toggle("clicked");

	// Créé l'effet pour le menu slide (compatible partout)
	if(mainMenu.getAttribute("class") != "visible") {
		mainMenu.setAttribute("class", "visible");
	} else {
		mainMenu.setAttribute("class", "invisible");
	}
}, false);

/*===============================*/
/*=== Swipe avec Touch Events ===*/
/*===============================*/
// Si l'écran est plus petit que "x" pixels (optionnel) // 1024px ici
if(screen.width <= 1024) {
	var startX = 0; // Position de départ
	var distance = 100; // 100 px de swipe pour afficher le menu

	// Au premier point de contact
	window.addEventListener("touchstart", function(evt) {
		// Récupère les "touches" effectuées
		var touches = evt.changedTouches[0];
		startX = touches.pageX;
		between = 0;
	}, false);

	// Quand les points de contact sont en mouvement
	window.addEventListener("touchmove", function(evt) {
		// Limite les effets de bord avec le tactile...
		evt.preventDefault();
		evt.stopPropagation();
	}, false);

	// Quand le contact s'arrête
	window.addEventListener("touchend", function(evt) {
		var touches = evt.changedTouches[0];
		var between = touches.pageX - startX;

		// Détection de la direction
		if(between > 0) {
			var orientation = "ltr";
		} else {
			var orientation = "rtl";
		}

		// Modification du menu burger
		if(Math.abs(between) >= distance && orientation == "ltr" && mainMenu.getAttribute("class") != "visible") {
				burgerMenu.setAttribute("class", "clicked");
		}
		if(Math.abs(between) >= distance && orientation == "rtl" && mainMenu.getAttribute("class") != "invisible") {
				burgerMenu.removeAttribute("class");
		}

		// Créé l'effet pour le menu slide (compatible partout)
		if(Math.abs(between) >= distance && orientation == "ltr" && mainMenu.getAttribute("class") != "visible") {
			mainMenu.setAttribute("class", "visible");
		}
		if(Math.abs(between) >= distance && orientation == "rtl" && mainMenu.getAttribute("class") != "invisible") {
			mainMenu.setAttribute("class", "invisible");
		}
	}, false);
}

/* meteo */

/* hidden */

let widget1 = document.getElementById('meteo');
widget1.addEventListener('click', widge1);
let nb1 = 0;
function widge1(){
	let widg1 = document.getElementById('meteoo');
	widg1.style.visibility = "visible";
	nb1++;
	switch (nb1){
		case 1:
			widg1.style.visibility = "visible";
			let calcu1 = document.getElementById('calculette');
			calcu1.style.visibility = "hidden";
			let convert1 = document.querySelector('#convertisseur');
			convert1.style.visibility = "hidden";
			let mdp1 = document.getElementById('mdpass');
			mdp1.style.visibility = "hidden";
			let prix1 = document.getElementById('price');
			prix1.style.visibility = "hidden";
			let compt1 = document.getElementById('compteur');
			compt1.style.visibility = "hidden";
			let plouf1 = document.getElementById('ploufplouf');
			plouf1.style.visibility = "hidden";
			nb1 + 1;
			break;
		case 2:
			widg1.style.visibility = "hidden";
			document.getElementById("resultat").style.visibility = "hidden";
			let queryLoc = document.getElementById("queryLoc");
			queryLoc.value = "";
			nb1 = 0;
			break;
	}
}

/* meteo */


document.getElementById("resultat").style.visibility = "hidden";
var callBackGetSuccess = function(data) {
	let element = document.getElementById('zone_meteo');
	element.innerHTML = "";

    console.log("donnees api", data)
	let queryLoc = document.getElementById("queryLoc").value;
	let newContent = document.createTextNode(queryLoc + " " + data.main.temp + " C° " + data.weather[0].main);
	element.appendChild(newContent);
	var iconcode = data.weather[0].icon;
	var iconurl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/" + iconcode + ".svg";
	$('#wicon').attr('src', iconurl);
	document.getElementById("resultat").style.visibility = "visible";
}

function buttonClickGET() {
	
	
    var queryLoc = document.getElementById("queryLoc").value;
	// api key : fe8b5facfcec5807d9bdc00e6bc4e4df

    var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&appid=fe8b5facfcec5807d9bdc00e6bc4e4df&units=metric";
    
    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}

/* calculatrice */

/* hidden */
let widget2 = document.getElementById('calc');
widget2.addEventListener('click', widge2);
let nb2 = 0;
function widge2(){
	let widg2 = document.getElementById('calculette');
	widg2.style.visibility = "visible";
	nb2++;
	switch (nb2){
		case 1:
			widg2.style.visibility = "visible";
			let mdp2 = document.getElementById('mdpass');
			mdp2.style.visibility = "hidden";
			let convert2 = document.querySelector('#convertisseur');
			convert2.style.visibility = "hidden";
			let meteo2 = document.getElementById('meteoo');
			meteo2.style.visibility = "hidden";
			document.getElementById("resultat").style.visibility = "hidden";
			let queryLoc = document.getElementById("queryLoc");
			queryLoc.value = "";
			let prix2 = document.getElementById('price');
			prix2.style.visibility = "hidden";
			let compt2 = document.getElementById('compteur');
			compt2.style.visibility = "hidden";
			let plouf2 = document.getElementById('ploufplouf');
			plouf2.style.visibility = "hidden";
			nb2 + 1;
			break;
		case 2:
			widg2.style.visibility = "hidden";
			nb2 = 0;
			break;
	}
}

/* calcule */

var operators= ['+','-','*','/'];
var formule_el = document.getElementById("formule");
var result_el = document.getElementById("result");

/**
* @description Cliquer sur une touche
*
* @param {String value chiffre|operateur}
* @returns {void}
*/
function click_touch(value){		
        // si on a déjà fait un calcul précédemment
        if (result_el.textContent.length > 0)
        {
        // on vide la formule
        formule_el.value = "";

        // si on a cliqué sur un operateur
        if(operators.indexOf(value) != -1){
                // On concate le résultat précédent
                formule_el.value = result_el.textContent;
        }
        
        // On vide le résultat
        result_el.textContent = "";
        }

        // On concate le chiffre/opérateur
        formule_el.value += value; 
}

/**
* @description Clic sur "="
*
* @returns {void}
*/
function egal(){
        var chiffre = formule_el.value;
        // Si la formule se termine par un opérateur
        if(operators.indexOf(chiffre.charAt(chiffre.length-1 )) !=-1 ){
        //Calculer le résultats avec le résultats par le dernier opérateur
        formule_el.value = formule_el.value + eval(chiffre.substring(0,chiffre.length-1));
        }
        result_el.textContent = eval(formule_el.value);
        formule_el.value = "";
}

/**
* @description Vider champs formule et résultat
*
* @returns {void}
*/
function erase(){
        formule_el.value = "";
        result_el.textContent = "";
}

/* convertisseur */

/* hidden */

let widget3 = document.getElementById('convert');
widget3.addEventListener('click', widge3);
let nb3 = 0;
function widge3(){
	let widg3 = document.querySelector('#convertisseur');
	widg3.style.visibility = "visible";
	nb3++;
	switch (nb3){
		case 1:
			widg3.style.visibility = "visible";
			let calcu3 = document.getElementById('calculette');
			calcu3.style.visibility = "hidden";
			let meteo3 = document.getElementById('meteoo');
			meteo3.style.visibility = "hidden";
			document.getElementById("resultat").style.visibility = "hidden";
			let queryLoc = document.getElementById("queryLoc");
			queryLoc.value = "";
			let mdp3 = document.getElementById('mdpass');
			mdp3.style.visibility = "hidden";
			let compt3 = document.getElementById('compteur');
			compt3.style.visibility = "hidden";
			let plouf3 = document.getElementById('ploufplouf');
			plouf3.style.visibility = "hidden";
			nb3 + 1;
			break;
		case 2:
			widg3.style.visibility = "hidden";
			nb3 = 0;
			break;
	}
}

/* liste */

let cache = document.querySelector('.boutonmenuprincipal');
cache.addEventListener('click', visibl);
let nbrclk = 0;
function visibl(){
	let child = document.querySelector('.dropdown-child');
	nbrclk++;
	switch (nbrclk){
		case 1:
			child.style.display = 'block';
			nbrclk + 1;
		break;
		case 2:
			child.style.display = 'none';
			nbrclk = 0;
		break;
	}
}

let cacher = document.querySelector('.boutonmenuprincipale');
cacher.addEventListener('click', visibil);
let nbrclki = 0;
function visibil(){
	let childr = document.querySelector('.dropdown-childe');
	nbrclki++;
	switch (nbrclki){
		case 1:
			childr.style.display = 'block';
			nbrclki + 1;
		break;
		case 2:
			childr.style.display = 'none';
			nbrclki = 0;
		break;
	}
	
}
/*  
let cachers = document.querySelector('.boutonmenuprincipales');
cachers.addEventListener('click', visibili);
let nbrclkic = 0;
function visibili(){
	let childre = document.querySelector('.dropdown-childes');
	nbrclkic++;
	switch (nbrclkic){
		case 1:
			childre.style.display = 'block';
			nbrclkic + 1;
		break;
		case 2:
			childre.style.display = 'none';
			nbrclkic = 0;
		break;
	}
}
*/
/* convertion */

let grammes = document.getElementById("grammes");
let kilos = document.getElementById("kilos");
let livres = document.getElementById("livres");

grammes.addEventListener("input", function(){convPoids(this.id, this.value);});
kilos.addEventListener("input", function(){convPoids(this.id, this.value);});
livres.addEventListener("input", function(){convPoids(this.id, this.value);});

function convPoids(id, valeur){
		console.log(valeur);
		
        if(id == "grammes"){
                kilos.value = valeur / 1000;
                livres.value = valeur * 0.0022046;
				if(!valeur) {
					livres.value = "";
					grammes.value = "";
					kilos.value = "";
					
				}
        }else if(id == "kilos"){
                grammes.value = valeur * 1000;
                livres.value = valeur * 2.2046;
				if(!valeur) {
					livres.value = "";
					grammes.value = "";
					kilos.value = "";
					
				}
        }else if(id == "livres"){
                grammes.value = valeur /0.0022046;
                kilos.value = valeur / 2.2046;
				if(!valeur) {
					livres.value = "";
					grammes.value = "";
					kilos.value = "";
					
				}
        }
}
/*  
let dollars = document.getElementById("dollars");
let yen = document.getElementById("yen");
let euros = document.getElementById("euros");

dollars.addEventListener("input", function(){argent(this.id, this.value);});
yen.addEventListener("input", function(){argent(this.id, this.value);});
euros.addEventListener("input", function(){argent(this.id, this.value);});

function argent(id, valeur){
	console.log(valeur);
		if(id == "dollars"){
			yen.value = valeur * 115,385;
			euros.value = valeur * 0,87;
			if(!valeur) {
				yen.value = "";
				dollars.value = "";
				euros.value = "";
			}
		}else if (id == "yen"){
			dollars.value = valeur * 0,0087;
			euros.value = valeur * 0,0076;
			if(!valeur) {
				yen.value = "";
				dollars.value = "";
				euros.value = "";
			}
		}else if (id == "euros"){
			dollars.value = valeur * 1,14;
			yen.value = valeur * 131,11;
			if(!valeur) {
				yen.value = "";
				dollars.value = "";
				euros.value = "";
			}
		}
}
*/
let km = document.getElementById("km");
let m = document.getElementById("m");
let dm = document.getElementById("dm");
let cm = document.getElementById("cm");
let mm = document.getElementById("mm");
let mi = document.getElementById("mi");
let inch = document.getElementById("inch");
let ft = document.getElementById("ft");
let yrd = document.getElementById("yrd");

km.addEventListener("input", function(){convMesures(this.id, this.value);});
m.addEventListener("input", function(){convMesures(this.id, this.value);});
dm.addEventListener("input", function(){convMesures(this.id, this.value);});
cm.addEventListener("input", function(){convMesures(this.id, this.value);});
mm.addEventListener("input", function(){convMesures(this.id, this.value);});
mi.addEventListener("input", function(){convMesures(this.id, this.value);});
inch.addEventListener("input", function(){convMesures(this.id, this.value);});
ft.addEventListener("input", function(){convMesures(this.id, this.value);});
yrd.addEventListener("input", function(){convMesures(this.id, this.value);});

function convMesures(id, valeur){
        if(id == "km"){
                m.value = valeur * 1000;
                dm.value = valeur * 10000;
                cm.value = valeur * 100000;
                mm.value = valeur * 1000000;
                mi.value = valeur * 0.62137119223733;
                inch.value = valeur * 39370.078740157;
                ft.value = valeur * 3280.8398950131;
                yrd.value = valeur * 1093.6132983377;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "m"){
                km.value = valeur * 0.001;
                dm.value = valeur * 10;
                cm.value = valeur * 100;
                mm.value = valeur * 1000;
                mi.value = valeur * 0.00062137119223733;
                inch.value = valeur * 39.370078740157;
                ft.value = valeur * 3.2808398950131;
                yrd.value = valeur * 1.0936132983377;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "dm"){
                km.value = valeur * 0.0001;
                m.value = valeur * 0.1;
                cm.value = valeur * 10;
                mm.value = valeur * 100;
                mi.value = valeur * 0.000062137119223733;
                inch.value = valeur * 3.9370078740157;
                ft.value = valeur * 0.32808398950131;
                yrd.value = valeur * 0.10936132983377;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "cm"){
                km.value = valeur * 0.00001;
                m.value = valeur * 0.01;
                dm.value = valeur * 0.1;
                mm.value = valeur * 10;
                mi.value = valeur * 0.0000062137119223733;
                inch.value = valeur * 0.39370078740157;
                ft.value = valeur * 0.032808398950131;
                yrd.value = valeur * 0.010936132983377;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "mm"){
                km.value = valeur * 0.000001;
                m.value = valeur * 0.001;
                dm.value = valeur * 0.01;
                cm.value = valeur * 0.1;
                mi.value = valeur * 0.00000062137119223733;
                inch.value = valeur * 0.039370078740157;
                ft.value = valeur * 0.0032808398950131;
                yrd.value = valeur * 0.0010936132983377;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "mi"){
                km.value = valeur * 1.609344;
                m.value = valeur * 1609.344;
                dm.value = valeur * 16093.44;
                cm.value = valeur * 160934.4;
                mm.value = valeur * 1609344;
                inch.value = valeur * 63360;
                ft.value = valeur * 5280;
                yrd.value = valeur * 1760;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "inch"){
                km.value = valeur * 0.0000254;
                m.value = valeur * 0.0254;
                dm.value = valeur * 0.254;
                cm.value = valeur * 2.54;
                mm.value = valeur * 25.4;
                mi.value = valeur * 0.000015782828282828;
                ft.value = valeur * 0.083333333333333;
                yrd.value = valeur * 0.027777777777778;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "ft"){
                km.value = valeur * 0.0003048;
                m.value = valeur * 0.3048;
                dm.value = valeur * 3.048;
                cm.value = valeur * 30.48;
                mm.value = valeur * 304.8;
                mi.value = valeur * 0.00018939393939394;
                inch.value = valeur * 12;
                yrd.value = valeur * 0.33333333333334;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }else if(id == "yrd"){
                km.value = valeur * 0.0009144;
                m.value = valeur * 0.9144;
                dm.value = valeur * 9.144;
                cm.value = valeur * 91.44;
                mm.value = valeur * 914.4;
                mi.value = valeur * 0.00056818181818181;
                inch.value = valeur * 36;
                ft.value = valeur * 3;
				if(!valeur) {
					km.value = "";
					m.value = "";
					dm.value = "";
					cm.value = "";
					mm.value = "";
					mi.value = "";
					inch.value = "";
					ft.value = "";
					yrd.value = "";
				}
        }
}

/* generateur de mdp */

/* hidden */

let widget4 = document.getElementById('mdp');
widget4.addEventListener('click', widge4);
let nb4 = 0;
function widge4(){
	let widg4 = document.getElementById('mdpass');
	widg4.style.visibility = "visible";
	nb4++;
	switch (nb4){
		case 1:
			widg4.style.visibility = "visible";
			let calcu4 = document.getElementById('calculette');
			calcu4.style.visibility = "hidden";
			let convert4 = document.querySelector('#convertisseur');
			convert4.style.visibility = "hidden";
			let meteo4 = document.getElementById('meteoo');
			meteo4.style.visibility = "hidden";
			document.getElementById("resultat").style.visibility = "hidden";
			let queryLoc = document.getElementById("queryLoc");
			queryLoc.value = "";
			let mdp4 = document.getElementById('price');
			mdp4.style.visibility = "hidden";
			let compt4 = document.getElementById('compteur');
			compt4.style.visibility = "hidden";
			let plouf4 = document.getElementById('ploufplouf');
			plouf4.style.visibility = "hidden";
			nb4 + 1;
			break;
		case 2:
			widg4.style.visibility = "hidden";
			nb4 = 0;
			break;
	}
}

/* générateur */

function getRandomNum(lbound, ubound) {
	return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
	}
	function getRandomChar(number, lower, upper, other, extra) {
	var numberChars = "0123456789";
	var lowerChars = "abcdefghijklmnopqrstuvwxyz";
	var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var otherChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
	var charSet = extra;
	if (number == true)
		charSet += numberChars;
	if (lower == true)
		charSet += lowerChars;
	if (upper == true)
		charSet += upperChars;
	if (other == true)
		charSet += otherChars;
	return charSet.charAt(getRandomNum(0, charSet.length));
	}
	function getPassword(length/* ,  extraChars */, firstNumber, firstLower, firstUpper, firstOther,
		latterNumber, latterLower, latterUpper, latterOther) {
	var rc = "";
	if (length > 0)
		rc = rc + getRandomChar(firstNumber, firstLower, firstUpper, firstOther/*  ,   extraChars*/);
	for (var idx = 1; idx < length; ++idx) {
		rc = rc + getRandomChar(latterNumber, latterLower, latterUpper, latterOther/*  , extraChars*/);
	}
	return rc;
}

/* juste prix */

/* hidden */

let widget5 = document.getElementById('prix');
widget5.addEventListener('click', widge5);
let nb5 = 0;
function widge5(){
	let widg5 = document.getElementById('price');
	widg5.style.visibility = "visible";
	nb5++;
	switch (nb5){
		case 1:
			widg5.style.visibility = "visible";
			let calcu5 = document.getElementById('calculette');
			calcu5.style.visibility = "hidden";
			let convert5 = document.querySelector('#convertisseur');
			convert5.style.visibility = "hidden";
			let meteo5 = document.getElementById('meteoo');
			meteo5.style.visibility = "hidden";
			document.getElementById("resultat").style.visibility = "hidden";
			let queryLoc = document.getElementById("queryLoc");
			queryLoc.value = "";
			let mdp5 = document.getElementById('mdpass');
			mdp5.style.visibility = "hidden";
			let compt5 = document.getElementById('compteur');
			compt5.style.visibility = "hidden";
			let plouf5 = document.getElementById('ploufplouf');
			plouf5.style.visibility = "hidden";
			nb5 + 1;
			break;
		case 2:
			widg5.style.visibility = "hidden";
			nb5 = 0;
			break;
	}
}

/* juste prix */

var prix = 0;
var secondes = 0;
var paris = null;
var isPlay = true;
var prixMax = 20;

$('document').ready(function(){
	
	$('.prixMax').html(prixMax);
	
	$('#commencer').click(function() {
		
		isPlay = true;
		secondes = 30;
		$('.chrono').html(secondes);
		$('.secondes').html('Secondes');
		prix = Math.floor(Math.random() * prixMax);
		$('#paris').css({'visibility': 'visible', 'opacity': '1'});
		setTimeout(function() {$('#nombre').focus()}, 100);
		$('#nombre').val('');
		
		var chrono = setInterval(function(){
		if (secondes == 0) {
			isPlay = false;
			clearInterval(chrono);
			$('.reponse').html('Perdu !');
			$('#paris').css({'visibility': 'hidden', 'opacity': '0'});
		}
		else if (isPlay) {
			secondes--;
			$('.chrono').html(secondes);
			if (secondes == 1) {
				$('.secondes').html('Seconde');
			}
		}
		else {
			clearInterval(chrono);
			$('#paris').css({'visibility': 'hidden', 'opacity': '0'});
		}
		}, 1000);
	});
	
	$('#paris').submit(function(event) {
		if (isPlay) {
		paris = $('#nombre').val();
		
		if (paris == prix) {
			isPlay = false;
			$('.reponse').html('Gagné !');
		}
		else if (paris < prix) {
			$('.reponse').html('Plus grand !');
		}
		else {
			$('.reponse').html('Plus petit !');
		}
		
		$('#nombre').val('');
		}
		event.preventDefault();
	});
	
});

/* plouf plouf */

/* hidden */

let widget6 = document.getElementById('plouf');
widget6.addEventListener('click', widge6);
let nb6 = 0;
function widge6(){
	let widg6 = document.getElementById('ploufplouf');
	widg6.style.visibility = "visible";
	nb6++;
	switch (nb6){
		case 1:
			widg6.style.visibility = "visible";
			let calcu6 = document.getElementById('calculette');
			calcu6.style.visibility = "hidden";
			let convert6 = document.querySelector('#convertisseur');
			convert6.style.visibility = "hidden";
			let meteo6 = document.getElementById('meteoo');
			meteo6.style.visibility = "hidden";
			document.getElementById("resultat").style.visibility = "hidden";
			let queryLoc = document.getElementById("queryLoc");
			queryLoc.value = "";
			let mdp6 = document.getElementById('mdpass');
			mdp6.style.visibility = "hidden";
			let compt6 = document.getElementById('compteur');
			compt6.style.visibility = "hidden";
			let prix6 = document.getElementById('price');
			prix6.style.visibility = "hidden";
			nb6 + 1;
			break;
		case 2:
			widg6.style.visibility = "hidden";
			nb6 = 0;
			break;
	}
}

/* compteur de caractère */

/* hidden */

let widget7 = document.getElementById('count');
widget7.addEventListener('click', widge7);
let nb7 = 0;
function widge7(){
	let widg7 = document.getElementById('compteur');
	widg7.style.visibility = "visible";
	nb7++;
	switch (nb7){
		case 1:
			widg7.style.visibility = "visible";
			let calcu7 = document.getElementById('calculette');
			calcu7.style.visibility = "hidden";
			let convert7 = document.querySelector('#convertisseur');
			convert7.style.visibility = "hidden";
			let meteo7 = document.getElementById('meteoo');
			meteo7.style.visibility = "hidden";
			document.getElementById("resultat").style.visibility = "hidden";
			let queryLoc = document.getElementById("queryLoc");
			queryLoc.value = "";
			let mdp7 = document.getElementById('mdpass');
			mdp7.style.visibility = "hidden";
			let plouf7 = document.getElementById('ploufplouf');
			plouf7.style.visibility = "hidden";
			let prix7 = document.getElementById('price');
			prix7.style.visibility = "hidden";
			nb7 + 1;
			break;
		case 2:
			widg7.style.visibility = "hidden";
			nb7 = 0;
			break;
	}
}

/* heure */

function affichZero(nombre) {
	// cette fonction prend en paramètre un nombre
	// si ce nombre est inférieur à 10, on affiche 0 + ce nombre
	// Ex: il est 07h00
	return nombre < 10 ? '0' + nombre : nombre;
	}
	function dateEtHeure() {
	// Cette fonction fait deux choses :
	// 1 - Elle construit une constante avec l'objet Date()
	// qui renvoie (année, mois, jour, heure, minutes, seconde, millisecondes)
	// tout ça est dans l'objet infos
	 
	const infos = new Date();
	 
	// 2 - La fonction attribue du texte au div id="heure_exacte"
	// ce texte n'est autre que l'heure contenue dans l'objet infos
	// on ne souhaite afficher que l'heure et les minutes avec infos.getHours()
	// et infos.getMinutes(), On Sépare par ":" Ex: il est 07:00.
	 
	document.getElementById('heure_exacte').innerHTML = ' ' + affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes());
	}// Fin fonction dateEtHeure
	 
	// Pour actualiser l'heure chaque minutes, on rappelle la fonction dateEtHeure()
	// toutes les 100 millisecondes, donc toutes les secondes
	window.onload = function() {
	setInterval("dateEtHeure()", 100);
};

/* jour */


