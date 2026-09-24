
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

    // Close mobile menu when link is clicked

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";

        });

    });
}


// contact


const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("contactName").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const phone =
        document.getElementById("contactPhone").value.trim();

    const message =
        document.getElementById("contactMessage").value.trim();


    const nameError =
        document.getElementById("contactNameError");

    const emailError =
        document.getElementById("contactEmailError");

    const phoneError =
        document.getElementById("contactPhoneError");

    const messageError =
        document.getElementById("contactMessageError");

    const success =
        document.getElementById("contactSuccess");


    // Clear previous errors

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    success.textContent = "";


    let isValid = true;


    // Name

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;

    } else if (name.length < 3) {

        nameError.textContent =
            "Name must be at least 3 characters.";

        isValid = false;
    }


    // Email

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email.";

        isValid = false;
    }


    // Phone

    const phonePattern =
        /^[0-9+\-\s]{10,15}$/;

    if (phone === "") {

        phoneError.textContent =
            "Please enter your phone number.";

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Please enter a valid phone number.";

        isValid = false;
    }


    // Message

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must be at least 10 characters.";

        isValid = false;
    }


    // Success

    if (isValid) {

        success.textContent =
            "Thank you! Your message has been sent successfully.";

        contactForm.reset();
    }

});


}
