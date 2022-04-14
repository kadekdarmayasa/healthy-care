function flkty(elemen, wrapAround = true, autoPlay = true) {
	return new Flickity(elemen, {
		wrapAround: wrapAround,
		autoPlay: autoPlay,
	});
}

const carouselContainer = document.querySelectorAll('.carousel-container');
carouselContainer.forEach((element) => flkty(element));
