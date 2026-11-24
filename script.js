const bouton = document.getElementById("calculer");
const prix = document.getElementById("prix");
const quantite = document.getElementById("quantite");
const resultat = document.getElementById("resultat");

bouton.addEventListener("click", function () {
    let p = prix.value;
    let q = quantite.value;

    let total = p + q;

    console.log("opération effectuée")
    resultat.textContent = "Total : " + 0 + " DT";
});