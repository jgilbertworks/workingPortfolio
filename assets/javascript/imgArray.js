let last_known_scroll_position = 0;
let ticking = false;

document.addEventListener("DOMContentLoaded", function() {


    let imgArray = 'assets/images/laptop-1.png,assets/images/laptop-1.png,assets/images/laptop-1.png'.split(',');

    for (let index = 0; index < imgArray.length; index++) {
        let newElement = document.createElement('div');
        newElement.id = 'laptop';
        newElement.className = "laptop hvr-float-shadow";
        newElement.innerHTML = '<img src="' + imgArray[index] + '">';
        document.getElementById('laptop').appendChild(newElement);

    }

});