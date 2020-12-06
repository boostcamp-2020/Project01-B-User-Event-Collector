const express = require('express');
const magazineController = require('./magazines.controller');

const router = express.Router();

router.get('/', magazineController.list);

export default router;
