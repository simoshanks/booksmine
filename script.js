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
// Fonction pour valider les order
document.getElementById("orderForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let telephon = document.getElementById("telephon").value.trim();
    let quantity = document.getElementById("quantity").value;
    let rib = document.getElementById("rib").value.trim();
    let date = document.getElementById("date").value;

    // Regular expressions for validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;
    let ribPattern = /^[0-9]{16,}$/; // At least 16 digits

    if (name === "" || email === "" || address === "" || telephon === "" || quantity === "" || rib === "" || date === "") {
      alert("Veuillez remplir tous les champs.");
      event.preventDefault();
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      event.preventDefault();
      return;
    }

    if (!phonePattern.test(telephon)) {
      alert("Le numéro de téléphone doit contenir exactement 10 chiffres.");
      event.preventDefault();
      return;
    }

    if (!ribPattern.test(rib)) {
      alert("Le RIB doit contenir au moins 16 chiffres.");
      event.preventDefault();
      return;
    }

    alert("Formulaire soumis avec succès !");
  });