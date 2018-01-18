/*http://wbruno.com.br/html/nao-mostrar-site-ate-ter-terminado-de-carregar-javascript-loading/*/
function id(el) {
		return document.getElementById(el);
		}
		function hide(el) {
		id(el).style.display = 'none';//escondendo tudo
		}
		window.onload = function() {
		id('carousel').style.display = 'block';//liberando qndo terminar
		hide('loading');
}

	hide('all');

