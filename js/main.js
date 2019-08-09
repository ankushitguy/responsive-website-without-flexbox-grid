//nav stick to top on scroll fonction
		window.onscroll = function(){myFunction()};
		var navbar = document.getElementById('navbar');
		var sticky = navbar.offsetTop;
		function myFunction(){
			if (window.pageYOffset>=sticky) {
					navbar.classList.add("sticky")
				}
				else{
					navbar.classList.remove("sticky");
				}
		}
		//image clicked event


		//Array of classes
		var image_clicked = document.getElementsByClassName('card-image');
		//empty array to store image location
		var image_destination = Array(image_clicked.length);
		//iterate location into empty array
		for (var j = 0; j < image_clicked.length; j++) {
			image_destination[j] = 'https://picsum.photos/id/'+(j+1)+'/1024/640';
			// https://picsum.photos/id/1/1024/640
		}

		//add onclick listener to all images also onclick display modal
		for (var i = 0; i < image_clicked.length; i++) {
				try{throw i}
				catch(ii){
					image_clicked[ii].onclick = function(){
						document.getElementsByClassName('modal-image')[0].src = image_destination[ii];
						document.getElementsByClassName('modal-bg')[0].style.display = 'block';
						document.getElementsByClassName('modal-bg')[0].style.transition = '.5s ease-in-out';
						document.getElementsByClassName('modal-image')[0].style.transition = '.5s ease-in-out';

						console.log(ii);
						// window.onscroll = no
					}
			}
		}

		//modal close button
		document.getElementsByClassName('modal-close-btn')[0].onclick = function(){document.getElementsByClassName('modal-bg')[0].style.display = 'none';};
		//image left click
		var array_left;
		document.getElementsByClassName('modal-image-left')[0].onclick = function(){
		array_left = (parseInt(/\d/.exec(document.getElementsByClassName('modal-image')[0].src)[0]))-1;
		if (array_left>0&&array_left<=image_destination.length-1) {
		document.getElementsByClassName('modal-image')[0].src = image_destination[--array_left];

		console.log(array_left);
		}
	};
		//image right click
		var array_right;
		document.getElementsByClassName('modal-image-right')[0].onclick = function(){
		array_right = (parseInt(/\d/.exec(document.getElementsByClassName('modal-image')[0].src)[0]))-1 ;
		if (array_right>=0&&array_right<image_destination.length-1) {
		document.getElementsByClassName('modal-image')[0].src = image_destination[++array_right];
		console.log(array_right);

		}
		};