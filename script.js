// Do your work in this file.

// Do your work in this file.


// var element = ["view", "grass", "sun", "mountain", "mountain-top"];


var divView = document.createElement("div");
divView.className = "view";
document.body.appendChild(divView);

var divGrass = document.createElement("div");
divGrass.className = "grass";
divView.appendChild(divGrass);

var divSun = document.createElement("div");
divSun.className = "sun";
divView.appendChild(divSun);

var divMountain = document.createElement("div");
divMountain.className = "mountain";
divView.appendChild(divMountain);

var divMountaintop = document.createElement("div");
divMountaintop.className = "mountain-top";
divMountain.appendChild(divMountaintop);



var t = 1;
while (t < 6) {
    var divRay = document.createElement("div");
    divRay.className = "ray-" + t;
    divSun.appendChild(divRay);
    t++;
}

var m = 1;
do {
    var divMountaincap = document.createElement("div");
    divMountaincap.className = "mountain-cap-" + m;
    divMountain.appendChild(divMountaincap);
    m++;
} while (m < 4);

// while (t < 4) {
//     addASingleDivYo();
//     t++;
// }

// var t = 1;
// do {
//    ray-1();
//    t++;
// } while (t < 6);



// var text = "";
// var i = 0;
// do {
//     text += "The number is " + i;
//     i++;
// }
// while (i < 5);