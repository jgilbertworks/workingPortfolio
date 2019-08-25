document.addEventListener("DOMContentLoaded", function() {


    // let faArray = 'text,text,text'.split(',');
    let fontAwesome = {};
    fontAwesome["fa-adjust"] = ["f042"];
    fontAwesome["fa-adn"] = ["f170"];
    fontAwesome["fa-align-center"] = ["f037"];
    fontAwesome["fa-align-justify"] = ["f039"];
    fontAwesome["fa-align-left"] = ["f036"];
    fontAwesome["fa-align-right"] = ["f038"];
    fontAwesome["fa-ambulance"] = ["f0f9"];
    fontAwesome["fa-anchor"] = ["f13d"];

    for (let index = 0; index < fontAwesome.length; index++) {
        let faElement = document.createElement('div');
        faElement.id = 'fa';
        // faElement.className = 'fa fa-pen fa-3x';
        faElement.innerHTML = fontAwesome[index];
        document.getElementById('fab').appendChild(faElement);

    }

});