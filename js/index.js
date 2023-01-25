alert("hello world");
var myImage = document.querySelector('img');

myImage.onClick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/first-screen-bg.jpg') {
      myImage.setAttribute ('src','images/plus-image-2.jpg');
    } else {
      myImage.setAttribute ('src','images/first-screen-bg.jpg');
    }
}
