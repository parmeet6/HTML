document.addEventListener("DOMContentLoaded", function () {
    const images = ['watch1.jpeg', 'watch2.jpeg', 'watches3.jpeg', 'watch5.jpeg', 'watch6.jpeg']; // List of image filenames
    let currentIndex = 0;

    const gallery = document.getElementById('gallery');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function updateGallery() {
        gallery.innerHTML = `<img src="${images[currentIndex]}" alt="Gallery Image">`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    });

    // Initial load
    updateGallery();

    // Access form and container within the DOMContentLoaded event
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackContainer = document.getElementById("feedback-container");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const rating = document.getElementById("rating").value;

        // Display the rating in the feedback container
        const ratingText = document.createElement("p");
        ratingText.textContent = `Thank you for rating the product: ${rating} stars!`;
        feedbackContainer.appendChild(ratingText);

        // You can also add functionality to store the rating on the server here

        // Clear the form after submission
        feedbackForm.reset();
    });
});

