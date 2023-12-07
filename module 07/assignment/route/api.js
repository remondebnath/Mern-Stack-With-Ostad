const express= require('exoress');
const { Router } = require('express');
cost route= express.Router();


const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');

// blogController
router.get('/blog/create',blogController.create)
router.get('/blog/read',blogController.read)
router.get('/blog/delete',blogController.delete)
router.get('/blog/update',blogController.update)

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





module.exports= router;