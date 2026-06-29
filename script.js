// Defina aqui a senha que você deseja usar
const SENHA_PREDEFINIDA = "Carteiras2026.PV";

// Executa automaticamente assim que a página é carregada
window.onload = function() {
    // Abre uma janela simples do navegador pedindo a senha
    const senhaDigitada = prompt("Digite a senha para liberar a edição das carteirinhas:");

    if (senhaDigitada === SENHA_PREDEFINIDA) {
        alert("Acesso liberado!");
    } else {
        alert("Senha incorreta! A página será bloqueada.");
        // Esconde todo o conteúdo do site caso o usuário erre ou cancele
        document.body.innerHTML = "<h2 style='text-align:center; margin-top:50px; font-family:sans-serif;'>Acesso Negado. Recarregue a página e digite a senha correta para editar.</h2>";
    }
};

// Lógica para carregar as fotos individualmente
const inputsFoto = document.querySelectorAll('.upload-foto');

inputsFoto.forEach(input => {
    input.addEventListener('change', function(event) {
        const arquivo = event.target.files[0];
        const preview = this.nextElementSibling;
        
        if (arquivo) {
            const leitor = new FileReader();
            leitor.onload = function(e) {
                preview.innerHTML = ''; // Remove o texto "Foto 3x4"
                preview.style.border = 'none'; // Remove o tracejado
                preview.style.backgroundImage = `url('${e.target.result}')`;
            }
            leitor.readAsDataURL(arquivo);
        }
    });
});

// Imprimir via navegador
function imprimir() {
    window.print();
}

