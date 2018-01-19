var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image to overlay
$overlay.append($image);


//Add overlay
$("body").append($overlay);
	
//Add a caption
$overlay.append($caption);


//Capture the click event on the link to image
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");

	//Update overlay with selected image
	$image.attr("src", imageLocation);


	//Show the overlay on the page
	$overlay.show();
	
	
	//Get child's alt attribute and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
	});

	
//When overlay is clicked
$overlay.click(function() {
	//Hide the overlay
	$overlay.hide();

});
