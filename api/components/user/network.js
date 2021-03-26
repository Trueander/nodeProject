const express = require('express');

const response = require('../../../network/response');
const CONTROLLER = require('./index');

const router = express.Router();

router.get('/', (req, res) => {
    const lista = CONTROLLER.list();
    response.success(req, res, lista, 200);
});

module.exports = router;