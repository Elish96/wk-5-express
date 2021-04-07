const router = require('express').Router();
const productController = require('../conrollers/productController');

router.get('/', productController.allProducts);
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.patch('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);  

module.exports = router;