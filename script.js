document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire si erreur

    let isValid = true; 

    // Récupérer les champs
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    // Récupérer les divs d'erreur
    let firstnameError = document.getElementById("firstnameError");
    let lastnameError = document.getElementById("lastnameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    // Réinitialiser les messages d'erreur
    firstnameError.innerText = "";
    lastnameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    // Vérifier les champs
    if (firstname.value.trim() === "") {
        firstnameError.innerText = "Veuillez entrer votre prénom.";
        isValid = false;
    }
    
    if (lastname.value.trim() === "") {
        lastnameError.innerText = "Veuillez entrer votre nom.";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.innerText = "Veuillez entrer votre adresse email.";
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        emailError.innerText = "Veuillez entrer une adresse email valide.";
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.innerText = "Veuillez entrer votre message.";
        isValid = false;
    }

    // Si tout est valide, on peut envoyer le formulaire
    if (isValid) {
        alert("Formulaire envoyé avec succès !");
        this.submit(); // Envoyer le formulaire
    }
});

// Fonction pour valider un email
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

