import express from "express";
 
import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductByDesc
} from "../controller/product.js";
 
const router = express.Router();
 
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/:desc', getProductByDesc);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router
 