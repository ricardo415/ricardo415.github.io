$('#first').click(changeToFirst);
function changeToFirst() {

$('#bigimage').attr('src', 'img/1.jpg');

}

$('#second').click(changeToSecond);
function changeToSecond() {
	
	$('#bigimage').attr('src', 'img/2.jpg')
}

$('#third').click(changeToThird);
function changeToThird() {

	$('#bigimage').attr('src', 'img/3.jpg')
}


$('.thumb').click(changeBigImage)
function changeBigImage() {
var imageUrl = $(this).attr('src');
$('#bigimage').attr('src', imageUrl); 

}

