document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".image-slide-scroll");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add("image-visible");
            }
        });
    });

    observer.observe(image);
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".pop-on-scroll");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add pop effect when visible
            }
        });
    }, { threshold: 0.5 }); // Triggers when 50% of the image is visible

    images.forEach(image => {
        observer.observe(image);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slide-down-on-scroll");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add animation when visible
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the image is visible

    images.forEach(image => {
        observer.observe(image);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in-on-scroll");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% visible

    elements.forEach(element => {
        observer.observe(element);
    });
});
