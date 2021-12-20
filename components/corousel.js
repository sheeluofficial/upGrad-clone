function carousel() {
    return ` <i class="fas fa-chevron-left"></i>
    <a href="" id="carousel-link">
        <img src="" alt="" id="carousel-img">
      
    </a>
    <i class="fas fa-chevron-right"></i>`
}

function carousel_img(images,urls,index) {
    let a = document.getElementById("carousel-link");
    a.setAttribute("href",urls[index]);
    let img = document.getElementById("carousel-img");
    img.setAttribute("src",images[index]);
     }
    

let images = [
    "carousel_src/Banner__1639034174307.jpg",
    "carousel_src/2__1635260988274.jpg",
    "carousel_src/3__1635261036491.jpg",
    "carousel_src/4__1635261083350.jpg"
    ];
 let urls = [
     "https://www.upgrad.com/",
     "https://www.upgrad.com/mba-course/?utm_source=ORGANIC&utm_medium=ALL&utm_campaign=IND_BRD_WEB_ALL_homepagebanner_ALL_ALL_ALL_FF2MBA_ALL",
     "https://www.upgra carousel_img(images,urls,index)d.com/data-science-course/?utm_source=ORGANIC&utm_medium=ALL&utm_campaign=IND_BRD_WEB_ALL_homepagebanner_ALL_ALL_ALL_FF2MBA_ALL",
     "https://www.upgrad.com/executive-mba-ssbm/?utm_source=ORGANIC&utm_medium=ALL&utm_campaign=IND_BRD_WEB_ALL_homepagebanner_ALL_ALL_ALL_FF2MBA_ALL"
 ];

//  let index = 1;

 function carousel_js(index, carousel_img,images,urls) {
     
setInterval(()=>{
    index = (index + 1)%images.length;
    carousel_img(index)
},6000);
carousel_img(images,urls,0);

 let left_arrow   = document.querySelectorAll("#img-carousel i")[0];
 let right_arrow = document.querySelectorAll("#img-carousel i")[1];

 left_arrow.addEventListener("click",()=>{
     if(index==0) {
index=images.length-1;
     } else{
         index--;
     }
  
     ;
 }) 
 right_arrow.addEventListener("click",()=>{
     index = (index +1 )%images.length;
      carousel_img(images,urls,index);
 }) 
 }

export {carousel,carousel_img,images,urls,carousel_js}