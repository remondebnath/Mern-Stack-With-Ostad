const express= require('express');
const router= express.Router();

const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');



// blogController
router.get('/blog/create',blogController.create)
router.get('/blog/read',blogController.read)
router.get('/blog/delete',blogController.delete)
router.get('/blog/update',blogController.update)

// blogDetailsController
router.get('/blog-details/create',blogDetailsController.create)
router.get('/blog-details/read',blogDetailsController.read)
router.get('/blog-details/delete',blogDetailsController.delete)
router.get('/blog-details/update',blogDetailsController.update)

//  commentController
router.get('/blog-comment/create', commentController.create)
router.get('/blog-comment/read', commentController.read)
router.get('/blog-comment/delete', commentController.delete)
router.get('/blog-comment/update', commentController.update)

// messageController
router.get('/blog-message/create', messageController.create)
router.get('/blog-message/read', messageController.read)
router.get('/blog-message/delete', messageController.delete)
router.get('/blog-message/update', messageController.update)

// portfolioController
router.get('/blog-portfolio/create', portfolioController.create)
router.get('/blog-portfolio/read', portfolioController.read)
router.get('/blog-portfolio/delete', portfolioController.delete)
router.get('/blog-portfolio/update', portfolioController.update)

// productController
router.get('/blog-product/create', productController.create)
router.get('/blog-product/read', productController.read)
router.get('/blog-product/delete', productController.delete)
router.get('/blog-product/update', productController.update)

// profitController
router.get('/blog-profit/create', profitController.create)
router.get('/blog-profit/read', profitController.read)
router.get('/blog-profit/delete', profitController.delete)
router.get('/blog-profit/update', profitController.update)

// projectController
router.get('/blog-project/create', projectController.create)
router.get('/blog-project/read', projectController.read)
router.get('/blog-project/delete', projectController.delete)
router.get('/blog-project/update', projectController.update)

// serviceController
router.get('/blog-service/create', serviceController.create)
router.get('/blog-service/read', serviceController.read)
router.get('/blog-service/delete', serviceController.delete)
router.get('/blog-service/update', serviceController.update)

// titleController
router.get('/blog-title/create', titleController.create)
router.get('/blog-title/read', titleController.read)
router.get('/blog-title/delete', titleController.delete)
router.get('/blog-title/update', titleController.update)

module.exports= router;