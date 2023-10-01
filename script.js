const catalogo = [ {
    id: 1,
    nome:'Jaqueta de Couro',
    marca:'Zara',
    preco:249.90,
    nomeArquivoImagem:'jaqueta_couro.jpg'
},
{
    id: 2,
    nome:'Jaqueta de Pelinho',
    marca:'Zara',
    preco:159.99,
    nomeArquivoImagem:'jaqueta_pelinho.jpg'
},
{
    id: 3,
    nome:'Jaqueta Jeans',
    marca:'Zara' ,
    preco:120.90 ,
    nomeArquivoImagem:'jaqueta_jeans.jpg'
},
{
    
    id: 4,
    nome:'Jaqueta Colorida',
    marca:'Zara' ,
    preco: 170.00,
    nomeArquivoImagem:'jaqueta_colorida.jpg'
},
{
    
    id: 5,
    nome:'Jaqueta Puffer',
    marca:'Zara',
    preco: 349.99,
    nomeArquivoImagem:'jaqueta_puffer.jpg'
}, 
{
    
    id: 6,
    nome:'Jaqueta Couro Masc' ,
    marca:'Zara' ,
    preco: 289.80,
    nomeArquivoImagem:'jaqueta_courohomen.jpg'
}, 
{
    
    id: 7,
    nome:'Croped Stras' ,
    marca:'Zara',
    preco: 89.90 ,
    nomeArquivoImagem:'cropped_linhas.jpg'
}, 
{
    
    id: 8,
    nome:'Croped Jeans' ,
    marca:'Zara' ,
    preco: 99.99,
    nomeArquivoImagem:'cropped_jeans.jpg'
},
{
    
    id: 9,
    nome:'Croped Azul Marinho',
    marca:'Zara',
    preco: 45.90 ,
    nomeArquivoImagem:'cropped_azul.jpg'
},
{
    
    id: 10,
    nome:'Camiseta Código de Barras' ,
    marca:'Zara',
    preco: 39.99 ,
    nomeArquivoImagem:'camiseta_barras.jpg'
},
{
    
    id: 11,
    nome:'Calça Malhada',
    marca:'Zara' ,
    preco: 180.90 ,
    nomeArquivoImagem:'calças_manchadas.jpg'
},
{
    
    id: 12,
    nome:'Calça Verde Musgo',
    marca:'Zara' ,
    preco: 179.90 ,
    nomeArquivoImagem:'calça_verde.jpg'
},
{
    
    id: 13,
    nome:'Calça Jeans Rasgada' ,
    marca:'Zara' ,
    preco: 169.99,
    nomeArquivoImagem:'calça_rasgada.jpg'
},
{
    
    id: 14,
    nome:'Calça Moletom' ,
    marca:'Zara' ,
    preco: 80.99,
    nomeArquivoImagem:'calça_moletom.jpg'
}, 
{
    
    id: 15,
    nome:'Calça Branca' ,
    marca:'Zara' ,
    preco:119.00  ,
    nomeArquivoImagem:'calça_branca.jpg'
},
{
    id:16,
    nome:'Calça Estilo Militar',
    marca:'Zara',
    preco: 179.99,
    nomeArquivoImagem:'calça_bolsos.jpg'
},
{
    id: 17,
    nome:'Calça Social',
    marca:'Zara',
    preco: 135.50,
    nomeArquivoImagem: 'calça_alfaiataria.jpg'
},
{
    id:18,
    nome:'Blusa Trapp',
    marca:'Zara',
    preco: 69.99,
    nomeArquivoImagem: 'blusa_travis.jpg'
} ];

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='container' id="card-produto${produtoCatalogo.id}">
<img class="img" src="./imagens/${produtoCatalogo.nomeArquivoImagem}" alt="Jaqueta de Couro Feminina" style="height: 300px;">
<p class='marca'>${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById('container-produto').innerHTML += cartaoProduto;
}

console.log('tudo ok')
