let pictures = ["recources/bild1.png", "recources/bild2.png", "recources/bild3.png", "recources/bild4.png"]
let i = 0;
document.getElementById("btnNext").addEventListener("click", nextImg)
document.getElementById("btnPrev").addEventListener("click", prevImg)
let imgSrc = document.getElementById("img").src = pictures[0];

function slideShow() {
    i++
    if (i < pictures.length) {
        imgSrc = pictures[i];
        setTimeout(slideShow, 3000);
    } else {
        i = 0;
        imgSrc = pictures[i];
        setTimeout(slideShow, 3000);
    }
}

function nextImg(){
    i++;
    if (i < pictures.length) {
        imgSrc = pictures[i];
    } else {
        i = 0;
        imgSrc = pictures[i];
    }
}
function prevImg(){
    i--;
    if(i > -1){
        imgSrc = pictures[i];
    } else{
        i = pictures.length - 1;
        imgSrc = pictures[i];
    }
}

setTimeout(slideShow, 2000);