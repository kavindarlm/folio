var x = document.getElementById("images");

var images = new Array(
    "./img/product-photography-lead-image_800x.jpg",
    "./img/20191009140007-GettyImages-1053962188.jpeg",
    "./img/film-photography-592347645-59e4d0609abed500119e7b14.jpg",
    "./img/maxresdefault (1).jpg",
    "./img/photographer-looking-out-at-a-sunrise.jpg",
    "./img/maxresdefault.jpg"
);

var length=images.length;

var a=0;

function animateSlider(){
    if(a>length-1)
    {
        a=0;
    }
    x.src = images[a];
    a++;
    setTimeout('animateSlider()',4000);
}