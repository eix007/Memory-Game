//- Create an images Array storing images path names and duplicate the images 
//- Target the main div to create gameboard inside of it using DOM 
//- Create new div and image tag set it to background HYF image with varible image id 
//- Make a js forloop puts 12 images in the html 
//- Create function to shuffle images each time load it
// Give the images onclick function to compare images sources and id's
//-onclick function Store images sources and id's in Array to compare them
//- Set conditions if the compare inside the array is making match keep the tow images flipped over if there is different flip it back 	to HYF image and chose again

var Score = 1;
//Define images array 
var imgArray = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg', 'images/img6.jpg']

//Doubling the images array 
var imgDuble = imgArray.concat(imgArray);

//Set action game variables  
var cardsFlippedOver = 0;
var lastCardPicked = -1;
var flipArray = new Array();
var timer = '';


var gameboard = document.getElementById("gameboard");
var nav = document.getElementById("nav");

gameStart();

//Create images tags inside divs using for loop  
function gameStart() {
	shuffleArray(imgDuble);
	gameboard.innerHTML = "";
	for (var i = 0; i <= (imgDuble.length) - 1; i++) {
		gameboard.innerHTML += '<div class="col-md-3 col-xs-4 gameimg"><img id="img' + i + '" src="images/bgimg.jpg" onclick="compare(\'' + imgDuble[i] + '\',\'' + i + '\',this);" class="imgStyle"></div>';
	}
}

//Compared images if there is a match keep the images flipped 
function compare(imgSrc, num, imgTag) {
	if (cardsFlippedOver < 2 && lastCardPicked != num) {
		flipArray[cardsFlippedOver] = imgDuble[num];
		flipArray[(cardsFlippedOver + 2)] = imgTag.id;
		cardsFlippedOver++;
		imgTag.src = imgDuble[num];
		console.log(imgSrc);
		if (cardsFlippedOver == 2) {
			if (flipArray[0] == flipArray[1]) {
				console.log('Match Found');
				nav.innerHTML = 'Score : ' + Score++;
				choseAgain();
			} else {
				timer = setInterval(hideImg, 2000);
				console.log('Match Not Found');
			}
		}
		lastCardPicked = num;
	}
}

//Clear game action
function choseAgain() {
	cardsFlippedOver = 0;
	flipArray = [];
	clearInterval(timer);
}


//After comparing the two images there is a difference return image flip over and chose again
function hideImg() {
	if (flipArray[2]) {
		document.getElementById(flipArray[2]).src = "images/bgimg.jpg";
	}
	if (flipArray[3]) {
		document.getElementById(flipArray[3]).src = "images/bgimg.jpg";
	}
	choseAgain();
}

//Shuffling the images each time loading
function shuffleArray(d) {
	for (var c = d.length - 1; c > 0; c--) {
		var b = Math.floor(Math.random() * (c + 1));
		var a = d[c];
		d[c] = d[b];
		d[b] = a;
	}
	return d;
}