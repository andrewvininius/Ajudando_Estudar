function showTranslation(element) {
    const word = element.textContent;
    const translation = getTranslation(word); // Replace this with your translation logic
    
    const translationElement = document.getElementById("translation");
    translationElement.textContent = `Tradução de "${word}": ${translation}`;
}

function getTranslation(word) {
    
    const translations = {
        "Hello": "Olá",
        "Goodbye": "Adeus",
        "Thank you": "Obrigado",
        "Please": "Por favor"
        // Adicione mais traduções aqui
    };
    
    return translations[word] || "Translation not available";
}
