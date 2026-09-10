const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        e.preventDefault();
        alert("Please fill in all fields.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
        return;
    }

    document.getElementById("successMessage").textContent =
        "Form submitted successfully!";

});