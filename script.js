// script.js

// Seleciona a imagem da lupa e o campo de pesquisa
const lupa = document.getElementById('lupa');
const pesquisa = document.getElementById('pesquisa');

// Adiciona um evento de clique à imagem da lupa
lupa.addEventListener('click', function() {
    // Captura o valor do campo de pesquisa
    const termoDeBusca = pesquisa.value.trim(); // Remove espaços em branco

    // Verifica se o termo de busca não está vazio
    if (termoDeBusca) {
        // Redireciona para a página correspondente ao termo de busca
        window.location.href = `/${termoDeBusca}`; // Altere a URL conforme necessário
    } else {
        // Se o campo estiver vazio, você pode optar por não fazer nada ou mostrar uma mensagem
        console.log('Por favor, insira um termo de busca.');
    }
});