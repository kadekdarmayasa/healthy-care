function flkty(elemen, wrapAround = true, prevNextButtons = true, pageDots = true) {
	return new Flickity(elemen, {
		wrapAround: wrapAround,
		prevNextButtons: prevNextButtons,
		pageDots: pageDots,
	});
}

const carouselContainer = document.querySelectorAll('.carousel-container');
carouselContainer.forEach(function (element) {
	flkty(element);
});
