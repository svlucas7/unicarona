// Função para controlar o loading
document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    
    // Esconde o loading quando a página estiver totalmente carregada
    window.addEventListener('load', function() {
        setTimeout(() => {
            loading.classList.add('hidden');
            // Remove o elemento após a animação
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 500);
    });

    // Mostra o loading se demorar muito para carregar
    setTimeout(() => {
        if (loading && !loading.classList.contains('hidden')) {
            loading.classList.add('hidden');
            setTimeout(() => {
                loading.remove();
            }, 500);
        }
    }, 3000); // Timeout de segurança
}); 