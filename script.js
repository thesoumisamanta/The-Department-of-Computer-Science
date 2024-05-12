document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showImage(index) {
        // Hide all images
        carouselImages.forEach(image => image.style.opacity = 0);
        // Show the image at the given index
        carouselImages[index].style.opacity = 1;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showImage(currentIndex);
    }

    // Show the first image initially
    showImage(currentIndex);

    // Automatically switch to the next image every 3 seconds (3000 milliseconds)
    setInterval(nextImage, 3000);
});
