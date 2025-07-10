document.addEventListener('DOMContentLoaded', () => {
    // 1. Pega os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    const produtoId = params.get('id'); // Pega o valor do parâmetro 'id'

    // 2. Encontra o produto correspondente no nosso "banco de dados"
    // AQUI ESTÁ A CORREÇÃO: Usamos 'produtosDB', que é o nome correto da variável do outro arquivo.
    const produto = produtosDB[produtoId];

    // 3. Se o produto existir, preenche a página. Se não, mostra um erro.
    if (produto) {
        // Atualiza o título da página
        document.title = `${produto.nome} - Rua Skate Shop`;

        // Pega os elementos da página pelos IDs
        const product_image = document.getElementById('product-image');
        const product_title = document.getElementById('product-title');
        const product_price = document.getElementById('product-price');
        const product_description = document.getElementById('product-description');
        
        // Preenche os elementos com as informações do produto
        product_image.src = produto.imagem;
        product_image.alt = produto.nome;
        product_title.textContent = produto.nome;
        product_price.textContent = produto.preco;
        
        // Para a descrição, que tem quebras de linha, usamos innerHTML
        // Isso vai interpretar as quebras de linha (<br> ou `\n` transformado) corretamente.
        product_description.innerHTML = produto.descricao.replace(/\n/g, '<br>');

    } else {
        // Se o produto não for encontrado, mostra uma mensagem de erro mais estilizada
        const container = document.querySelector('.product-page-container');
        container.innerHTML = `
            <div style="text-align: center; width: 100%; padding: 40px;">
                <h1 class="product-title">Oops! Produto não encontrado.</h1>
                <p class="product-description" style="text-transform: none;">O produto que você está procurando não existe ou o link está quebrado.</p>
                <a href="index.html" class="back-link">← Voltar para a loja</a>
            </div>
        `;
        document.title = "Produto não encontrado - Rua Skate Shop";
    }
});