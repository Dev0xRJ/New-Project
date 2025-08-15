const ProdutoService = require('../services/ProdutoService');
class ProdutoController {
    async createProduto(req, res) {
        try {
            const produtoData = req.body;
            const produtoService = new ProdutoService();
            const produto = await produtoService.createProduto(produtoData);
            res.status(201).json(produto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllProdutos(req, res) {
        try {
            const produtoService = new ProdutoService();
            const produtos = await produtoService.getAllProdutos();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}