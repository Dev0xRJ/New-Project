const ProdutoService = require('../services/ProdutoService');
class ProdutoService {
    constructor() {
        this.produtoService = new ProdutoService();
    }

    async createProduto(produto) {
        try {
            const savedProduto = await this.produtoService.save(produto);
            return savedProduto;
        } catch (error) {
            throw new Error('Error creating produto: ' + error.message);
        }
    }
    async up
}
