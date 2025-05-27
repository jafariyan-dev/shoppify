    const slider_container = document.querySelector('.sliderLayer');
    const slide = document.querySelectorAll('.slide');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    
    let currentIndex = 0;

    // update the visible slide
    function showSlide(index) {
      if (index < 0) {
        currentIndex = slide.length - 1;
      } else if (index >= slide.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      // Shift slides
      slider_container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Event listeners for navigation arrows
    next.addEventListener('click', () => {
    //   showSlide(currentIndex + 1);
      showSlide(currentIndex );
    });
    
    prev.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });

    //Auto-play
    setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);
