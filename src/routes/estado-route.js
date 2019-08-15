'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/estado-controller');

router.get('/', controller.get);
router.get('/:sigla', controller.getBySigla);
router.post('/', controller.post);
router.post('/many', controller.postMany);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;
