const cvLinks = {
    fr: "https://tonlien.fr/toncv_francais.pdf", // Remplace par ton lien
    de: "https://github.com/SOevcc/freelancer/raw/main/data/PascalMarty_Lebenslauf2025.pdf",
    en: "https://tonlien.fr/toncv_english.pdf"  // Remplace par ton lien
};
let translations = {};

async function loadLanguage(lang) {
    try {
        const response = await fetch(`translations/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        translations = await response.json();
        updatePageContent();
    } catch (error) {
        console.error("Erreur lors du chargement du fichier de traduction :", error);
        document.body.innerHTML = `<h1 style="color: red;">Erreur : ${error.message}</h1>`;
    }
}

function updatePageContent() {
    // Mise à jour de tous les éléments
    document.getElementById('title').innerHTML = translations.title || "Titre non trouvé";
    document.getElementById('subtitle').innerHTML = `<strong>${translations.subtitle || "Sous-titre non trouvé"}</strong>`;
    document.getElementById('name').textContent = translations.name || "Nom non trouvé";
    document.getElementById('job-title').textContent = translations['job-title'] || "Poste non trouvé";
    document.getElementById('address').textContent = translations.address || "Adresse non trouvée";
    document.getElementById('email').textContent = translations.email || "Email non trouvé";
    document.getElementById('linkedin').textContent = translations.linkedin || "LinkedIn non trouvé";
    document.getElementById('website').textContent = translations.website || "Site web non trouvé";
    document.getElementById('profile-title').textContent = translations['profile-title'] || "Profil non trouvé";
    document.getElementById('profile-text-1').innerHTML = translations['profile-text-1'] || "Texte de profil 1 non trouvé";
    document.getElementById('profile-text-2').innerHTML = translations['profile-text-2'] || "Texte de profil 2 non trouvé";
    document.getElementById('skills-title').textContent = translations['skills-title'] || "Compétences non trouvées";
    document.getElementById('skill-1').innerHTML = translations['skill-1'] || "Compétence 1 non trouvée";
    document.getElementById('skill-2').innerHTML = translations['skill-2'] || "Compétence 2 non trouvée";
    document.getElementById('skill-3').innerHTML = translations['skill-3'] || "Compétence 3 non trouvée";
    document.getElementById('skill-4').innerHTML = translations['skill-4'] || "Compétence 4 non trouvée";
    document.getElementById('why-me-title').textContent = translations['why-me-title'] || "Pourquoi moi ? non trouvé";
    document.getElementById('why-me-text').innerHTML = translations['why-me-text'] || "Texte 'Pourquoi moi ?' non trouvé";
    document.getElementById('why-me-item-1').innerHTML = translations['why-me-item-1'] || "Élément 1 non trouvé";
    document.getElementById('why-me-item-2').innerHTML = translations['why-me-item-2'] || "Élément 2 non trouvé";
    document.getElementById('why-me-item-3').innerHTML = translations['why-me-item-3'] || "Élément 3 non trouvé";
    document.getElementById('why-me-item-4').innerHTML = translations['why-me-item-4'] || "Élément 4 non trouvé";
    document.getElementById("cv-button").textContent = translations[lang]["cv-button"];
	document.getElementById("cv-button").href = cvLinks[lang];
	//document.getElementById('cv-button').textContent = translations['cv-button'] || "Bouton CV non trouvé";
}

// Charge la langue par défaut au démarrage
window.addEventListener('DOMContentLoaded', () => {
    loadLanguage('de');
});

function changeLanguage(lang) {
    loadLanguage(lang);
}
