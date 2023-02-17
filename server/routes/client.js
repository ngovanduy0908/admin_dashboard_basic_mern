import express from 'express';
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
} from '../controllers/client.js';

const router = express.Router();
router.get('/products/:pages', getProducts);
router.get('/customers', getCustomers);
router.get('/transactions', getTransactions);
router.get('/geography', getGeography);

export default router;
