function flkty(elemen, wrapAround = true, autoPlay = true, prevNextButtons = true, pageDots = true) {
	return new Flickity(elemen, {
		wrapAround: wrapAround,
		autoPlay: autoPlay,
		prevNextButtons: prevNextButtons,
		pageDots: pageDots,
	});
}

const carouselContainer = document.querySelectorAll('.carousel-container');
carouselContainer.forEach(function (element) {
	if (element.classList.contains('carousel-people-testimoni')) {
		flkty(element, true, false, false, true);
	} else {
		flkty(element);
	}
});
