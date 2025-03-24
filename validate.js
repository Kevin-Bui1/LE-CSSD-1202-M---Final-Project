document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        let valid = true;


        document.querySelectorAll(".error").forEach(error => error.innerText = "");

        const nameInput = document.getElementById("name");
        const name = nameInput.value.trim();
        if (name === "") {
            document.getElementById("nameError").innerText = "Name is required.";
            valid = false;
        }

        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("emailError").innerText = "Enter a valid email address.";
            valid = false;
        }

        const phoneInput = document.getElementById("phone");
        const phone = phoneInput.value.trim();
        const phoneRegex = /^(\(\d{3}\)\s?|\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
        if (!phoneRegex.test(phone)) {
            document.getElementById("phoneError").innerText = "Enter a valid phone number.";
            valid = false;
        }

        const passwordInput = document.getElementById("password");
        const password = passwordInput.value.trim();
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            document.getElementById("passwordError").innerText = "Password must be at least 8 characters long, with 1 uppercase, 1 lowercase, and 1 number.";
            valid = false;
        }

        const confirmPasswordInput = document.getElementById("confirmPassword");
        const confirmPassword = confirmPasswordInput.value.trim();
        if (confirmPassword !== password) {
            document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
            valid = false;
        }

        const messageInput = document.getElementById("subject");
        const message = messageInput.value.trim();
        if (message === "") {
            document.getElementById("subjectError").innerText = "Message is required.";
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        } else {
            alert("Form submitted successfully!");
        }
    });
});

