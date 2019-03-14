// // Select all slide-show images
// let slideImages = document.getElementsByClassName("carousel");
// // Select all captions for slide-show images
// let slideCaptions = document.getElementsByClassName("caption");
//
// // Start the slide-show with first image
// let slideIndex = 1;
// slideShow(slideIndex);
//
//
// // Select slide-show arrows and add click Event listener
// let buttonPrev = document.getElementById("prev");
//
// let buttonNext = document.getElementById("next");
// buttonPrev.addEventListener("click", () => {
//    plusSlide(-1);
// })
// buttonNext.addEventListener("click", () => {
//
//    plusSlide(1);
// })
//
// // If "next" is clicked then go one image forward else one image backward
// function plusSlide(n) {
//    slideIndex += n;
//
//    slideShow(slideIndex);
// }

// // Slide show function, select the image and the caption to show
// function slideShow(n) {
//    if (n > slideImages.length) {
//        slideIndex = 1
//    }
//    if (n < 1) {
//        slideIndex = slideImages.length;
//
//    }
//    for (let i = 0; i < slideImages.length; i++) {
//        slideImages[i].style.display = "none";
//    }
//    for (let i = 0; i < slideCaptions.length; i++) {
//        slideCaptions[i].style.display = "none";
//    }
//    slideImages[slideIndex - 1].style.display = "block";
//    slideCaptions[slideIndex - 1].style.display = "block";
//
// };

const no = () =>{
    document.getElementById("marvel_universe").style.display='block';
    // document.getElementById("welcome_content").style.display='none';
    document.getElementById("button_options").style.display='none';
}
document.getElementById("no").addEventListener('click', no);
