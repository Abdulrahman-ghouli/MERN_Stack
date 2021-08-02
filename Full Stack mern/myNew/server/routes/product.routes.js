const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    
    app.post('/api/addproducts', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllproducts);
}
