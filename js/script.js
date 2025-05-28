    const sliderLayerEl = document.querySelector('.parent_slider');
    const slide = document.querySelectorAll('.slide-link');
    const next = document.getElementById('slider_next');
    const prev = document.getElementById('slider_prev');
    const mainImageEl=document.querySelector('main_image');
    
    let currentIndex = 0;

    // update the visible slide
    function showSlide(index) {
      if (index < 0) {
        currentIndex = slide.length - 1;
        mainImageEl.src="https://ap-golmart.myshopify.com/cdn/shop/t/3/assets/slideshow_image_1_2x.jpg?v=178103731659532258761445247735";
      } else if (index >= slide.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      // Shift slides
      sliderLayerEl.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

     // Event listeners for navigation arrows

    next.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });

    function nextSlide(){
       showSlide(currentIndex+1);
    };
    
    prev.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });

    //Auto-play
    setInterval(() => {
      showSlide(currentIndex + 1);
    }, 3000);





  
    // $(document).ready(function() {
    //     $('#sliderlayer').parent_slider({
    //       	effect: 'random',
    //       	animSpeed: 500,
    //       	pauseTime: 8000
    //     });
    //   	$('#sliderlayer').on('swipeleft',function(e){
		// 	$('a.slider_next').trigger('click');
		// 	e.stopPropagation();
    //         return false;
		// });
    //     $('#sliderlayer').on('swiperight',function(e){
		// 	$('a.slider_prev').trigger('click');
		// 	e.stopPropagation();
    //         return false;
		// });
    // });
