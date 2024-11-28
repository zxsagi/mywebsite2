document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); //menangani pengiriman form

    let isValid = true;

    //membuat aturan nama
    const name = document.getElementById("name").value.trim();
    const nameError = document.getElementById("nameError");
    if (name.length === 0 || name.length > 40) {
        nameError.textContent = "Name must be between 1 and 40 characters.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    //membuat nomor telpon dengan aturan angka saja dan max 15 digit
    const phone = document.getElementById("phone").value.trim();
    const phoneError = document.getElementById("phoneError");
    if (!/^\d{1,15}$/.test(phone)) {
        phoneError.textContent = "Phone number must be up to 15 digits and numeric.";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    //membuat email
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    //membuat password dengan aturan yang di terapkan
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(password)) {
        passwordError.textContent =
            "Password must be 8-16 characters long, with at least 1 uppercase letter, 1 lowercase letter, and 1 number.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    //memberikan keterangan jika valid
    if (isValid) {
        alert("Your registration is successful");
        document.getElementById("registrationForm").reset();
    }
});
