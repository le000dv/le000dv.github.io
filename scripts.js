document.addEventListener('DOMContentLoaded', function() {
    // Esempio di script per gestire il form di contatto
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Grazie per averci contattato!');
        // Qui puoi aggiungere la logica per inviare il form al server
    });

    var backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
