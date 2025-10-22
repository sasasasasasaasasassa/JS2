var locations = new Array("images/1.gif", "images/2.gif",
    "images/3.gif", "images/4.gif");
var currentImage = 0;
        
function nextImage() {
    currentImage++;
    if (currentImage == locations.length) 
        currentImage = 0;                
    document.images["picture"].src = locations[currentImage];
    return false;
}

function nazatImage() {
    currentImage--;
    if (currentImage < 0)currentImage = locations.length - 1;              
    document.images["picture"].src = locations[currentImage];
    return false;
}