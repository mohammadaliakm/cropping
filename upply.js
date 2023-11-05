document.addEventListener("DOMContentLoaded", function(){ 
const images = document.getElementsByTagName('img');

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

var x1 = parseInt(getCookie('x'))
var y1 = parseInt(getCookie('y'))     //you should parse it to be used!
var w = parseInt(getCookie('w'))
var h = parseInt(getCookie('h'))
console.log(h)

for (let i = 0; i < images.length; i++) {
    const cropper = new Cropper(images[i], {
        viewMode:2,
        aspectRatio: NaN,    //the cropped area isnt specified by a rule
        data:{ 
            x: x1,
            y: y1,
            width: w,
            height: h
            },
    });

    //     images[i].addEventListener('click', function() {
    //       alert(`You clicked on ${images[i].getAttribute('alt')}`);
    // });
}
});



// html:
// <div class="main-container">
//   <div class="img-container" id="images_croped">
//     {% for i in img %}
//       <img src="/{{i}}" alt="">  {% comment %}since you are in upply url , it will take upply/media which is wrong , so you need to add a back slash at the first {% endcomment %}
//     {% endfor %}
//   </div>
//   </div>


//   views:
//   imgs=[]
//   imgs.append(f'media/pdf_page{uploaded_image.name}.png')
//   context['img']=imgs