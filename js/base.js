let pictures = ["recources/bild1.png", "recources/bild2.png", "recources/bild3.png", "recources/bild4.png"]
let i = 0;
document.getElementById("btnNext").addEventListener("click", nextImg)
document.getElementById("btnPrev").addEventListener("click", prevImg)
document.getElementById("img").src = pictures[0];

function slideShow() {
    i++
    if (i < pictures.length) {
        document.getElementById("img").src = pictures[i];
        setTimeout(slideShow, 2000);
    } else {
        i = 0;
        document.getElementById("img").src = pictures[i];
        setTimeout(slideShow, 2000);
    }
}

function nextImg(){
    i++;
    if (i < pictures.length) {
        document.getElementById("img").src = pictures[i];
    } else {
        i = 0;
        document.getElementById("img").src = pictures[i];
    }
}
function prevImg(){
    i--;
    if(i > -1){
        document.getElementById("img").src = pictures[i];
    } else{
        i = pictures.length - 1;
        document.getElementById("img").src = pictures[i];
    }
}

setTimeout(slideShow, 2000);