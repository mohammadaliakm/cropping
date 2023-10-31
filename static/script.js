document.addEventListener("DOMContentLoaded", function(){
const image = document.getElementById('image');
const xi = document.getElementById('x');
const yi = document.getElementById('y');
const widthi = document.getElementById('width');
const heighti = document.getElementById('height');
const form = document.getElementById('formi');
const csrf = "CsrfViewMiddleware";
const cropper = new Cropper(image, {
    aspectRatio: NaN,
});

document.querySelector('#btn-crop').addEventListener('click', function() {
    var croppedImage = cropper.getCroppedCanvas().toDataURL("image/jpeg");
    
    document.getElementById('output').src = croppedImage;
    document.querySelector(".cropped-container").style.display = 'flex';
});
document.querySelector('#btn-save').addEventListener('click', function() {
    var x1 = cropper.getData()['x'];
    var y1 = cropper.getData()['y'];
    var width1 = cropper.getData()['width'];
    var height1 = cropper.getData()['height'];
    
    if (xi !== null){
        xi.value = x1;
        yi.value = y1;
        widthi.value = width1;
        heighti.value = height1;
        form.submit();
       
        console.log("doneeeee")
    }
});
});

