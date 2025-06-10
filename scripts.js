document.addEventListener('DOMContentLoaded', function() {
    // Esempio di script per gestire il form di contatto
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Grazie per averci contattato!');
        // Qui puoi aggiungere la logica per inviare il form al server
    });
});
