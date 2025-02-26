function toggleMenu() {
    const navBar = document.getElementById('navBar');
    const logoContainer = document.getElementById('logoContainer');
    navBar.classList.toggle('expanded');
    logoContainer.classList.toggle('move-left');
}

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 

    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    //setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
    showSlidesManually(n);
}

function showSlidesManually(n) {
    let slides = document.getElementsByClassName("slide");

    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}

showSlides(); // Start the automatic slideshow


document.addEventListener("DOMContentLoaded", function () {
    const gridImages = document.querySelectorAll(".grid img");
    const gridContainer = document.querySelector(".grid");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Re-triggers animation on scroll back
            }
        });
    }, { threshold: 0.5 });

    // Observing the grid images
    gridImages.forEach((img) => observer.observe(img));
    
    // Observing the grid container for additional animations if needed
    observer.observe(gridContainer);
});


document.getElementById('know-more-btn').addEventListener('click', function() {
    var shortContent = document.getElementById('short-content');
    var fullContent = document.getElementById('full-content');
    var button = document.getElementById('know-more-btn');
    
    if (fullContent.style.display === 'none') {
        fullContent.style.display = 'block'; // Show full content
        shortContent.style.display = 'none'; // Hide short content
        button.textContent = 'Know Less'; // Change button text
    } else {
        fullContent.style.display = 'none'; // Hide full content
        shortContent.style.display = 'block'; // Show short content
        button.textContent = 'Know More'; // Change button text back
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".third img, .content2");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Re-triggers animation when scrolled again
            }
        });
    }, { threshold: 0.5 });

    elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cardsContainer = document.querySelector(".projects");
    const cards = Array.from(document.querySelectorAll(".card"));

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Filter projects
            const filteredCards = category === "all"
                ? cards
                : cards.filter(card => card.getAttribute("data-category") === category);

            // Clear container and append filtered cards
            cardsContainer.innerHTML = "";
            filteredCards.forEach(card => {
                card.style.display = "block"; // Ensure it's visible
                cardsContainer.appendChild(card);
            });
        });
    });

    // Default to show all projects
    document.querySelector(".filter-btn[data-category='all']").click();
});





