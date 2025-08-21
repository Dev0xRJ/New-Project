const produtos = [];
let id = 1;

class ProdutoRepository {
    save(produto) {
        produto.id = id++;
        produtos.push(produto);
        return produto;
    }
}