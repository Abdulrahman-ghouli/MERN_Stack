const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllproducts);
    app.get('/api/products/:id', ProductController.getProduct);

}
