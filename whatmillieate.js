/* this script expects NUMBER_OF_IMAGES to be defined in global scope */

function getRandomImage() {
	var image_number = Math.floor( Math.random() * NUMBER_OF_IMAGES );
	return "images/image" + image_number + ".jpg";
}

function changeImage() {
	var image = getRandomImage();

	// don't show the same one twice in a row
	while ( image == document.getElementById( 'destruction' ).src.substr( -image.length ) ) {
		image = getRandomImage();
	}
	document.getElementById( 'destruction' ).src = image;
}

changeImage();