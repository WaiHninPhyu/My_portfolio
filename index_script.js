var typingEffect = new Typed(".multi_txt", {
    strings : ["Web Developer", "Web Designer", "Content Writer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500,
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to calculate age
    function calculateAge(birthYear) {
        var currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }

    // Set your birth year here
    var birthYear = 1998;

    // Get the element where you want to display the age
    var ageElement = document.getElementById('age');

    // Calculate the age
    var age = calculateAge(birthYear);

    // Update the content of the age element
    ageElement.textContent = age;
});

function scrollToSection() {
    // Get the target section element
    var aboutSection = document.getElementById('about_me');

    // Scroll to the about section smoothly
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}

    //switch background color
    