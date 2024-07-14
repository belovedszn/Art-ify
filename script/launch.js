

export const launchSlider = () => {
    const imagelist = document.querySelector(".launch-slider-wrapper .launch-cs-hidden");
    const slideBtn = document.querySelectorAll(".launch-slider-wrapper .launch-slide-btn");
    const sliderScrollbar = document.querySelector(".launch-container .launch-slider-wrapper");
    const scrollbarThumb = sliderScrollbar.querySelector(".launch-scrollbar-thumb");
    const maxScrollLeft = imagelist.scrollWidth - imagelist.clientWidth;

    // handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e)=> {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        // update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;


            scrollbarThumb.style.left = `${boundedPosition}px`;
            imagelist.scrollLeft = scrollPosition;
        }

        // remove event listeners on mouse up
        const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        }

        // add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks 
    slideBtn.forEach(button => {
        button.addEventListener("click", ()=> {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imagelist.clientWidth * direction;
            imagelist.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideBtn = ()=> {
        slideBtn[0].style.display = imagelist.scrollLeft <= 0 ? "none" : "block";
        slideBtn[1].style.display = imagelist.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imagelist.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }


    imagelist.addEventListener("scroll", ()=> {
        handleSlideBtn();
        updateScrollThumbPosition();
    })
}

window.addEventListener("load", launchSlider);