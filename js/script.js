const images = [
    "images/a.jpg", 
    "images/b.jpg", 
    "images/c.jpg"
];

function dissolveImage(element) {
    // Pick a random image
    const randomIndex = Math.floor(Math.random() * images.length);
    const newImageUrl = `url('${images[randomIndex]}')`;

    // Apply the new image - CSS handles the 'dissolve' transition automatically
    element.style.backgroundImage = newImageUrl;

    // Schedule the next dissolve randomly (between 2 and 5 seconds)
    // Slower intervals usually look better for dissolving effects
    const nextTick = Math.random() * 1000 + 2000;
    setTimeout(() => dissolveImage(element), nextTick);
}

// Start the gallery
document.querySelectorAll(".slide-div").forEach((div) => {
    // Initial image setup
    const firstRandom = Math.floor(Math.random() * images.length);
    div.style.backgroundImage = `url('${images[firstRandom]}')`;

    // Start the random cycle with a staggered offset
    setTimeout(() => dissolveImage(div), Math.random() * 1000);
});
