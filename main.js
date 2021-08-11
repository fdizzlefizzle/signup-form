function validateForm() {
    event.preventDefault();

    const emailRegexCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const pword = document.getElementById("pword");

    const fields = [fname, lname, email, pword];

    // Resets form, hides error symbol and text, removes border
    for (let i = 0; i < fields.length; i++) {
        fields[i].previousElementSibling.classList.add("hidden");
        fields[i].nextElementSibling.classList.add("hidden");
        fields[i].classList.remove("error-border");
    }

    // Empty check for every field
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            fields[i].nextElementSibling.innerHTML = `${fields[i].name} cannot be empty`;
            fields[i].nextElementSibling.classList.remove("hidden");
            fields[i].previousElementSibling.classList.remove("hidden")
            fields[i].classList.add("error-border");
        }
    }
    
    // Verify email type
    const emailEmpty = !email.nextElementSibling.classList.contains("hidden")

    if (!emailEmpty && !emailRegexCheck.test(String(email.value).toLowerCase())) {
        email.nextElementSibling.innerHTML = "Please enter a valid email";
        email.nextElementSibling.classList.remove("hidden");
    }
}


    