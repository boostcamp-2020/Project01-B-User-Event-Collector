const express = require('express');
const magazineController = require('./magazines.controller');

const router = express.Router();

router.get('/', magazineController.list);
router.get('/:id', magazineController.findOne);

export default router;
